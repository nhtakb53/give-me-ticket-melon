// ============================================================================
// popup.js — 설정 관리 + 상태 표시
// ============================================================================

const $ = (id) => document.getElementById(id);

const FIELDS = ['prodId', 'scheduleNo', 'fireTime', 'sellTypeCode', 'hedgeCount'];

// 설정 로드
async function loadConfig() {
  const result = await chrome.storage.local.get('config');
  if (result.config) {
    const c = result.config;
    if (c.prodId) $('prodId').value = c.prodId;
    if (c.scheduleNo) $('scheduleNo').value = c.scheduleNo;
    if (c.fireTime) $('fireTime').value = c.fireTime;
    if (c.sellTypeCode) $('sellTypeCode').value = c.sellTypeCode;
    if (c.hedgeCount) $('hedgeCount').value = c.hedgeCount;
  }
}

// 설정 저장
function readConfig() {
  const sellTypeCode = $('sellTypeCode').value;
  return {
    prodId: $('prodId').value.trim(),
    scheduleNo: parseInt($('scheduleNo').value, 10) || 100001,
    fireTime: $('fireTime').value.trim(),
    sellTypeCode,
    netfunnelName: sellTypeCode === 'ST0002' ? 'preReservationOneStopZAM' : 'reservationZAM',
    pocCode: 'SC0002',
    hedgeCount: parseInt($('hedgeCount').value, 10) || 3,
  };
}

async function saveConfig() {
  const config = readConfig();
  await chrome.storage.local.set({ config });
  return config;
}

// 유효성 검사
function validateConfig(config) {
  if (!config.prodId) return '상품 ID를 입력하세요';
  if (!/^\d{2}:\d{2}:\d{2}$/.test(config.fireTime)) return '시간 형식: HH:mm:ss';
  return null;
}

// 상태 업데이트
function renderStatus(state) {
  const el = $('status');
  if (!state || !state.phase) {
    el.innerHTML = '대기 중...';
    return;
  }

  const lines = [];

  const phaseLabels = {
    IDLE: '대기',
    ARMED: '무장 완료',
    CAPTCHA_CHECK: 'CAPTCHA 입력 대기...',
    PHASE1_OFFSET: '시간 동기화 중...',
    WAITING: '대기 중...',
    RECALIBRATE: '재보정 중...',
    PREFETCH: 'SessionKey 획득 중...',
    FIRE: '발사!',
    QUEUE_POLL: '대기열 폴링 중...',
    DONE: '완료',
    ERROR: '오류 발생',
  };

  const label = phaseLabels[state.phase] || state.phase;
  const cls = state.phase === 'ERROR' ? 'error' : state.phase === 'DONE' ? 'done' : 'phase';
  lines.push(`<span class="${cls}">[${state.phase}] ${label}</span>`);

  if (state.offset != null) lines.push(`오프셋: ${state.offset.toFixed(1)}ms`);
  if (state.rttP95 != null) lines.push(`RTT P95: ${state.rttP95.toFixed(1)}ms`);
  if (state.apiRtt != null) lines.push(`API RTT: ${state.apiRtt.toFixed(1)}ms`);

  if (state.fireTimeMs) {
    const remain = state.fireTimeMs - Date.now() - (state.offset || 0);
    if (remain > 0) {
      lines.push(`남은 시간: ${(remain / 1000).toFixed(1)}초`);
    }
  }

  if (state.nwait != null) lines.push(`대기열 위치: ${state.nwait}`);
  if (state.error) lines.push(`<span class="error">${state.error}</span>`);
  if (state.message) lines.push(state.message);

  el.innerHTML = lines.join('<br>');
}

// 버튼 상태
let armed = false;

async function updateArmedState() {
  const result = await chrome.storage.local.get('state');
  const state = result.state;
  if (state && state.phase && state.phase !== 'IDLE' && state.phase !== 'DONE' && state.phase !== 'ERROR') {
    armed = true;
    $('startBtn').textContent = '중지 (DISARM)';
    $('startBtn').classList.add('armed');
  } else {
    armed = false;
    $('startBtn').textContent = '시작 (ARM)';
    $('startBtn').classList.remove('armed');
  }
}

// 시작/중지 버튼
$('startBtn').addEventListener('click', async () => {
  if (armed) {
    // 중지
    chrome.runtime.sendMessage({ type: 'DISARM' });
    armed = false;
    $('startBtn').textContent = '시작 (ARM)';
    $('startBtn').classList.remove('armed');
    renderStatus({ phase: 'IDLE' });
    return;
  }

  const config = await saveConfig();
  const error = validateConfig(config);
  if (error) {
    renderStatus({ phase: 'ERROR', error });
    return;
  }

  chrome.runtime.sendMessage({ type: 'ARM', config });
  armed = true;
  $('startBtn').textContent = '중지 (DISARM)';
  $('startBtn').classList.add('armed');
  renderStatus({ phase: 'ARMED', message: '무장 완료. Service Worker가 대기 중...' });
});

// 필드 변경 시 자동 저장
FIELDS.forEach((id) => {
  $(id).addEventListener('change', saveConfig);
  $(id).addEventListener('input', saveConfig);
});

// 상태 폴링 (500ms)
let statusInterval = null;

async function pollStatus() {
  const result = await chrome.storage.local.get('state');
  if (result.state) {
    renderStatus(result.state);
    updateArmedState();
  }
}

// 초기화
loadConfig().then(() => {
  updateArmedState();
  pollStatus();
  statusInterval = setInterval(pollStatus, 500);
});

// 팝업 닫힐 때 정리
window.addEventListener('unload', () => {
  if (statusInterval) clearInterval(statusInterval);
});
