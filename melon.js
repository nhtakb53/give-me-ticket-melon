const CONFIG = {
  prodId: "212768",          // ✅ 상품 ID
  scheduleNo: 100001,        // ✅ 회차 번호
  fireTime: "20:00:00",      // ✅ 시간 설정 (HH:mm:ss)
  offsetSamples: 30,         // 초기 오프셋 샘플 수 (중앙값 사용)
  offsetGapMs: 60,           // 샘플간 간격 (ms)
  recalSamples: 10,          // T-5s 재보정 샘플 수
  recalGapMs: 40,            // 재보정 간격 (ms)
  sellTypeCode: "ST0002", // ST0001: 일반예매, ST0002: 선예매
  reservationType: "ST0002", // ST0001: 일반예매, ST0002: 선예매
  netfunnelName: "preReservationOneStopZAM", // reservationZAM: 일반예매, preReservationOneStopZAM: 선예매
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const nextFrame = () => new Promise((r) => requestAnimationFrame(r));
const makeOffsetUrl = (prodId) => `https://tktapi.melon.com/poc/foruInfo.json?prodId=${encodeURIComponent(prodId)}&requestservicetype=P`;

function parseFireTodayOrTomorrow(fireHHMMSS) {
  const [hh, mm, ss] = fireHHMMSS.split(":").map((v) => parseInt(v, 10) || 0);
  const t = new Date();
  t.setHours(hh, mm, ss, 0);
  const now = Date.now();
  return (now > t.getTime()) ? t.getTime() + 86_400_000 : t.getTime();
}

async function measureOffset(url, N, gapMs) {
  const offsets = [];
  const rtts = [];
  for (let i = 0; i < N; i++) {
    const t0e = Date.now();
    const t0p = performance.now();
    const r = await fetch(url, { method: "GET", cache: "no-store", credentials: "include" });
    const t1p = performance.now();
    const t1e = Date.now();
    const d = r.headers.get("date");
    if (d) {
      const s = new Date(d).getTime();
      const mid = t0e + (t1e - t0e) / 2;
      const rtt = t1p - t0p;
      offsets.push(s - mid);
      rtts.push(rtt);
    }
    if (gapMs > 0) await sleep(gapMs);
  }
  offsets.sort((a, b) => a - b);
  const midIdx = Math.floor(offsets.length / 2);
  const offset = offsets.length
    ? (offsets.length % 2 ? offsets[midIdx] : (offsets[midIdx - 1] + offsets[midIdx]) / 2)
    : 0;
  rtts.sort((a, b) => a - b);
  const p95Idx = Math.max(0, Math.min(rtts.length - 1, Math.floor(rtts.length * 0.95) - 1));
  const rttP95 = rtts.length ? rtts[p95Idx] : 0;
  return { offset, rttP95 };
}

async function req() {
  const { prodId, scheduleNo, reservationType, netfunnelName, sellTypeCode } = CONFIG;
  const defaultParams = { prodId, scheduleNo, v: 1 };
  const finalParams = Object.assign({}, defaultParams);

  const reservationCommonService = require("js/app/performance/service/reservationCommonService");
  const netfunnelService = require("js/app/performance/service/netfunnelService");
  const asyncCall = reservationCommonService.service.generateSessionKey(finalParams);

  asyncCall.then(function (result) {
      var trafficCtrlYn = result.trafficCtrlYn;
      var nf_action_id   = result.nf_action_id;
      var sessionKey     = result.sessionKey;

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
        netfunnelService.service.netfunnelInit(dto);
      } else {
        dto.netfunnelType = "N";
        reservationCommonService.service.oneStopProcess(dto);
      }
    },
    function () {}
  );
}

(async () => {
  const offsetUrl = makeOffsetUrl(CONFIG.prodId);

  // 1) 초기 오프셋/RTT 추정 (N=30 중앙값, 95p RTT)
  let { offset: off, rttP95 } = await measureOffset(offsetUrl, CONFIG.offsetSamples, CONFIG.offsetGapMs);

  // 2) 목표 시각(T) 계산 (오늘 fireTime, 지났으면 내일)
  let T = parseFireTodayOrTomorrow(CONFIG.fireTime);

  // 3) 보수적 마진 (95p RTT의 절반)
  const margin = Math.max(0, Math.floor(rttP95 / 2));

  // 4) T - margin - 5s 까지 대기
  let targetA = T - margin - 5000;
  let waitA = targetA - (Date.now() + off);
  if (waitA > 1) await sleep(waitA);

  // 5) 재보정 (T-5s 부근, 샘플 10회, 더 촘촘하게)
  const m2 = await measureOffset(offsetUrl, CONFIG.recalSamples, CONFIG.recalGapMs);
  if (Math.abs(m2.offset - off) > 3) off = m2.offset;
  rttP95 = m2.rttP95 || rttP95;
  const margin2 = Math.max(0, Math.floor(rttP95 / 2));

  // 6) T - margin2 - 2s ~ T-100ms : rAF/짧은 setTimeout 폴링
  const phaseBStart = T - margin2 - 2000;
  if (Date.now() + off < phaseBStart) await sleep(phaseBStart - (Date.now() + off));
  while (true) {
    const remain = T - (Date.now() + off);
    if (remain <= 100) break;
    await Promise.race([nextFrame(), sleep(16)]);
  }

  // 7) T-10ms 이내: 아주 짧은 스핀 (최대 10ms), 메인스레드 블록 최소화
  const spinStart = performance.now();
  while (Date.now() + off < T && performance.now() - spinStart < 10) {}
  while (Date.now() + off < T) await Promise.race([nextFrame(), sleep(10)]);

  // 8) 실제 요청
  await req();

  // 🔥 실행 시각(ms 포함 표기)
  const fireLocal = new Date().toISOString();
  const fireServer = new Date(Date.now() + off).toISOString();
  console.log("🔥 파이어!");
  console.log(`   로컬시각 : ${fireLocal}`);
  console.log(`   서버기준 : ${fireServer}`);
})();
