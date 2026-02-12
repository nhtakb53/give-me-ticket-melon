// ============================================================================
// melon_v3.js — Pre-fetch 최적화 버전
//
// 핵심 아이디어: T 이전에 sessionKey를 미리 획득하여,
// T 시점에는 즉시 NetFunnel_Action을 호출한다.
//
// Critical Path 개선:
//   v2: T → generateSessionKey(100-300ms) → NetFunnel_Action → 대기열 진입
//   v3: T → 캐시된 sessionKey로 즉시 NetFunnel_Action → 대기열 진입 (~2-5ms)
// ============================================================================

const CONFIG = {
  prodId: "212780",          // 상품 ID
  scheduleNo: 100001,        // 회차 번호
  fireTime: "20:37:50",      // 시간 설정 (HH:mm:ss)
  offsetSamples: 30,         // 초기 오프셋 샘플 수 (중앙값 사용)
  offsetGapMs: 60,           // 샘플간 간격 (ms)
  recalSamples: 10,          // T-5s 재보정 샘플 수
  recalGapMs: 40,            // 재보정 간격 (ms)
  sellTypeCode: "ST0001",    // ST0001: 일반예매, ST0002: 선예매
  reservationType: "ST0001", // ST0001: 일반예매, ST0002: 선예매
  netfunnelName: "reservationZAM", // reservationZAM: 일반예매, preReservationOneStopZAM: 선예매
  maxRetries: 3,             // 예매 요청 최대 재시도 횟수
  retryDelayMs: 300,         // 재시도 간격 (ms)

  // v3 최적화 옵션
  enablePreFetch: true,      // sessionKey 사전 획득 활성화
  preFetchLeadMs: 0,         // 0 = 측정된 API RTT 기반 자동 계산
  hedgeCount: 3,             // 병렬 hedging 요청 수 (Promise.any)
  enableConnectionWarmup: true, // TCP/TLS 커넥션 워밍업
  warmupCount: 3,            // 워밍업 요청 수
};

// ============================================================================
// 유틸리티
// ============================================================================

