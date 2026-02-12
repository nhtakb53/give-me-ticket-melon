# Melon Ticket Optimizer — Chrome Extension 가이드

## 개요

멜론 티켓 예매 최적화 Chrome Extension (MV3).
기존 콘솔 스크립트(v3) 대비 **직접 NetFunnel 프로토콜 구현**으로 JSONP/script 태그 오버헤드를 제거하고, Service Worker에서 실행하여 탭 스로틀링 없이 정밀 타이밍을 달성합니다.

### v3 콘솔 스크립트 vs Extension 비교

| 항목 | v3 (콘솔) | Extension |
|------|-----------|-----------|
| NetFunnel 진입 | JSONP `<script>` 태그 (~5-10ms) | 직접 `fetch` (~1-2ms) |
| 탭 스로틀링 | 백그라운드 탭 시 setTimeout 4ms+ | Service Worker — 영향 없음 |
| 페이지 새로고침 | 스크립트 소멸 | 유지 (SW 자동 복구) |
| CORS | JSONP 강제 | `host_permissions`로 우회 |
| 캡챠 지원 | X | O (자동 감지 + UI) |
| 총 오버헤드 | ~12-31ms | ~1-2ms |

---

## 설치

### 1. 확장 프로그램 로드

1. Chrome에서 `chrome://extensions` 접속
2. 우측 상단 **개발자 모드** 토글 ON
3. **"압축해제된 확장 프로그램을 로드합니다"** 클릭
4. `melon-ticket-ext` 폴더 선택

### 2. 설치 확인

- 확장 프로그램 목록에 **"Melon Ticket Optimizer"** 표시
- 상태: **Service Worker** 링크가 보이면 정상

---

## 사용법

### 1단계: 멜론 로그인

멜론 티켓 사이트에 **반드시 로그인** 상태여야 합니다.
Extension은 로그인 세션 쿠키를 사용하여 API를 호출합니다.

### 2단계: 상품 페이지 접속

예매할 상품 페이지로 이동:
```
https://ticket.melon.com/performance/index.htm?prodId={상품ID}
```

페이지 콘솔에 `[MelonExt:INIT] Content Script 로드 완료`가 표시되면 정상.

### 3단계: 팝업에서 설정

Chrome 툴바의 Extension 아이콘 클릭 → 팝업 UI:

| 필드 | 설명 | 예시 |
|------|------|------|
| **상품 ID** | 예매할 상품의 prodId | `212780` |
| **회차** | scheduleNo (대부분 기본값 사용) | `100001` |
| **발사 시각** | 티켓 오픈 시각 (HH:mm:ss) | `20:00:00` |
| **판매 유형** | ST0001 일반예매 / ST0002 선예매 | `ST0001` |
| **Hedge 수** | sessionKey pre-fetch 병렬 요청 수 | `3` |

> **판매 유형 자동 매핑:**
> - `ST0001` → netfunnelName: `reservationZAM`
> - `ST0002` → netfunnelName: `preReservationOneStopZAM`

### 4단계: 시작 (ARM)

**"시작 (ARM)"** 버튼 클릭 → 무장 상태 진입.

팝업과 페이지 우측 상단 오버레이에 현재 상태가 표시됩니다.

### 5단계: 캡챠 입력 (해당 시)

상품에 캡챠(인증예매)가 설정되어 있으면 ARM 직후 캡챠 이미지 오버레이가 표시됩니다.

1. 화면에 표시된 숫자/문자를 입력
2. 틀리면 자동으로 새 이미지가 표시되며 재입력 가능
3. 이미지가 안 보이면 **새로고침** 버튼으로 새 이미지 요청
4. 캡챠 통과 후 자동으로 다음 단계 진행

> 캡챠가 필요 없는 상품은 이 단계를 자동으로 건너뜁니다.

### 6단계: READY 버튼 클릭

발사 **5초 전** 페이지에 READY 오버레이가 표시됩니다.

**반드시 클릭하세요!** — 사용자 제스처로 팝업 창을 미리 열어 팝업 차단기를 우회합니다.

### 7단계: 자동 실행

설정한 시각에 자동으로:
1. sessionKey 사전 획득 (hedging)
2. NetFunnel 대기열 직접 진입
3. 대기열 통과 후 예매 폼 자동 제출

---

## 실행 시퀀스 (타이밍)

