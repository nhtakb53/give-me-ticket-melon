// ============================================================================
// background.js — Service Worker: 타이밍 + 직접 NetFunnel 프로토콜
//
// 상태 머신:
//   IDLE → ARMED → CAPTCHA_CHECK → PHASE1_OFFSET → WAITING → RECALIBRATE → PREFETCH → FIRE → DONE
//
// 핵심: host_permissions로 CORS 우회 → fetch로 직접 ts.wseq 대기열 진입
// ============================================================================

const OFFSET_URL_BASE = 'https://tktapi.melon.com/poc/foruInfo.json';
const PROD_KEY_URL = 'https://tktapi.melon.com/api/product/prodKey.json';
const TS_HOST = 'https://zam.melon.com/ts.wseq';
const CAPTCHA_IMAGE_URL = 'https://ticket.melon.com/reservation/ajax/captChaImage.json';
const CAPTCHA_CHECK_URL = 'https://ticket.melon.com/reservation/ajax/checkCaptcha.json';
const CAPTCHA_COMPLETE_URL = 'https://ticket.melon.com/reservation/ajax/checkCaptchaComplete.json';

// NetFunnel opcodes
const OP_CHK_ENTER = 5002;       // 대기열 폴링
const OP_GET_TID_CHK_ENTER = 5101; // 대기열 진입
const OP_INIT = 5105;             // 초기화 (워밍업용)

// NetFunnel response codes
const NF_SUCCESS = 200;
const NF_CONTINUE = 201;
const NF_BYPASS = 300;
const NF_BLOCK = 301;
const NF_IP_BLOCK = 302;

// ============================================================================
// 유틸리티
// ============================================================================

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function log(tag, msg) {
  console.log(`[${new Date().toISOString()}] [${tag}] ${msg}`);
}

function diag(tag, msg) {
  console.log(`[${new Date().toISOString()}] [DIAG:${tag}] ${msg}`);
}

async function setState(patch) {
  const { state: prev } = await chrome.storage.local.get('state');
  const next = Object.assign(prev || {}, patch);
  await chrome.storage.local.set({ state: next });
  return next;
}

async function getState() {
  const { state } = await chrome.storage.local.get('state');
  return state || {};
}

// ============================================================================
// 시간 동기화 (melon_v3.js 알고리즘 재사용)
// ============================================================================

async function measureOffset(prodId, N, gapMs) {
  const url = `${OFFSET_URL_BASE}?prodId=${encodeURIComponent(prodId)}&requestservicetype=P`;
  const offsets = [];
  const rtts = [];
  let failures = 0;

  for (let i = 0; i < N; i++) {
    try {
      const t0 = Date.now();
      const t0p = performance.now();
      const r = await fetch(url, { method: 'GET', cache: 'no-store', credentials: 'include' });
      const t1p = performance.now();
      const t1 = Date.now();

      if (!r.ok) {
        failures++;
        log('OFFSET', `샘플 ${i + 1}/${N} HTTP ${r.status} 실패`);
        if (gapMs > 0) await sleep(gapMs);
        continue;
      }

      const d = r.headers.get('date');
      if (d) {
        const s = new Date(d).getTime();
        const mid = t0 + (t1 - t0) / 2;
        const rtt = t1p - t0p;
        offsets.push(s - mid);
        rtts.push(rtt);
      }
    } catch (err) {
      failures++;
      log('OFFSET', `샘플 ${i + 1}/${N} 오류: ${err.message}`);
    }
    if (gapMs > 0) await sleep(gapMs);
  }

  if (offsets.length === 0) {
    log('OFFSET', `모든 샘플(${N}회) 실패 — 오프셋 0 대체`);
    return { offset: 0, rttP95: 0, success: false };
  }

  if (failures > 0) {
    log('OFFSET', `${N}회 중 ${failures}회 실패, ${offsets.length}회 성공`);
  }

  offsets.sort((a, b) => a - b);
  const midIdx = Math.floor(offsets.length / 2);
  const offset = offsets.length % 2
    ? offsets[midIdx]
    : (offsets[midIdx - 1] + offsets[midIdx]) / 2;

  rtts.sort((a, b) => a - b);
  const p95Idx = Math.max(0, Math.min(rtts.length - 1, Math.floor(rtts.length * 0.95) - 1));
  const rttP95 = rtts[p95Idx];

  log('OFFSET', `offset=${offset.toFixed(1)}ms, rttP95=${rttP95.toFixed(1)}ms (${offsets.length}샘플)`);
  return { offset, rttP95, success: true };
}

// ============================================================================
// 커넥션 워밍업
// ============================================================================