function validateConfig(config) {
  const required = ["prodId", "scheduleNo", "fireTime", "sellTypeCode", "reservationType", "netfunnelName"];
  const missing = required.filter((key) => !config[key] && config[key] !== 0);
  if (missing.length > 0) {
    throw new Error(`CONFIG 필수 값 누락: ${missing.join(", ")}`);
  }
  if (!/^\d{2}:\d{2}:\d{2}$/.test(config.fireTime)) {
    throw new Error(`fireTime 형식 오류: "${config.fireTime}" (HH:mm:ss 형식이어야 합니다)`);
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const nextFrame = () => new Promise((r) => requestAnimationFrame(r));
const makeOffsetUrl = (prodId) =>
  `https://tktapi.melon.com/poc/foruInfo.json?prodId=${encodeURIComponent(prodId)}&requestservicetype=P`;

const PROD_KEY_URL = "https://tktapi.melon.com/api/product/prodKey.json";

const log = (tag, msg) => {
  const ts = new Date().toISOString();
  console.log(`[${ts}] [${tag}] ${msg}`);
};

const diag = (tag, msg) => {
  const ts = new Date().toISOString();
  console.log(`[${ts}] [DIAG:${tag}] ${msg}`);
};

function parseFireTodayOrTomorrow(fireHHMMSS) {
  const [hh, mm, ss] = fireHHMMSS.split(":").map((v) => parseInt(v, 10) || 0);
  const t = new Date();
  t.setHours(hh, mm, ss, 0);
  const now = Date.now();
  const target = t.getTime();
  if (now > target) {
    log("TIME", `${fireHHMMSS}이 이미 지남 → 내일로 설정`);
    return target + 86_400_000;
  }
  return target;
}

// ============================================================================
// 시간 동기화 (v2와 동일)
// ============================================================================

async function measureOffset(url, N, gapMs) {
  const offsets = [];
  const rtts = [];
  let failures = 0;

  for (let i = 0; i < N; i++) {
    try {
      const t0e = Date.now();
      const t0p = performance.now();
      const r = await fetch(url, { method: "GET", cache: "no-store", credentials: "include" });
      const t1p = performance.now();
      const t1e = Date.now();

      if (!r.ok) {
        failures++;
        log("OFFSET", `샘플 ${i + 1}/${N} HTTP ${r.status} 실패`);
        if (gapMs > 0) await sleep(gapMs);
        continue;
      }

      const d = r.headers.get("date");
      if (d) {
        const s = new Date(d).getTime();
        const mid = t0e + (t1e - t0e) / 2;
        const rtt = t1p - t0p;
        offsets.push(s - mid);
        rtts.push(rtt);
      }
    } catch (err) {
      failures++;
      log("OFFSET", `샘플 ${i + 1}/${N} 네트워크 오류: ${err.message}`);
    }
    if (gapMs > 0) await sleep(gapMs);
  }

  if (offsets.length === 0) {
    log("OFFSET", `모든 샘플(${N}회) 실패 — 오프셋 0으로 대체`);
    return { offset: 0, rttP95: 0, success: false };
  }

  if (failures > 0) {
    log("OFFSET", `${N}회 중 ${failures}회 실패, ${offsets.length}회 성공`);
  }

  offsets.sort((a, b) => a - b);
  const midIdx = Math.floor(offsets.length / 2);
  const offset = offsets.length % 2
    ? offsets[midIdx]
    : (offsets[midIdx - 1] + offsets[midIdx]) / 2;

  rtts.sort((a, b) => a - b);
  const p95Idx = Math.max(0, Math.min(rtts.length - 1, Math.floor(rtts.length * 0.95) - 1));
  const rttP95 = rtts[p95Idx];

  log("OFFSET", `offset=${offset.toFixed(1)}ms, rttP95=${rttP95.toFixed(1)}ms (${offsets.length}샘플)`);
  return { offset, rttP95, success: true };
}

// ============================================================================
// [최적화 1] AMD 모듈 사전 로드
// ============================================================================

let _reservationCommonService = null;
let _netfunnelService = null;

function preloadModules() {
  const t0 = performance.now();
  try {
    _reservationCommonService = require("js/app/performance/service/reservationCommonService");
    _netfunnelService = require("js/app/performance/service/netfunnelService");
    diag("MODULE", `AMD 모듈 사전 로드 완료 (${(performance.now() - t0).toFixed(1)}ms)`);
  } catch (err) {
    log("MODULE", `AMD 모듈 사전 로드 실패: ${err.message} — T 시점에 재시도`);
  }
}

function getModules() {
  if (!_reservationCommonService) {
    _reservationCommonService = require("js/app/performance/service/reservationCommonService");
  }
  if (!_netfunnelService) {
    _netfunnelService = require("js/app/performance/service/netfunnelService");
  }
  return { reservationCommonService: _reservationCommonService, netfunnelService: _netfunnelService };
}

// ============================================================================
// [최적화 2] TCP/TLS 커넥션 워밍업
// ============================================================================

async function warmupConnections() {
  if (!CONFIG.enableConnectionWarmup) return { apiRtt: 0 };

  const t0 = performance.now();
  const apiRtts = [];

  // tktapi.melon.com 워밍업 (실제 prodKey API 엔드포인트)
  log("WARMUP", `tktapi.melon.com 커넥션 워밍업 시작 (${CONFIG.warmupCount}회)`);
  for (let i = 0; i < CONFIG.warmupCount; i++) {
    const rt0 = performance.now();
    try {
      await fetch(
        `${PROD_KEY_URL}?prodId=${CONFIG.prodId}&scheduleNo=${CONFIG.scheduleNo}&v=1&_warmup=${Date.now()}`,
        { method: "GET", credentials: "include", cache: "no-store" }
      );
      const rtt = performance.now() - rt0;
      apiRtts.push(rtt);
      diag("WARMUP", `tktapi 워밍업 #${i + 1}: ${rtt.toFixed(1)}ms`);
    } catch (err) {
      diag("WARMUP", `tktapi 워밍업 #${i + 1} 실패: ${err.message}`);
    }
  }

  // zam.melon.com DNS/TLS 프리커넥트 (link preconnect)
  try {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://zam.melon.com";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
    diag("WARMUP", "zam.melon.com preconnect 힌트 삽입");
  } catch (err) {
    diag("WARMUP", `zam.melon.com preconnect 실패: ${err.message}`);
  }

  // API RTT 중앙값 계산
  apiRtts.sort((a, b) => a - b);
  const medianIdx = Math.floor(apiRtts.length / 2);
  const apiRtt = apiRtts.length > 0
    ? (apiRtts.length % 2 ? apiRtts[medianIdx] : (apiRtts[medianIdx - 1] + apiRtts[medianIdx]) / 2)
    : 0;

  diag("WARMUP", `커넥션 워밍업 완료: API RTT 중앙값=${apiRtt.toFixed(1)}ms, 총 소요=${(performance.now() - t0).toFixed(1)}ms`);
  return { apiRtt };
}

// ============================================================================
// [최적화 3] DTO 템플릿 사전 구성
// ============================================================================

let _dtoTemplate = null;

function buildDtoTemplate() {
  const t0 = performance.now();
  _dtoTemplate = {
    prodId: CONFIG.prodId,
    scheduleNo: CONFIG.scheduleNo,
    pocCode: "SC0002",
    sellTypeCode: CONFIG.sellTypeCode,
    reservationType: CONFIG.reservationType,
    sellCondNo: null, // T 시점에 채움
    // 아래 필드는 sessionKey 응답 후 채움
    trafficCtrlYn: null,
    sessionKey: null,
  };

  // 정적 값 미리 수집
  try {
    _dtoTemplate.sellCondNo = getCondNo();
    diag("DTO", `sellCondNo=${_dtoTemplate.sellCondNo}`);
  } catch (err) {
    diag("DTO", `getCondNo() 호출 실패 — T 시점에 재시도: ${err.message}`);
  }

  try {
    _dtoTemplate.netfunnelSkinTitle = $("#global_ticket_title").val();
    diag("DTO", `netfunnelSkinTitle="${_dtoTemplate.netfunnelSkinTitle}"`);
  } catch (err) {
    diag("DTO", `netfunnelSkinTitle 수집 실패: ${err.message}`);
  }

  diag("DTO", `DTO 템플릿 사전 구성 완료 (${(performance.now() - t0).toFixed(1)}ms)`);
}

function makeFinalDto(sessionKey, trafficCtrlYn, nfActionId) {
  const dto = Object.assign({}, _dtoTemplate);
  dto.sessionKey = sessionKey;
  dto.trafficCtrlYn = trafficCtrlYn;

  // sellCondNo가 아직 없으면 다시 시도
  if (dto.sellCondNo == null) {
    try { dto.sellCondNo = getCondNo(); } catch (e) { /* ignore */ }
  }

  if (trafficCtrlYn === "Y") {
    dto.nf_action_id = nfActionId;
    dto.netfunnelType = "Y";
    dto.netfunnelName = CONFIG.netfunnelName;
    if (!dto.netfunnelSkinTitle) {
      try { dto.netfunnelSkinTitle = $("#global_ticket_title").val(); } catch (e) { /* ignore */ }
    }
  } else {
    dto.netfunnelType = "N";
  }

  return dto;
}

// ============================================================================
// [핵심 최적화 4] Session Key 사전 획득 (native fetch + hedging)
// ============================================================================

async function preFetchSessionKey() {
  const t0 = performance.now();
  const url = `${PROD_KEY_URL}?prodId=${encodeURIComponent(CONFIG.prodId)}&scheduleNo=${CONFIG.scheduleNo}&v=1`;

  // Promise.any로 hedging 요청 — 가장 빠른 성공 응답 사용
  const hedgeCount = Math.max(1, CONFIG.hedgeCount);
  const attempts = Array.from({ length: hedgeCount }, (_, i) =>
    fetch(url, { method: "GET", credentials: "include", cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const elapsed = performance.now() - t0;
        diag("PREFETCH", `hedging #${i + 1} 성공 (${elapsed.toFixed(1)}ms)`);
        return data;
      })
  );

  try {
    const result = await Promise.any(attempts);
    const elapsed = performance.now() - t0;

    // API 응답 코드 검증 (code === "0000")
    if (result.code !== "0000") {
      log("PREFETCH", `API 응답 코드 오류: ${result.code} — "${result.message || ""}"`);
      return null;
    }

    const sessionKey = result.key;
    const trafficCtrlYn = result.trafficCtrlYn;
    const nfActionId = trafficCtrlYn === "Y" ? result.nflActId : "";
    const scheduleNo = result.scheduleNo;

    diag("PREFETCH", `sessionKey 사전 획득 성공 (${elapsed.toFixed(1)}ms): trafficCtrlYn=${trafficCtrlYn}, nfActionId=${nfActionId}`);

    return { sessionKey, trafficCtrlYn, nfActionId, scheduleNo };
  } catch (err) {
    const elapsed = performance.now() - t0;
    log("PREFETCH", `모든 hedging 요청 실패 (${elapsed.toFixed(1)}ms): ${err.message}`);
    return null;
  }
}

// ============================================================================
// [최적화 5] T 시점 즉시 실행 — pre-fetch 결과 사용
// ============================================================================

function executeWithCachedKey(prefetchResult) {
  const t0 = performance.now();
  const { reservationCommonService, netfunnelService } = getModules();
  const { sessionKey, trafficCtrlYn, nfActionId } = prefetchResult;

  const dto = makeFinalDto(sessionKey, trafficCtrlYn, nfActionId);

  if (trafficCtrlYn === "Y") {
    log("FIRE", "넷퍼넬 활성화 → 캐시된 sessionKey로 즉시 netfunnelInit 실행");
    diag("FIRE", `NetFunnel_Action 호출까지 소요: ${(performance.now() - t0).toFixed(2)}ms`);
    netfunnelService.service.netfunnelInit(dto);
  } else {
    log("FIRE", "넷퍼넬 비활성화 → 캐시된 sessionKey로 즉시 oneStopProcess 실행");
    diag("FIRE", `oneStopProcess 호출까지 소요: ${(performance.now() - t0).toFixed(2)}ms`);
    reservationCommonService.service.oneStopProcess(dto);
  }
}

// ============================================================================
// [폴백] 기존 v2 방식 (generateSessionKey → netfunnelInit)
// ============================================================================

async function fallbackReq(attempt = 1) {
  const { prodId, scheduleNo, maxRetries, retryDelayMs } = CONFIG;
  const finalParams = { prodId, scheduleNo, v: 1 };

  try {
    const { reservationCommonService, netfunnelService } = getModules();

    log("FALLBACK", `기존 방식 예매 요청 시도 (${attempt}/${maxRetries})`);
    const t0 = performance.now();
    const result = await reservationCommonService.service.generateSessionKey(finalParams);
    diag("FALLBACK", `generateSessionKey 소요: ${(performance.now() - t0).toFixed(1)}ms`);

    const trafficCtrlYn = result.trafficCtrlYn;
    const nfActionId = result.nf_action_id;
    const sessionKey = result.sessionKey;

    const dto = makeFinalDto(sessionKey, trafficCtrlYn, nfActionId);

    if (trafficCtrlYn === "Y") {
      log("FALLBACK", "넷퍼넬 활성화 → netfunnelInit 실행");
      netfunnelService.service.netfunnelInit(dto);
    } else {
      log("FALLBACK", "넷퍼넬 비활성화 → oneStopProcess 실행");
      reservationCommonService.service.oneStopProcess(dto);
    }

    log("FALLBACK", "예매 요청 성공");
  } catch (err) {
    log("FALLBACK", `예매 요청 실패: ${err.message}`);
    if (attempt < maxRetries) {
      log("FALLBACK", `${retryDelayMs}ms 후 재시도...`);
      await sleep(retryDelayMs);
      return fallbackReq(attempt + 1);
    }
    log("FALLBACK", `최대 재시도 횟수(${maxRetries}) 도달 — 중단`);
    throw err;
  }
}

// ============================================================================
// 메인 실행
// ============================================================================

(async () => {
  try {
    const scriptStart = performance.now();

    // 0) CONFIG 유효성 검사
    validateConfig(CONFIG);
    log("INIT", `prodId=${CONFIG.prodId}, scheduleNo=${CONFIG.scheduleNo}, fireTime=${CONFIG.fireTime}`);
    log("INIT", `sellType=${CONFIG.sellTypeCode}, reservationType=${CONFIG.reservationType}`);
    log("INIT", `v3 최적화: preFetch=${CONFIG.enablePreFetch}, hedge=${CONFIG.hedgeCount}, warmup=${CONFIG.enableConnectionWarmup}`);

    // 1) AMD 모듈 사전 로드
    preloadModules();

    // 2) DTO 템플릿 사전 구성
    buildDtoTemplate();

    const offsetUrl = makeOffsetUrl(CONFIG.prodId);

    // 3) 초기 오프셋/RTT 추정 + 커넥션 워밍업 (병렬)
    log("PHASE1", "초기 오프셋 측정 + 커넥션 워밍업 시작");
    const [offsetResult, warmupResult] = await Promise.all([
      measureOffset(offsetUrl, CONFIG.offsetSamples, CONFIG.offsetGapMs),
      warmupConnections(),
    ]);

    let { offset: off, rttP95, success } = offsetResult;
    const { apiRtt: measuredApiRtt } = warmupResult;

    if (!success) {
      log("PHASE1", "초기 오프셋 측정 실패 — 오프셋 0으로 진행 (정확도 저하 가능)");
    }

    // pre-fetch 리드 타임 결정
    const preFetchLeadMs = CONFIG.preFetchLeadMs > 0
      ? CONFIG.preFetchLeadMs
      : Math.ceil(measuredApiRtt * 1.5) || 300; // 측정값의 1.5배, 측정 실패 시 300ms
    diag("TIMING", `pre-fetch 리드 타임: ${preFetchLeadMs}ms (측정 API RTT: ${measuredApiRtt.toFixed(1)}ms)`);

    // 4) 목표 시각(T) 계산
    const T = parseFireTodayOrTomorrow(CONFIG.fireTime);
    const remainSec = ((T - (Date.now() + off)) / 1000).toFixed(1);
    log("PHASE2", `목표 시각: ${new Date(T).toISOString()} (약 ${remainSec}초 후)`);

    // 5) 보수적 마진 (95p RTT의 절반)
    const margin = Math.max(0, Math.floor(rttP95 / 2));
    log("PHASE3", `마진: ${margin}ms (rttP95=${rttP95.toFixed(1)}ms)`);

    // 6) T - margin - 5s 까지 대기
    const targetA = T - margin - 5000;
    const waitA = targetA - (Date.now() + off);
    if (waitA > 1) {
      log("PHASE4", `T-${margin + 5000}ms까지 ${(waitA / 1000).toFixed(1)}초 대기`);
      await sleep(waitA);
    }

    // 7) 재보정 (T-5s 부근)
    log("PHASE5", "재보정 측정 시작");
    const m2 = await measureOffset(offsetUrl, CONFIG.recalSamples, CONFIG.recalGapMs);
    if (m2.success) {
      const drift = Math.abs(m2.offset - off);
      if (drift > 3) {
        log("PHASE5", `오프셋 재보정: ${off.toFixed(1)}ms → ${m2.offset.toFixed(1)}ms (차이 ${drift.toFixed(1)}ms)`);
        off = m2.offset;
      } else {
        log("PHASE5", `오프셋 변동 미미 (${drift.toFixed(1)}ms) — 기존 값 유지`);
      }
      rttP95 = m2.rttP95 || rttP95;
    } else {
      log("PHASE5", "재보정 실패 — 기존 오프셋 유지");
    }
    const margin2 = Math.max(0, Math.floor(rttP95 / 2));

    // DTO 재수집 (T-5s 부근, 더 신선한 값)
    buildDtoTemplate();

    // 8) 정밀 폴링 (T-2s ~ T-preFetchLeadMs)
    const phaseBStart = T - margin2 - 2000;
    if (Date.now() + off < phaseBStart) {
      await sleep(phaseBStart - (Date.now() + off));
    }
    log("PHASE6", "정밀 폴링 시작 (T-2s)");

    // T - preFetchLeadMs 까지 폴링
    const preFetchFireTime = T - preFetchLeadMs;
    while (true) {
      const remain = preFetchFireTime - (Date.now() + off);
      if (remain <= 50) break;
      await Promise.race([nextFrame(), sleep(16)]);
    }

    // ================================================================
    // [핵심] Pre-fetch 발사 (T - preFetchLeadMs 시점)
    // ================================================================
    let prefetchResult = null;
    let prefetchPromise = null;

    if (CONFIG.enablePreFetch) {
      diag("PREFETCH", `sessionKey 사전 획득 시작 (T까지 약 ${preFetchLeadMs}ms 남음)`);
      prefetchPromise = preFetchSessionKey();
    }

    // T 시점까지 나머지 대기
    while (true) {
      const remain = T - (Date.now() + off);
      if (remain <= 100) break;
      await Promise.race([nextFrame(), sleep(16)]);
    }

    // T-10ms: 짧은 스핀
    const spinStart = performance.now();
    while (Date.now() + off < T && performance.now() - spinStart < 10) {}
    while (Date.now() + off < T) await Promise.race([nextFrame(), sleep(10)]);

    // ================================================================
    // T 시점: 실행!
    // ================================================================
    const fireT0 = performance.now();
    log("FIRE", "예매 요청 발사!");

    if (prefetchPromise) {
      // pre-fetch 결과 확인 (이미 완료되었을 가능성 높음)
      prefetchResult = await prefetchPromise;
    }

    if (prefetchResult) {
      // pre-fetch 성공 → 캐시된 결과로 즉시 실행
      diag("FIRE", `pre-fetch 결과 사용 → T 이후 NetFunnel 진입까지: ${(performance.now() - fireT0).toFixed(2)}ms`);
      executeWithCachedKey(prefetchResult);
    } else {
      // pre-fetch 실패 → 기존 v2 방식 fallback
      log("FIRE", "pre-fetch 실패 → 기존 방식 fallback");
      await fallbackReq();
    }

    // 실행 시각 표기 + 진단
    const fireLocal = new Date().toISOString();
    const fireServer = new Date(Date.now() + off).toISOString();
    const totalElapsed = performance.now() - scriptStart;

    console.log("파이어!");
    console.log(`   로컬시각   : ${fireLocal}`);
    console.log(`   서버기준   : ${fireServer}`);
    console.log(`   오프셋     : ${off.toFixed(1)}ms`);
    console.log(`   T후 소요   : ${(performance.now() - fireT0).toFixed(2)}ms`);
    console.log(`   총 스크립트: ${totalElapsed.toFixed(1)}ms`);
    console.log(`   방식       : ${prefetchResult ? "pre-fetch (v3)" : "fallback (v2)"}`);
  } catch (err) {
    log("ERROR", `치명적 오류 발생: ${err.message}`);
    console.error(err);
  }
})();