```
ARM           사용자 시작 버튼 클릭
              └── 캡챠 필요 시 → 캡챠 이미지 표시 → 사용자 입력 → 검증

T - 60s       chrome.alarm → Service Worker wakeup
              ├── 시간 동기화 (30회 측정, 중앙값)
              └── 커넥션 워밍업 (tktapi + zam)      [병렬]

T - 5s        재보정 (10회 측정)
              READY 버튼 오버레이 표시
              → 사용자 클릭 → 팝업 창 열림

T - RTT×1.5   sessionKey pre-fetch (Promise.any × hedge수)

T - 2s        정밀 setTimeout(1ms) 폴링

T - 10ms      busy-wait 스핀

T             fetch(zam.melon.com/ts.wseq?opcode=5101) 발사!

T + RTT       응답 파싱
              ├── 200: 즉시 진입 → 폼 제출
              └── 201: 대기열 폴링 → 통과 후 폼 제출
```

---

## 상태 머신

```
IDLE → ARMED → CAPTCHA_CHECK → PHASE1_OFFSET → WAITING → RECALIBRATE → PREFETCH → FIRE → QUEUE_POLL → DONE
                    ↓ (불필요 시 skip)                                                       ↘ ERROR
```

| 상태 | 설명 |
|------|------|
| `IDLE` | 대기 중 |
| `ARMED` | 무장 완료, 알람 대기 |
| `CAPTCHA_CHECK` | 캡챠 필요 여부 확인 및 처리 |
| `PHASE1_OFFSET` | 서버 시간 동기화 + 커넥션 워밍업 |
| `WAITING` | T 시각까지 대기 |
| `RECALIBRATE` | T-5s 재보정 |
| `PREFETCH` | sessionKey 사전 획득 |
| `FIRE` | 발사! NetFunnel 대기열 진입 |
| `QUEUE_POLL` | 대기열 폴링 중 |
| `DONE` | 완료 |
| `ERROR` | 오류 발생 |

---

## 캡챠 처리

일부 상품은 예매 시 캡챠(인증예매)를 요구합니다. Extension은 ARM 단계에서 캡챠 필요 여부를 자동으로 감지합니다.

### 동작 흐름

1. **감지**: `captChaImage.json` API로 캡챠 필요 여부 확인
2. **표시**: 필요 시 Content Script를 통해 페이지에 캡챠 이미지 오버레이 표시
3. **입력**: 사용자가 이미지의 문자를 입력
4. **검증**: `checkCaptcha.json` API로 입력값 검증
5. **완료**: 검증 통과 시 `checkCaptchaComplete.json` 호출 후 다음 단계 진행
6. **재시도**: 검증 실패 시 새 이미지로 자동 교체, 재입력 가능

### 메시지 흐름

```
Background Worker                    Content Script
       │                                    │
       ├── SHOW_CAPTCHA (image, metadata) ──→│  오버레이 표시
       │                                    │
       │←── CAPTCHA_RESPONSE (입력값) ───────┤  사용자 입력
       │                                    │
       ├── CAPTCHA_RETRY (새 이미지) ────────→│  재시도 (실패 시)
       │         또는                        │
       ├── CAPTCHA_COMPLETE (chkcapt) ──────→│  완료 → 다음 단계
```

---

## 아키텍처

```
melon-ticket-ext/
├── manifest.json    MV3 매니페스트 (host_permissions로 CORS 우회)
├── popup.html       설정 UI
├── popup.js         설정 저장/로드 + 실시간 상태 표시
├── background.js    Service Worker — 타이밍 + 직접 NetFunnel 통신 + 캡챠 (핵심)
└── content.js       Content Script — 페이지 DOM 접근 + 캡챠 UI + 폼 제출
```

### 역할 분리

| 컴포넌트 | 역할 | 이유 |
|----------|------|------|
| **Service Worker** | 시간 동기화, 캡챠 API 호출, sessionKey pre-fetch, ts.wseq 대기열 진입, 폴링 | CORS 우회, 탭 스로틀링 없음 |
| **Content Script** | 페이지 데이터 수집, 캡챠 UI 오버레이, READY 버튼, 폼 제출 | DOM 접근 필요 |
| **Popup** | 설정 입력, 시작/중지, 상태 표시 | UX |

### host_permissions

| 호스트 | 용도 |
|--------|------|
| `https://tktapi.melon.com/*` | sessionKey 생성 API |
| `https://zam.melon.com/*` | NetFunnel 대기열 (ts.wseq) |
| `https://ticket.melon.com/*` | 예매 페이지 + 캡챠 API |

### Fallback 메커니즘

sessionKey pre-fetch가 실패하면 페이지 내 기존 AMD 모듈(`reservationCommonService.service.generateSessionKey()`)을 `chrome.scripting.executeScript`로 호출하여 기존 방식으로 fallback합니다.

### Service Worker 생존 전략

MV3는 30초 유휴 시 Service Worker를 종료합니다. Extension은 다음으로 대응:
- `chrome.alarms`: T-60초에 wakeup 알람 설정
- Keepalive: 25초마다 `chrome.storage.local.get('_keepalive')` 호출
- 상태 복구: SW 재시작 시 `chrome.storage.local`에서 상태 자동 복원