async function warmupConnections(config) {
  const apiRtts = [];
  const warmupCount = 3;

  // tktapi.melon.com 워밍업
  log('WARMUP', `tktapi.melon.com 워밍업 시작 (${warmupCount}회)`);
  for (let i = 0; i < warmupCount; i++) {
    const t0 = performance.now();
    try {
      await fetch(
        `${PROD_KEY_URL}?prodId=${config.prodId}&scheduleNo=${config.scheduleNo}&v=1`,
        { method: 'GET', credentials: 'include', cache: 'no-store' }
      );
      const rtt = performance.now() - t0;
      apiRtts.push(rtt);
      diag('WARMUP', `tktapi #${i + 1}: ${rtt.toFixed(1)}ms`);
    } catch (err) {
      diag('WARMUP', `tktapi #${i + 1} 실패: ${err.message}`);
    }
  }

  // zam.melon.com 워밍업 (opcode=5105 INIT, 안전한 읽기 전용)
  log('WARMUP', 'zam.melon.com 워밍업 (INIT opcode)');
  try {
    const t0 = performance.now();
    await fetch(
      `${TS_HOST}?opcode=${OP_INIT}&nfid=0&sid=service_1&aid=warmup&js=yes&${Date.now()}`,
      { cache: 'no-store' }
    );
    diag('WARMUP', `zam INIT: ${(performance.now() - t0).toFixed(1)}ms`);
  } catch (err) {
    diag('WARMUP', `zam INIT 실패: ${err.message}`);
  }

  // API RTT 중앙값
  apiRtts.sort((a, b) => a - b);
  const medIdx = Math.floor(apiRtts.length / 2);
  const apiRtt = apiRtts.length > 0
    ? (apiRtts.length % 2 ? apiRtts[medIdx] : (apiRtts[medIdx - 1] + apiRtts[medIdx]) / 2)
    : 0;

  diag('WARMUP', `API RTT 중앙값=${apiRtt.toFixed(1)}ms`);
  return { apiRtt };
}

// ============================================================================
// SessionKey Pre-fetch (Promise.any hedging)
// ============================================================================

async function preFetchSessionKey(config) {
  const t0 = performance.now();
  const url = `${PROD_KEY_URL}?prodId=${encodeURIComponent(config.prodId)}&scheduleNo=${config.scheduleNo}&v=1`;
  const hedgeCount = Math.max(1, config.hedgeCount || 3);

  const attempts = Array.from({ length: hedgeCount }, (_, i) =>
    fetch(url, { method: 'GET', credentials: 'include', cache: 'no-store' })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        diag('PREFETCH', `hedge #${i + 1} 성공 (${(performance.now() - t0).toFixed(1)}ms)`);
        return data;
      })
  );

  try {
    const result = await Promise.any(attempts);
    const elapsed = performance.now() - t0;

    if (result.code !== '0000') {
      log('PREFETCH', `API 코드 오류: ${result.code} — "${result.message || ''}"`);
      return null;
    }

    const sessionKey = result.key;
    const trafficCtrlYn = result.trafficCtrlYn;
    const nfActionId = trafficCtrlYn === 'Y' ? result.nflActId : '';
    const scheduleNo = result.scheduleNo;

    diag('PREFETCH', `sessionKey 획득 (${elapsed.toFixed(1)}ms): trafficCtrlYn=${trafficCtrlYn}, nfActId=${nfActionId}`);
    return { sessionKey, trafficCtrlYn, nfActionId, scheduleNo };
  } catch (err) {
    log('PREFETCH', `모든 hedging 실패 (${(performance.now() - t0).toFixed(1)}ms): ${err.message}`);
    return null;
  }
}

// ============================================================================
// NetFunnel 응답 파싱
//
// 응답 형식: "NetFunnel.gRtype=5101;NetFunnel.gControl.result='5101:200:ip=x&key=abc&nwait=0&ttl=30'"
// 파싱: result='...' 추출 → rtype(4자리):code(3자리):key=value& 파싱
// ============================================================================

function parseNetFunnelResponse(text) {
  // result='...' 추출
  const m = text.match(/result='([^']+)'/);
  if (!m) {
    log('PARSE', `result 패턴 미발견: ${text.substring(0, 200)}`);
    return null;
  }

  const raw = m[1];
  // rtype(4자리):code(3자리):나머지
  const rtype = parseInt(raw.substring(0, 4), 10);
  const code = parseInt(raw.substring(5, 8), 10);
  const retStr = raw.substring(9);

  // key=value& 파싱
  const params = {};
  const pairs = retStr.split('&');
  for (const pair of pairs) {
    const eqIdx = pair.indexOf('=');
    if (eqIdx > 0) {
      const k = pair.substring(0, eqIdx).trim();
      const v = pair.substring(eqIdx + 1).trim();
      params[k] = v;
    }
  }

  return { rtype, code, params, raw };
}

