const CONFIG = {
  prodId: "212768",          // 상품 ID
  scheduleNo: 100001,        // 회차 번호
  fireTime: "20:00:00",      // 시간 설정 (HH:mm:ss)
  offsetSamples: 30,         // 초기 오프셋 샘플 수 (중앙값 사용)
  offsetGapMs: 60,           // 샘플간 간격 (ms)
  recalSamples: 10,          // T-5s 재보정 샘플 수
  recalGapMs: 40,            // 재보정 간격 (ms)
  sellTypeCode: "ST0002",    // ST0001: 일반예매, ST0002: 선예매
  reservationType: "ST0002", // ST0001: 일반예매, ST0002: 선예매
  netfunnelName: "preReservationOneStopZAM", // reservationZAM: 일반예매, preReservationOneStopZAM: 선예매
  maxRetries: 3,             // 예매 요청 최대 재시도 횟수
  retryDelayMs: 300,         // 재시도 간격 (ms)
};

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

const log = (tag, msg) => {
  const ts = new Date().toISOString();
  console.log(`[${ts}] [${tag}] ${msg}`);
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

async function req(attempt = 1) {
  const { prodId, scheduleNo, reservationType, netfunnelName, sellTypeCode, maxRetries, retryDelayMs } = CONFIG;
  const defaultParams = { prodId, scheduleNo, v: 1 };
  const finalParams = Object.assign({}, defaultParams);

  try {
    const reservationCommonService = require("js/app/performance/service/reservationCommonService");
    const netfunnelService = require("js/app/performance/service/netfunnelService");

    log("REQ", `예매 요청 시도 (${attempt}/${maxRetries})`);
    const result = await reservationCommonService.service.generateSessionKey(finalParams);

    var trafficCtrlYn = result.trafficCtrlYn;
    var nf_action_id = result.nf_action_id;
    var sessionKey = result.sessionKey;

    var dto = {
      prodId,
      scheduleNo,
      pocCode: "SC0002",
      trafficCtrlYn,
      sessionKey,
      sellCondNo: getCondNo(),
      sellTypeCode,
      reservationType,
    };

    if (trafficCtrlYn == "Y") {
      dto.nf_action_id = nf_action_id;
      dto.netfunnelType = trafficCtrlYn;
      dto.netfunnelName = netfunnelName;
      dto.netfunnelSkinTitle = $("#global_ticket_title").val();
      log("REQ", "넷퍼넬 활성화 → netfunnelInit 실행");
      netfunnelService.service.netfunnelInit(dto);
    } else {
      dto.netfunnelType = "N";
      log("REQ", "넷퍼넬 비활성화 → oneStopProcess 실행");
      reservationCommonService.service.oneStopProcess(dto);
    }

    log("REQ", "예매 요청 성공");
  } catch (err) {
    log("REQ", `예매 요청 실패: ${err.message}`);
    if (attempt < maxRetries) {
      log("REQ", `${retryDelayMs}ms 후 재시도...`);
      await sleep(retryDelayMs);
      return req(attempt + 1);
    }
    log("REQ", `최대 재시도 횟수(${maxRetries}) 도달 — 중단`);
    throw err;
  }
}

(async () => {
  try {
    // 0) CONFIG 유효성 검사
    validateConfig(CONFIG);
    log("INIT", `prodId=${CONFIG.prodId}, scheduleNo=${CONFIG.scheduleNo}, fireTime=${CONFIG.fireTime}`);
    log("INIT", `sellType=${CONFIG.sellTypeCode}, reservationType=${CONFIG.reservationType}`);

    const offsetUrl = makeOffsetUrl(CONFIG.prodId);

    // 1) 초기 오프셋/RTT 추정 (N=30 중앙값, 95p RTT)
    log("PHASE1", "초기 오프셋 측정 시작");
    let { offset: off, rttP95, success } = await measureOffset(offsetUrl, CONFIG.offsetSamples, CONFIG.offsetGapMs);
    if (!success) {
      log("PHASE1", "⚠️ 초기 오프셋 측정 실패 — 오프셋 0으로 진행 (정확도 저하 가능)");
    }

    // 2) 목표 시각(T) 계산 (오늘 fireTime, 지났으면 내일)
    let T = parseFireTodayOrTomorrow(CONFIG.fireTime);
    const remainSec = ((T - (Date.now() + off)) / 1000).toFixed(1);
    log("PHASE2", `목표 시각: ${new Date(T).toISOString()} (약 ${remainSec}초 후)`);

    // 3) 보수적 마진 (95p RTT의 절반)
    const margin = Math.max(0, Math.floor(rttP95 / 2));
    log("PHASE3", `마진: ${margin}ms (rttP95=${rttP95.toFixed(1)}ms)`);

    // 4) T - margin - 5s 까지 대기
    let targetA = T - margin - 5000;
    let waitA = targetA - (Date.now() + off);
    if (waitA > 1) {
      log("PHASE4", `T-${margin + 5000}ms까지 ${(waitA / 1000).toFixed(1)}초 대기`);
      await sleep(waitA);
    }

    // 5) 재보정 (T-5s 부근, 샘플 10회, 더 촘촘하게)
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
      log("PHASE5", "⚠️ 재보정 실패 — 기존 오프셋 유지");
    }
    const margin2 = Math.max(0, Math.floor(rttP95 / 2));

    // 6) T - margin2 - 2s ~ T-100ms : rAF/짧은 setTimeout 폴링
    const phaseBStart = T - margin2 - 2000;
    if (Date.now() + off < phaseBStart) {
      await sleep(phaseBStart - (Date.now() + off));
    }
    log("PHASE6", "정밀 폴링 시작 (T-2s)");
    while (true) {
      const remain = T - (Date.now() + off);
      if (remain <= 100) break;
      await Promise.race([nextFrame(), sleep(16)]);
    }

    // 7) T-10ms 이내: 아주 짧은 스핀 (최대 10ms), 메인스레드 블록 최소화
    log("PHASE7", "최종 스핀 대기");
    const spinStart = performance.now();
    while (Date.now() + off < T && performance.now() - spinStart < 10) {}
    while (Date.now() + off < T) await Promise.race([nextFrame(), sleep(10)]);

    // 8) 실제 요청
    log("FIRE", "🔥 예매 요청 발사!");
    await req();

    // 실행 시각 표기
    const fireLocal = new Date().toISOString();
    const fireServer = new Date(Date.now() + off).toISOString();
    console.log("🔥 파이어!");
    console.log(`   로컬시각 : ${fireLocal}`);
    console.log(`   서버기준 : ${fireServer}`);
    console.log(`   오프셋   : ${off.toFixed(1)}ms`);
  } catch (err) {
    log("ERROR", `치명적 오류 발생: ${err.message}`);
    console.error(err);
  }
})();