---

## 디버깅

### Service Worker 콘솔

1. `chrome://extensions` → Melon Ticket Optimizer
2. **"Service Worker"** 링크 클릭 → DevTools 열림
3. Console 탭에서 `[DIAG:...]` 태그로 세부 타이밍 확인

### Content Script 콘솔

상품 페이지 F12 → Console 탭에서 `[MelonExt:...]` 로그 확인.

### 폼 데이터 검증

폼 제출 시 `[MelonExt:SUBMIT] 최종 payload: {...}` 로그에서 전송되는 모든 필드 확인 가능.

팝업 창 F12 → Network 탭 → `onestop.htm` 요청의 Payload에서 서버에 전달된 실제 데이터 확인.

### 주요 진단 포인트

| 로그 태그 | 확인 사항 |
|-----------|----------|
| `[OFFSET]` | 서버 시간 오프셋, 샘플 성공/실패 수 |
| `[WARMUP]` | API RTT 중앙값 |
| `[CAPTCHA]` | 캡챠 필요 여부, 검증 결과 |
| `[PREFETCH]` | sessionKey 획득 소요 시간 |
| `[QUEUE]` | NetFunnel 응답 코드 (200/201/300/301/302) |
| `[SUBMIT]` | 최종 폼 payload |

---

## 트러블슈팅

### "Extension context invalidated"

**원인:** Extension을 리로드한 후 페이지를 새로고침하지 않음.

**해결:** 페이지 **F5 새로고침** 후 다시 시도.

### "잘못된 접근입니다" (팝업 창)

**가능한 원인:**
1. 상품이 현재 **판매 기간이 아님** (가장 흔한 원인)
2. 멜론 **로그인 만료** → 재로그인 후 시도
3. `prodId` 또는 `scheduleNo`가 올바르지 않음

**확인 방법:** 멜론 사이트에서 해당 상품의 "예매하기" 버튼을 직접 클릭하여 정상 예매가 가능한 상태인지 확인.

### 캡챠 이미지가 표시되지 않음

**가능한 원인:**
1. Content Script가 로드되지 않음 → 페이지 새로고침
2. 네트워크 오류 → Service Worker 콘솔에서 `[CAPTCHA]` 로그 확인
3. 상품이 캡챠를 요구하지 않는 경우 → 정상 (자동 skip)

**해결:** 새로고침 버튼 클릭 또는 페이지 F5 후 다시 ARM.

### 캡챠 검증 실패 반복

**원인:** 입력값이 잘못되었거나 이미지가 불명확함.

**해결:** 새로고침 버튼으로 새 이미지를 요청하여 더 명확한 이미지로 재시도.

### Service Worker가 종료됨

MV3의 30초 유휴 종료 제약. Extension은 다음으로 대응:
- `chrome.alarms`로 T-60초에 wakeup
- 25초마다 keepalive (storage 접근)
- SW 재시작 시 상태 자동 복구

### 팝업 창이 차단됨

READY 버튼을 **반드시 클릭**해야 합니다. 사용자 제스처 없이 `window.open()`은 브라우저가 차단합니다.

### NetFunnel 응답 코드

| 코드 | 의미 | 처리 |
|------|------|------|
| 200 | 즉시 진입 | 폼 제출 |
| 201 | 대기 필요 | 자동 폴링 → 통과 후 제출 |
| 300 | 서버 바이패스 | 폼 제출 |
| 301 | 서버 차단 | 에러 표시 |
| 302 | IP 차단 | 에러 표시 |

---

## 주의사항

- **한 번에 하나의 상품만** 예매 가능 (동시 실행 X)
- Extension 리로드 후 **반드시 상품 페이지 새로고침**
- READY 버튼은 **발사 5초 전** 표시 → 빠르게 클릭
- ts.wseq 요청은 **hedging 하지 않음** (복수 요청 시 IP 차단 위험)
- pre-fetch 실패 시 자동으로 **기존 방식(AMD 모듈) fallback** 실행

---

## 폼 필드 매핑 참조

### ST0001 (일반예매)

| 폼 필드 | 값 |
|---------|----|
| `prodId` | 상품 ID |
| `pocCode` | `SC0002` |
| `scheduleNo` | 회차 번호 |
| `sellTypeCode` | `ST0001` |
| `tYn` | `Y` 또는 `N` (trafficCtrlYn) |
| `chk` | `encodeURIComponent(sessionKey)` |
| `netfunnel_key` | tYn=Y일 때만: `:key={key}&` |
| `sellCondNo` | 설정하지 않음 (빈 값) |

### ST0002 (선예매)

| 폼 필드 | 값 |
|---------|----|
| 위 모든 필드 | 동일 |
| `sellCondNo` | `0` |