// ============================================================================
// 직접 NetFunnel 대기열 진입 (핵심 최적화)
// ============================================================================

async function enterQueue(nfActionId) {
  const t0 = performance.now();

  // ts.wseq에는 hedging 하지 않음 — 복수 요청 시 IP 차단 위험
  const url = `${TS_HOST}?opcode=${OP_GET_TID_CHK_ENTER}&nfid=0` +
    `&prefix=NetFunnel.gRtype%3D${OP_GET_TID_CHK_ENTER}%3B` +
    `&sid=service_1&aid=${encodeURIComponent(nfActionId)}` +
    `&js=yes&${Date.now()}`;

  log('QUEUE', `대기열 진입 요청: aid=${nfActionId}`);

  const res = await fetch(url, { cache: 'no-store' });
  const text = await res.text();
  const elapsed = performance.now() - t0;

  diag('QUEUE', `응답 (${elapsed.toFixed(1)}ms): ${text.substring(0, 200)}`);

  const parsed = parseNetFunnelResponse(text);
  if (!parsed) throw new Error('NetFunnel 응답 파싱 실패');

  return parsed;
}

// ============================================================================
// 대기열 폴링 (code 201인 경우)
// ============================================================================

async function pollQueue(key, ttl, nfActionId, config) {
  const pollInterval = Math.max(1, parseInt(ttl, 10) || 1) * 1000;
  log('QUEUE_POLL', `폴링 시작: key=${key}, ttl=${ttl}s`);

  while (true) {
    await sleep(pollInterval);

    const url = `${TS_HOST}?opcode=${OP_CHK_ENTER}` +
      `&key=${encodeURIComponent(key)}&nfid=0` +
      `&prefix=NetFunnel.gRtype%3D${OP_CHK_ENTER}%3B` +
      `&ttl=${ttl}` +
      `&sid=service_1&aid=${encodeURIComponent(nfActionId)}` +
      `&js=yes&${Date.now()}`;

    try {
      const res = await fetch(url, { cache: 'no-store' });
      const text = await res.text();
      const parsed = parseNetFunnelResponse(text);

      if (!parsed) {
        log('QUEUE_POLL', `파싱 실패 — 재시도`);
        continue;
      }

      const nwait = parsed.params.nwait || '?';
      diag('QUEUE_POLL', `code=${parsed.code}, nwait=${nwait}`);

      await setState({ nwait: parseInt(nwait, 10) || 0 });

      if (parsed.code === NF_SUCCESS || parsed.code === NF_BYPASS) {
        log('QUEUE_POLL', `대기열 통과! code=${parsed.code}`);
        return parsed;
      }

      if (parsed.code === NF_BLOCK || parsed.code === NF_IP_BLOCK) {
        throw new Error(`서버 차단: code=${parsed.code}`);
      }

      // code 201 → 계속 폴링
      // ttl 업데이트
      if (parsed.params.ttl) {
        ttl = parsed.params.ttl;
      }
    } catch (err) {
      log('QUEUE_POLL', `폴링 오류: ${err.message}`);
      throw err;
    }
  }
}

// ============================================================================
// fireTime → 밀리초 변환
// ============================================================================

function parseFireTime(fireHHMMSS) {
  const [hh, mm, ss] = fireHHMMSS.split(':').map((v) => parseInt(v, 10) || 0);
  const t = new Date();
  t.setHours(hh, mm, ss, 0);
  const now = Date.now();
  const target = t.getTime();
  if (now > target) {
    log('TIME', `${fireHHMMSS} 이미 지남 → 내일로 설정`);
    return target + 86_400_000;
  }
  return target;
}

// ============================================================================
// Content Script에 메시지 전송
// ============================================================================

async function sendToContentScript(message) {
  const tabs = await chrome.tabs.query({ url: 'https://ticket.melon.com/performance/index.htm*' });
  for (const tab of tabs) {
    try {
      await chrome.tabs.sendMessage(tab.id, message);
    } catch (err) {
      log('MSG', `탭 ${tab.id} 전송 실패: ${err.message}`);
    }
  }
}

// ============================================================================
// CAPTCHA (인증예매) 처리
// ============================================================================

