// ============================================================================
// content.js — Content Script: 페이지 데이터 수집 + 폼 제출
//
// DOM 접근이 필요한 작업만 수행:
//   1. 페이지 데이터 수집 → SW에 전달
//   2. READY 버튼 오버레이 (팝업 차단기 대응)
//   3. 폼 제출 (대기열 통과 후)
//   4. Fallback 실행 (SW 실패 시)
//   5. 상태 오버레이 표시
// ============================================================================

const log = (tag, msg) => console.log(`[MelonExt:${tag}] ${msg}`);

// Extension context 유효성 체크
let extensionDead = false;
function isExtensionValid() {
  if (extensionDead) return false;
  try {
    void chrome.runtime.id;
    return true;
  } catch (e) {
    extensionDead = true;
    return false;
  }
}

// ============================================================================
// 폼 탐색 유틸리티
// — document.oneForm (named property)은 content script에서 작동하지 않을 수 있음
// — document.getElementById + document.forms + querySelector 순차 시도
// ============================================================================

function getOneForm() {
  return document.getElementById('oneForm')
    || document.forms.namedItem('oneForm')
    || document.querySelector('form[name="oneForm"]');
}

// 폼이 동적으로 삽입될 수 있으므로 MutationObserver로 대기
function waitForOneForm(timeoutMs = 10000) {
  return new Promise((resolve) => {
    const frm = getOneForm();
    if (frm) return resolve(frm);

    log('FORM', 'oneForm 미발견 — MutationObserver로 대기');

    const timeout = setTimeout(() => {
      observer.disconnect();
      const lastTry = getOneForm();
      if (lastTry) resolve(lastTry);
      else resolve(null);
    }, timeoutMs);

    const observer = new MutationObserver(() => {
      const frm = getOneForm();
      if (frm) {
        observer.disconnect();
        clearTimeout(timeout);
        log('FORM', 'oneForm 발견 (MutationObserver)');
        resolve(frm);
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
  });
}

// ============================================================================
// 1. 페이지 데이터 수집
// ============================================================================

function collectPageData() {
  const data = {};

  // prodId from URL
  try {
    const params = new URLSearchParams(window.location.search);
    data.prodId = params.get('prodId') || '';
  } catch (e) {
    data.prodId = '';
  }

  // getCondNo() → 항상 '0' (index.htm:452)
  data.condNo = '0';

  // 넷퍼넬 스킨 타이틀
  try {
    const el = document.getElementById('global_ticket_title');
    data.netfunnelSkinTitle = el ? el.value : '';
  } catch (e) {
    data.netfunnelSkinTitle = '';
  }

  // oneForm 존재 여부
  data.hasOneForm = !!getOneForm();

  return data;
}

// 페이지 로드 시 데이터 수집 → SW 전달
// oneForm을 대기한 후 전달
waitForOneForm().then((frm) => {
  if (!isExtensionValid()) return;
  try {
    const pageData = collectPageData();
    pageData.hasOneForm = !!frm;
    chrome.runtime.sendMessage({ type: 'PAGE_DATA', data: pageData });
    log('INIT', `페이지 데이터 수집: prodId=${pageData.prodId}, hasOneForm=${pageData.hasOneForm}`);
  } catch (err) {
    log('INIT', `데이터 수집 실패: ${err.message}`);
  }
});

// ============================================================================
// 2. READY 버튼 오버레이 (팝업 차단기 대응)
// ============================================================================

let popupWindow = null;
let readyDone = false; // 팝업이 이미 열렸으면 true

function showReadyButton() {
  // 이미 팝업 열었거나 표시 중이면 무시
  if (readyDone) return;
  if (document.getElementById('melon-ext-ready-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'melon-ext-ready-overlay';
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.6); z-index: 999999;
    display: flex; align-items: center; justify-content: center;
  `;

  const box = document.createElement('div');
  box.style.cssText = `
    background: #fff; border-radius: 12px; padding: 32px 40px;
    text-align: center; box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  `;

  const title = document.createElement('div');
  title.textContent = 'Melon Ticket Optimizer';
  title.style.cssText = 'font-size: 18px; font-weight: 700; margin-bottom: 12px; color: #1a1a2e;';

  const desc = document.createElement('div');
  desc.textContent = '아래 버튼을 클릭하여 예약 팝업 창을 준비하세요.\n(팝업 차단기 우회를 위해 사용자 클릭이 필요합니다)';
  desc.style.cssText = 'font-size: 14px; color: #666; margin-bottom: 20px; white-space: pre-line;';

  const btn = document.createElement('button');
  btn.textContent = 'READY - 팝업 창 열기';
  btn.style.cssText = `
    padding: 14px 40px; font-size: 16px; font-weight: 700;
    background: #4a90d9; color: #fff; border: none; border-radius: 8px;
    cursor: pointer;
  `;

  btn.addEventListener('click', () => {
    // 사용자 제스처로 window.open → 팝업 차단 안 됨
    popupWindow = window.open('', 'onstopForm', 'width=950,height=646');
    readyDone = true;
    overlay.remove();
    log('READY', '팝업 창 열림');
  });

  box.appendChild(title);
  box.appendChild(desc);
  box.appendChild(btn);
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  log('READY', 'READY 버튼 오버레이 표시');
}

// ============================================================================
// 3. 폼 제출 (대기열 통과 후)
// ============================================================================

async function submitForm(data) {
  // 폼을 찾거나 동적 생성 대기
  let frm = getOneForm();
  if (!frm) {
    log('SUBMIT', 'oneForm 미발견 — 대기 중...');
    frm = await waitForOneForm(5000);
  }
  if (!frm) {
    log('SUBMIT', 'oneForm 최종 미발견 — 동적 생성');
    frm = createOneForm();
  }

  // ── 1단계: 모든 폼 필드 초기화 (이전 실행의 잔여 데이터 제거) ──
  const allFields = ['prodId', 'pocCode', 'scheduleNo', 'sellCondNo',
                     'sellTypeCode', 'tYn', 'chk', 'netfunnel_key', 'autheTypeCode'];
  for (const name of allFields) {
    const el = frm.elements[name];
    if (el) el.value = '';
  }

  frm.action = 'https://ticket.melon.com/reservation/popup/onestop.htm';
  frm.method = 'post';
  frm.target = 'onstopForm';

  // ── 2단계: data에 포함된 필드만 설정 (원본 동작 재현) ──
  // background.js의 buildFormData()가 sellTypeCode에 따라 필요한 필드만 포함
  setFormField(frm, 'prodId', data.prodId);
  setFormField(frm, 'pocCode', data.pocCode || 'SC0002');
  setFormField(frm, 'scheduleNo', data.scheduleNo);
  setFormField(frm, 'sellTypeCode', data.sellTypeCode);
  setFormField(frm, 'tYn', data.tYn);
  setFormField(frm, 'chk', encodeURIComponent(data.chk));

  // sellCondNo: ST0002(선예매)만 설정, ST0001은 빈 값 유지
  if (data.sellCondNo != null) {
    setFormField(frm, 'sellCondNo', data.sellCondNo);
  }

  // netfunnel_key: trafficCtrlYn=Y이고 키가 있을 때만 설정
  if (data.netfunnel_key) {
    setFormField(frm, 'netfunnel_key', data.netfunnel_key);
  }

  // ── 디버그: 최종 전송 payload 로그 ──
  const payload = {};
  for (const name of allFields) {
    const el = frm.elements[name];
    if (el) payload[name] = el.value;
  }
  log('SUBMIT', `최종 payload: ${JSON.stringify(payload)}`);

  // 팝업 창이 아직 없으면 여기서 시도 (차단될 수 있음)
  if (!popupWindow || popupWindow.closed) {
    popupWindow = window.open('', 'onstopForm', 'width=950,height=646');
  }

  frm.submit();
  log('SUBMIT', '폼 제출 완료');
  return true;
}

// 폼 필드 안전 접근: elements['name'] 사용, 없으면 hidden input 생성
function setFormField(frm, name, value) {
  let el = frm.elements[name];
  if (!el) {
    el = document.createElement('input');
    el.type = 'hidden';
    el.name = name;
    frm.appendChild(el);
  }
  el.value = value;
}

// oneForm이 DOM에 없을 때 동적 생성
function createOneForm() {
  const frm = document.createElement('form');
  frm.id = 'oneForm';
  frm.name = 'oneForm';
  frm.method = 'post';
  frm.style.display = 'none';

  const fields = ['prodId', 'pocCode', 'scheduleNo', 'sellCondNo',
                  'sellTypeCode', 'tYn', 'chk', 'netfunnel_key', 'autheTypeCode'];
  for (const name of fields) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    frm.appendChild(input);
  }

  document.body.appendChild(frm);
  log('FORM', 'oneForm 동적 생성 완료');
  return frm;
}

// ============================================================================
// 4. Fallback 실행 (SW에서 직접 NetFunnel 실패 시)
// ============================================================================

function executeFallback(config) {
  log('FALLBACK', '페이지 원본 AMD 모듈로 기존 예약 흐름 실행');

  // 페이지 컨텍스트에 스크립트 주입
  const script = document.createElement('script');
  script.textContent = `
    (function() {
      try {
        var reservationCommonService = require('js/app/performance/service/reservationCommonService');
        var netfunnelService = require('js/app/performance/service/netfunnelService');

        var params = {
          prodId: '${config.prodId}',
          scheduleNo: ${config.scheduleNo || 100001},
          v: 1
        };

        reservationCommonService.service.generateSessionKey(params).then(function(result) {
          var dto = {
            prodId: '${config.prodId}',
            scheduleNo: result.scheduleNo || ${config.scheduleNo || 100001},
            pocCode: '${config.pocCode || 'SC0002'}',
            sellTypeCode: '${config.sellTypeCode}',
            reservationType: '${config.sellTypeCode}',
            sellCondNo: typeof getCondNo === 'function' ? getCondNo() : '0',
            trafficCtrlYn: result.trafficCtrlYn,
            sessionKey: result.key || result.sessionKey
          };

          if (result.trafficCtrlYn === 'Y') {
            dto.nf_action_id = result.nflActId;
            dto.netfunnelType = 'Y';
            dto.netfunnelName = '${config.netfunnelName || 'reservationZAM'}';
            try { dto.netfunnelSkinTitle = document.getElementById('global_ticket_title').value; } catch(e) {}
            netfunnelService.service.netfunnelInit(dto);
          } else {
            dto.netfunnelType = 'N';
            reservationCommonService.service.oneStopProcess(dto);
          }
          console.log('[MelonExt:FALLBACK] 기존 방식 실행 완료');
        }).catch(function(err) {
          console.error('[MelonExt:FALLBACK] 실패:', err);
        });
      } catch(err) {
        console.error('[MelonExt:FALLBACK] AMD 모듈 로드 실패:', err);
      }
    })();
  `;
  document.documentElement.appendChild(script);
  script.remove();
}

// ============================================================================
// 5. 상태 오버레이
// ============================================================================

let statusOverlay = null;

function ensureStatusOverlay() {
  if (statusOverlay) return statusOverlay;

  statusOverlay = document.createElement('div');
  statusOverlay.id = 'melon-ext-status';
  statusOverlay.style.cssText = `
    position: fixed; top: 12px; right: 12px; z-index: 999998;
    background: rgba(26,26,46,0.92); color: #fff; padding: 10px 14px;
    border-radius: 8px; font-family: monospace; font-size: 12px;
    line-height: 1.6; min-width: 220px; max-width: 340px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3); pointer-events: none;
  `;
  document.body.appendChild(statusOverlay);
  return statusOverlay;
}

function updateStatusOverlay() {
  // Extension context가 죽었으면 interval 정리하고 중단
  if (!isExtensionValid()) {
    clearInterval(statusInterval);
    if (statusOverlay) {
      statusOverlay.innerHTML = '<b style="color:#e74c3c">Extension 재로드됨</b><br>페이지를 새로고침하세요 (F5)';
    }
    return;
  }

  try {
    chrome.storage.local.get('state', (result) => {
      // chrome.runtime.lastError 체크 (콜백 내에서 context 사라질 수 있음)
      if (chrome.runtime.lastError) {
        clearInterval(statusInterval);
        return;
      }

      const state = result.state;
      if (!state || state.phase === 'IDLE') {
        if (statusOverlay) {
          statusOverlay.remove();
          statusOverlay = null;
        }
        return;
      }

      const el = ensureStatusOverlay();
      const lines = [`<b>[${state.phase}]</b>`];

      if (state.offset != null) lines.push(`offset: ${state.offset.toFixed(1)}ms`);
      if (state.rttP95 != null) lines.push(`rttP95: ${state.rttP95.toFixed(1)}ms`);

      if (state.fireTimeMs) {
        const remain = state.fireTimeMs - Date.now() - (state.offset || 0);
        if (remain > 0) {
          lines.push(`T까지: ${(remain / 1000).toFixed(1)}s`);
        }
      }

      if (state.nwait != null) lines.push(`대기열: ${state.nwait}명`);
      if (state.error) lines.push(`<span style="color:#e74c3c">${state.error}</span>`);
      if (state.message) lines.push(state.message);

      el.innerHTML = lines.join('<br>');
    });
  } catch (e) {
    // Extension context invalidated — 조용히 정리
    extensionDead = true;
    clearInterval(statusInterval);
  }
}

// 상태 오버레이 폴링
let statusInterval = setInterval(updateStatusOverlay, 500);

// ============================================================================
// 메시지 수신 핸들러
// ============================================================================

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'SHOW_READY_BUTTON') {
    showReadyButton();
    sendResponse({ ok: true });
    return true;
  }

  if (msg.type === 'SUBMIT_FORM') {
    // submitForm is async (waits for form if needed)
    submitForm(msg.data).then((ok) => {
      sendResponse({ ok });
    }).catch((err) => {
      log('SUBMIT', `오류: ${err.message}`);
      sendResponse({ ok: false, error: err.message });
    });
    return true; // async sendResponse
  }

  if (msg.type === 'FALLBACK') {
    executeFallback(msg.config);
    sendResponse({ ok: true });
    return true;
  }
});

// ============================================================================
// 정리
// ============================================================================

window.addEventListener('beforeunload', () => {
  clearInterval(statusInterval);
});

log('INIT', 'Content Script 로드 완료');