async function fetchCaptchaImage(config) {
  const url = `${CAPTCHA_IMAGE_URL}?prodId=${config.prodId}&scheduleNo=${config.scheduleNo}&t=${Date.now()}`;
  try {
    const res = await fetch(url, { credentials: 'include', cache: 'no-store' });
    const data = await res.json();
    if (data.CAPTIMAGE && data.CAPTDATA) {
      log('CAPTCHA', 'CAPTCHA 이미지 로드 성공');
      return { imageBase64: data.CAPTIMAGE, captData: data.CAPTDATA };
    }
    return null;
  } catch (err) {
    log('CAPTCHA', `이미지 로드 실패: ${err.message}`);
    return null;
  }
}

async function validateCaptcha(config, userInput, captData) {
  try {
    log('CAPTCHA', `검증 요청: userInput="${userInput}", captData=${captData.substring(0, 30)}...`);
    const body = new URLSearchParams({
      userCaptStr: userInput,
      chkcapt: captData,
      prodId: config.prodId,
      scheduleNo: String(config.scheduleNo),
      pocCode: config.pocCode || 'SC0002',
      sellTypeCode: config.sellTypeCode,
    });
    const res = await fetch(CAPTCHA_CHECK_URL, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    log('CAPTCHA', `검증 응답 status: ${res.status}`);
    const data = await res.json();
    log('CAPTCHA', `검증 결과: ${JSON.stringify(data)}`);
    return data;
  } catch (err) {
    log('CAPTCHA', `검증 오류: ${err.message}`);
    return { CODE: 'ERROR' };
  }
}

async function checkCaptchaComplete(prodId, chkcapt) {
  try {
    const body = new URLSearchParams({ chkcapt, prodId });
    const res = await fetch(CAPTCHA_COMPLETE_URL, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    const data = await res.json();
    return data.CODE === '0000';
  } catch (err) {
    return false;
  }
}

// CAPTCHA 응답 대기용 Promise resolver
let captchaResolve = null;

function waitForCaptchaResponse() {
  return new Promise((resolve) => {
    captchaResolve = resolve;
  });
}

/**
 * ARM 시점에 CAPTCHA 확인 + 입력 처리
 * CAPTCHA가 필요하면 이미지를 보여주고 사용자 입력을 기다림
 * 불필요하면 즉시 반환
 */
async function handleCaptchaIfNeeded(config) {
  // 1. CAPTCHA 이미지 시도 — 반환되면 인증예매 상품
  const captchaImg = await fetchCaptchaImage(config);

  if (!captchaImg) {
    log('CAPTCHA', 'CAPTCHA 불필요 — 건너뜀');
    return true;
  }

  log('CAPTCHA', '인증예매 상품 — CAPTCHA 필요');
  await setState({ phase: 'CAPTCHA_CHECK', message: 'CAPTCHA 입력 대기 중...' });

  let captData = captchaImg.captData;
  let imageBase64 = captchaImg.imageBase64;

  // Content Script에 CAPTCHA 이미지 전송
  await sendToContentScript({
    type: 'SHOW_CAPTCHA',
    data: { imageBase64, captData },
  });

  // 사용자 입력 대기 루프
  while (!aborted) {
    const response = await waitForCaptchaResponse();
    if (aborted) return false;

    // 새로고침 요청
    if (response.reload) {
      const newImg = await fetchCaptchaImage(config);
      if (newImg) {
        captData = newImg.captData;
        imageBase64 = newImg.imageBase64;
      }
      await sendToContentScript({
        type: 'SHOW_CAPTCHA',
        data: { imageBase64, captData },
      });
      continue;
    }

    // 검증
    log('CAPTCHA', `사용자 입력 수신: "${response.userInput}"`);
    const result = await validateCaptcha(config, response.userInput, captData);
    log('CAPTCHA', `validateCaptcha 반환: CODE=${result.CODE}, DATA=${result.DATA ? result.DATA.substring(0, 30) + '...' : 'null'}`);

    if (result.CODE === '0000') {
      log('CAPTCHA', 'CAPTCHA 검증 성공 → CAPTCHA_COMPLETE 전송');
      // Content Script에 chkcapt 저장 요청
      await sendToContentScript({
        type: 'CAPTCHA_COMPLETE',
        data: { chkcapt: result.DATA },
      });
      log('CAPTCHA', 'CAPTCHA_COMPLETE 전송 완료');
      await setState({ phase: 'ARMED', message: 'CAPTCHA 완료 — 무장 완료' });
      return true;
    }

    // 실패 — 새 이미지 로드 + 재시도
    log('CAPTCHA', `CAPTCHA 검증 실패 (CODE=${result.CODE}) — 재시도`);
    const newImg = await fetchCaptchaImage(config);
    if (newImg) {
      captData = newImg.captData;
      imageBase64 = newImg.imageBase64;
    }
    await sendToContentScript({
      type: 'CAPTCHA_RETRY',
      data: { error: '문자를 정확히 입력해 주세요', imageBase64, captData },
    });
  }

  return false;
}

// ============================================================================
// Service Worker 생존 전략 (MV3 30초 유휴 종료 대응)
// ============================================================================

let keepaliveInterval = null;

function startKeepalive() {
  if (keepaliveInterval) return;
  keepaliveInterval = setInterval(() => {
    chrome.storage.local.get('_keepalive'); // 유휴 타이머 리셋
  }, 25000);
  log('SW', 'keepalive 시작 (25초 간격)');
}

function stopKeepalive() {
  if (keepaliveInterval) {
    clearInterval(keepaliveInterval);
    keepaliveInterval = null;
  }
}

// ============================================================================
// 폼 데이터 빌더 — performanceController.js 원본 동작 정확히 재현
//
// _generalReservationImpl (ST0001):
//   oneStopPrint:           prodId, pocCode, scheduleNo, sellTypeCode, tYn, chk
//   netfunnelOneStopPrint:  + netfunnel_key
//   → sellCondNo 설정하지 않음!
//
// _preSaleReservationImpl (ST0002):
//   oneStopPrint:           prodId, pocCode, scheduleNo, sellCondNo, sellTypeCode, tYn, chk
//   netfunnelOneStopPrint:  + netfunnel_key
//   → sellCondNo 설정함
// ============================================================================

function buildFormData(config, sessionKey, trafficCtrlYn, scheduleNo, nfKey) {
  const data = {
    prodId: config.prodId,
    pocCode: config.pocCode,
    scheduleNo: scheduleNo || config.scheduleNo,
    sellTypeCode: config.sellTypeCode,
    tYn: trafficCtrlYn,
    chk: sessionKey,
  };

  // ST0002(선예매)만 sellCondNo 설정 — ST0001은 설정하지 않음 (원본 동작)
  if (config.sellTypeCode === 'ST0002') {
    data.sellCondNo = '0';
  }

  // netfunnel_key: trafficCtrlYn=Y이고 키가 있을 때만 설정
  if (trafficCtrlYn === 'Y' && nfKey) {
    data.netfunnel_key = ':key=' + nfKey + '&';
  }

  return data;
}

// ============================================================================
// 정밀 대기 (T 시점까지 대기)
// ============================================================================

async function waitUntilT(T, offset, margin) {
  const spinTarget = T - margin;

  // T-2s 전까지 sleep
  while (Date.now() + offset < spinTarget - 2000) {
    if (aborted) return;
    await sleep(1);
  }

  // T-2s ~ T-10ms: 1ms 정밀 폴링
  while (Date.now() + offset < spinTarget - 10) {
    await sleep(1);
  }

  // T-10ms ~ T: busy-wait 스핀
  while (Date.now() + offset < spinTarget) {
    // spin
  }
}

// ============================================================================
// 메인 실행 시퀀스
// ============================================================================

let aborted = false;

async function runSequence(config) {
  aborted = false;

  try {
    const seqStart = performance.now();
    log('INIT', `prodId=${config.prodId}, scheduleNo=${config.scheduleNo}, fireTime=${config.fireTime}`);
    log('INIT', `sellType=${config.sellTypeCode}, netfunnel=${config.netfunnelName}, hedge=${config.hedgeCount}`);

    // ── Phase 1: 시간 동기화 + 커넥션 워밍업 (병렬) ──
    await setState({ phase: 'PHASE1_OFFSET' });

    const [offsetResult, warmupResult] = await Promise.all([
      measureOffset(config.prodId, 30, 60),
      warmupConnections(config),
    ]);

    if (aborted) return;

    let { offset, rttP95, success } = offsetResult;
    const { apiRtt } = warmupResult;

    if (!success) {
      log('PHASE1', '초기 오프셋 측정 실패 — 오프셋 0으로 진행');
    }

    diag('TIMING', `apiRtt=${apiRtt.toFixed(1)}ms`);

    // ── 목표 시각(T) 계산 ──
    const T = parseFireTime(config.fireTime);
    const remainSec = ((T - (Date.now() + offset)) / 1000).toFixed(1);
    log('PHASE2', `목표: ${new Date(T).toISOString()} (약 ${remainSec}초 후)`);

    const margin = Math.max(0, Math.floor(rttP95 / 2));

    await setState({
      phase: 'WAITING',
      offset,
      rttP95,
      apiRtt,
      fireTimeMs: T,
    });

    // ── T - 60s: alarm 설정 (SW 재시작 보장) ──
    chrome.alarms.create('wakeup', { when: T - 60000 });

    // ── T - margin - 5s 까지 대기 ──
    const targetA = T - margin - 5000;
    const waitA = targetA - (Date.now() + offset);
    if (waitA > 100) {
      log('WAIT', `T-${margin + 5000}ms까지 ${(waitA / 1000).toFixed(1)}초 대기`);

      // T-5초에 Content Script에 READY 버튼 표시 요청
      const readyTime = T - 5000 - (Date.now() + offset);
      if (readyTime > 0) {
        setTimeout(async () => {
          if (!aborted) {
            await sendToContentScript({ type: 'SHOW_READY_BUTTON' });
          }
        }, readyTime);
      }

      await sleep(waitA);
    }

    if (aborted) return;

    // ── 재보정 (T-5s 부근) ──
    await setState({ phase: 'RECALIBRATE' });
    log('RECAL', '재보정 시작 (10회)');

    const m2 = await measureOffset(config.prodId, 10, 40);
    if (m2.success) {
      const drift = Math.abs(m2.offset - offset);
      if (drift > 3) {
        log('RECAL', `오프셋 재보정: ${offset.toFixed(1)}ms → ${m2.offset.toFixed(1)}ms`);
        offset = m2.offset;
      } else {
        log('RECAL', `변동 미미 (${drift.toFixed(1)}ms) — 유지`);
      }
      rttP95 = m2.rttP95 || rttP95;
    }
    const margin2 = Math.max(0, Math.floor(rttP95 / 2));

    await setState({ offset, rttP95 });

    if (aborted) return;

    // ================================================================
    // v3 타이밍 매칭:
    //   T - RTT×1.5: sessionKey 사전 획득 시작 (prodKey.json)
    //   T:           prefetch 결과 사용 + NetFunnel 대기열 진입 (ts.wseq)
    //   T + RTT:     즉시 폼 제출
    //
    // v3에서는 sessionKey를 T 직전(~300ms)에 획득하여 신선한 상태로 사용.
    // T-5초에 미리 획득하면 서버에서 만료 판정할 수 있음.
    // ================================================================

    // preFetchLeadMs: v3와 동일하게 측정된 API RTT의 1.5배 사용
    const preFetchLeadMs = Math.ceil(apiRtt * 1.5) || 300;
    diag('TIMING', `preFetchLeadMs=${preFetchLeadMs}ms (apiRtt=${apiRtt.toFixed(1)}ms)`);

    // ── T - preFetchLeadMs 시점까지 대기 ──
    await setState({ phase: 'WAITING', message: `T 대기 중 (prefetch: T-${preFetchLeadMs}ms)` });

    const prefetchStartTarget = T - margin2 - preFetchLeadMs;
    while (Date.now() + offset < prefetchStartTarget - 2000) {
      if (aborted) return;
      await sleep(100);
    }
    while (Date.now() + offset < prefetchStartTarget) {
      if (aborted) return;
      await sleep(1);
    }

    if (aborted) return;

    // ── sessionKey 사전 획득 시작 (async — T까지 대기와 병렬) ──
    await setState({ phase: 'PREFETCH' });
    const prefetchT0 = performance.now();
    diag('PREFETCH', `sessionKey 사전 획득 시작 (T까지 약 ${preFetchLeadMs}ms 남음)`);

    const prefetchPromise = preFetchSessionKey(config);

    // ── T까지 정밀 대기 (prefetch와 병렬 진행) ──
    await waitUntilT(T, offset, margin2);
    if (aborted) return;

    // ── T 시점: prefetch 결과 확인 (이미 완료됐을 가능성 높음) ──
    const prefetchResult = await prefetchPromise;
    const prefetchElapsed = performance.now() - prefetchT0;

    if (!prefetchResult) {
      log('PREFETCH', 'sessionKey 획득 실패 → fallback');
      // chrome.scripting.executeScript로 페이지에서 직접 fallback 실행
      const fallbackTabs = await chrome.tabs.query({ url: 'https://ticket.melon.com/performance/index.htm*' });
      for (const tab of fallbackTabs) {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          world: 'MAIN',
          func: (cfg) => {
            try {
              var reservationCommonService = require('js/app/performance/service/reservationCommonService');
              var netfunnelService = require('js/app/performance/service/netfunnelService');
              var params = { prodId: cfg.prodId, scheduleNo: cfg.scheduleNo || 100001, v: 1 };
              reservationCommonService.service.generateSessionKey(params).then(function (result) {
                var dto = {
                  prodId: cfg.prodId,
                  scheduleNo: result.scheduleNo || cfg.scheduleNo || 100001,
                  pocCode: cfg.pocCode || 'SC0002',
                  sellTypeCode: cfg.sellTypeCode,
                  reservationType: cfg.sellTypeCode,
                  sellCondNo: typeof getCondNo === 'function' ? getCondNo() : '0',
                  trafficCtrlYn: result.trafficCtrlYn,
                  sessionKey: result.key || result.sessionKey,
                };
                if (result.trafficCtrlYn === 'Y') {
                  dto.nf_action_id = result.nflActId;
                  dto.netfunnelType = 'Y';
                  dto.netfunnelName = cfg.netfunnelName || 'reservationZAM';
                  try { dto.netfunnelSkinTitle = document.getElementById('global_ticket_title').value; } catch (e) {}
                  netfunnelService.service.netfunnelInit(dto);
                } else {
                  dto.netfunnelType = 'N';
                  reservationCommonService.service.oneStopProcess(dto);
                }
                console.log('[MelonExt:FALLBACK] 기존 방식 실행 완료');
              }).catch(function (err) {
                console.error('[MelonExt:FALLBACK] 실패:', err);
              });
            } catch (err) {
              console.error('[MelonExt:FALLBACK] AMD 모듈 로드 실패:', err);
            }
          },
          args: [config],
        });
      }
      await setState({ phase: 'ERROR', error: 'pre-fetch 실패 — fallback 실행' });
      return;
    }

    if (aborted) return;

    const { sessionKey, trafficCtrlYn, nfActionId, scheduleNo } = prefetchResult;
    diag('PREFETCH', `sessionKey 확보 (${prefetchElapsed.toFixed(1)}ms): tYn=${trafficCtrlYn}, aid=${nfActionId}`);

    // ================================================================
    // 2단계: T 시점 — 원본 AMD 모듈(netfunnelInit)로 실행
    //
    // v3와 동일한 방식: 페이지 컨텍스트에서 원본 코드를 호출
    // → NetFunnel_Action (JSONP) → 쿠키 설정 → 폼 제출
    // 이렇게 하면 서버가 기대하는 전체 코드 경로를 100% 재현
    // ================================================================
    await setState({ phase: 'FIRE' });
    const fireT0 = performance.now();
    log('FIRE', '발사! (원본 코드 경로)');

    // chrome.scripting.executeScript로 페이지 MAIN world에서 직접 실행
    // (MV3 CSP 우회 — 인라인 <script> 주입 불가)
    const tabs = await chrome.tabs.query({ url: 'https://ticket.melon.com/performance/index.htm*' });
    if (tabs.length === 0) throw new Error('멜론 상품 페이지 탭을 찾을 수 없습니다');

    const executeData = {
      prodId: config.prodId,
      scheduleNo: config.scheduleNo,
      pocCode: config.pocCode,
      sellTypeCode: config.sellTypeCode,
      trafficCtrlYn,
      sessionKey,
      nfActionId,
      netfunnelName: config.netfunnelName,
    };

    for (const tab of tabs) {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        world: 'MAIN',
        func: (data) => {
          try {
            var reservationCommonService = require('js/app/performance/service/reservationCommonService');
            var netfunnelService = require('js/app/performance/service/netfunnelService');

            var dto = {
              prodId: data.prodId,
              scheduleNo: data.scheduleNo || 100001,
              pocCode: data.pocCode || 'SC0002',
              sellTypeCode: data.sellTypeCode,
              reservationType: data.sellTypeCode,
              sellCondNo: typeof getCondNo === 'function' ? getCondNo() : '0',
              trafficCtrlYn: data.trafficCtrlYn,
              sessionKey: data.sessionKey,
            };

            if (data.trafficCtrlYn === 'Y') {
              dto.nf_action_id = data.nfActionId;
              dto.netfunnelType = 'Y';
              dto.netfunnelName = data.netfunnelName || 'reservationZAM';
              try { dto.netfunnelSkinTitle = document.getElementById('global_ticket_title').value; } catch (e) {}
              console.log('[MelonExt:EXECUTE] netfunnelInit 호출 (tYn=Y), dto:', JSON.stringify(dto));
              netfunnelService.service.netfunnelInit(dto);
            } else {
              dto.netfunnelType = 'N';
              console.log('[MelonExt:EXECUTE] oneStopProcess 호출 (tYn=N), dto:', JSON.stringify(dto));
              reservationCommonService.service.oneStopProcess(dto);
            }
            console.log('[MelonExt:EXECUTE] 원본 코드 실행 완료');
          } catch (err) {
            console.error('[MelonExt:EXECUTE] 실행 실패:', err);
          }
        },
        args: [executeData],
      });
    }

    const fireElapsed = performance.now() - fireT0;
    diag('FIRE', `T→원본코드실행: ${fireElapsed.toFixed(2)}ms`);
    await setState({
      phase: 'DONE',
      message: `완료! (원본 코드 경로) T→실행: ${fireElapsed.toFixed(1)}ms, sessionKey: ${prefetchElapsed.toFixed(0)}ms`,
    });

  } catch (err) {
    log('ERROR', `치명적 오류: ${err.message}`);
    console.error(err);
    await setState({ phase: 'ERROR', error: err.message });
  } finally {
    stopKeepalive();
    chrome.alarms.clear('wakeup');

    // 실행 완료 로그
    const s = await getState();
    const fireLocal = new Date().toISOString();
    const fireServer = new Date(Date.now() + (s.offset || 0)).toISOString();
    console.log('실행 완료:');
    console.log(`  로컬시각: ${fireLocal}`);
    console.log(`  서버기준: ${fireServer}`);
    console.log(`  오프셋: ${(s.offset || 0).toFixed(1)}ms`);
    console.log(`  상태: ${s.phase}`);
  }
}

// ============================================================================
// 메시지 핸들러
// ============================================================================

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'ARM') {
    const config = msg.config;
    log('ARM', `무장: prodId=${config.prodId}, fire=${config.fireTime}`);

    // 설정 + 상태 저장
    chrome.storage.local.set({
      config,
      state: { phase: 'ARMED', fireTimeMs: parseFireTime(config.fireTime) },
    });

    // keepalive 시작
    startKeepalive();

    // 즉시 응답 후 비동기로 CAPTCHA 확인 + ARM 처리
    sendResponse({ ok: true });

    (async () => {
      // CAPTCHA 확인 (인증예매 상품이면 사용자 입력 대기)
      const captchaOk = await handleCaptchaIfNeeded(config);
      if (!captchaOk || aborted) return;

      // T-60초에 wakeup alarm
      const T = parseFireTime(config.fireTime);
      const wakeupTime = T - 60000;
      if (wakeupTime > Date.now()) {
        chrome.alarms.create('wakeup', { when: wakeupTime });
        log('ARM', `wakeup alarm: ${new Date(wakeupTime).toISOString()}`);
      } else {
        log('ARM', 'T-60초 이내 → 즉시 시퀀스 시작');
        runSequence(config);
      }
    })();

    return true;
  }

  if (msg.type === 'CAPTCHA_RESPONSE') {
    // Content Script에서 CAPTCHA 사용자 입력 수신
    log('CAPTCHA', `CAPTCHA_RESPONSE 수신: ${JSON.stringify(msg.data)}, captchaResolve=${!!captchaResolve}`);
    if (captchaResolve) {
      captchaResolve(msg.data);
      captchaResolve = null;
    } else {
      log('CAPTCHA', 'WARNING: captchaResolve가 null — 메시지 무시됨');
    }
    sendResponse({ ok: true });
    return true;
  }

  if (msg.type === 'DISARM') {
    log('DISARM', '중지');
    aborted = true;
    stopKeepalive();
    chrome.alarms.clear('wakeup');
    chrome.storage.local.set({ state: { phase: 'IDLE' } });
    sendResponse({ ok: true });
    return true;
  }

  if (msg.type === 'PAGE_DATA') {
    // Content Script에서 페이지 데이터 수신
    log('PAGE_DATA', `수신: ${JSON.stringify(msg.data)}`);
    sendResponse({ ok: true });
    return true;
  }
});

// ============================================================================
// Alarm 핸들러 (SW wakeup)
// ============================================================================

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'wakeup') {
    log('ALARM', 'wakeup alarm 수신');

    const { config, state } = await chrome.storage.local.get(['config', 'state']);
    if (!config || !state) return;

    if (state.phase === 'ARMED') {
      log('ALARM', 'ARMED 상태 → 시퀀스 시작');
      startKeepalive();
      runSequence(config);
    }
  }
});

// ============================================================================
// Service Worker 설치/활성화
// ============================================================================

chrome.runtime.onInstalled.addListener(() => {
  log('SW', 'Extension 설치/업데이트');
  chrome.storage.local.set({ state: { phase: 'IDLE' } });
});

// SW 시작 시 버전 확인 + 상태 복구
log('SW', '=== Melon Ticket Optimizer v1.2.0 (scripting.executeScript) ===');

(async () => {
  const { state, config } = await chrome.storage.local.get(['state', 'config']);
  if (state && config && state.phase === 'ARMED') {
    log('SW', 'SW 재시작 — ARMED 상태 복구');
    startKeepalive();

    const T = parseFireTime(config.fireTime);
    if (T - Date.now() < 60000) {
      log('SW', 'T-60초 이내 → 시퀀스 시작');
      runSequence(config);
    } else {
      chrome.alarms.create('wakeup', { when: T - 60000 });
    }
  }
})();
