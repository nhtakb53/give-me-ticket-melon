# Give Me Ticket Melon

멜론 티켓 예매 최적화 도구 모음입니다. 콘솔 스크립트(v1~v3)와 Chrome Extension 두 가지 방식을 제공합니다.

## 주의사항

- 이 도구는 교육 및 연구 목적으로만 사용되어야 합니다
- 실제 티켓 예매 시에는 멜론 티켓의 이용약관을 준수해야 합니다
- 부정한 방법으로 예매하는 것은 금지되어 있으며, 계정 제재를 받을 수 있습니다
- 사용자는 본인의 책임 하에 사용해야 합니다

## 프로젝트 구조

```
give-me-ticket-melon/
├── melon-ticket-ext/          # Chrome Extension (MV3) — 권장
│   ├── manifest.json
│   ├── background.js          # Service Worker (핵심 로직)
│   ├── content.js             # Content Script (DOM + 폼 제출)
│   ├── popup.html / popup.js  # 설정 팝업 UI
│   └── GUIDE.md               # Extension 사용 가이드
├── scripts/                   # 콘솔 스크립트
│   ├── melon.js               # v1 — 기본 자동화
│   ├── melon_v2.js            # v2 — 재시도 로직 추가
│   └── melon_v3.js            # v3 — sessionKey pre-fetch + hedging
├── assets/                    # 멜론 티켓 사이트 리소스 (참고용)
├── build.sh                   # 빌드 스크립트
└── README.md
```

## 방식 비교

| 항목 | v3 콘솔 스크립트 | Chrome Extension |
|------|-------------------|------------------|
| NetFunnel 진입 | JSONP `<script>` 태그 (~5-10ms) | 직접 `fetch` (~1-2ms) |
| 탭 스로틀링 | 백그라운드 탭 시 setTimeout 4ms+ | Service Worker — 영향 없음 |
| 페이지 새로고침 | 스크립트 소멸 | Service Worker 자동 복구 |
| CORS | JSONP 강제 | `host_permissions`로 우회 |
| 캡챠 지원 | X | O (자동 감지 + UI 제공) |
| 총 오버헤드 | ~12-31ms | ~1-2ms |

---

## Chrome Extension (권장)

직접 NetFunnel 프로토콜을 구현하여 최소 오버헤드로 예매를 실행합니다. Service Worker에서 동작하므로 탭 스로틀링 영향이 없습니다.

자세한 설치 및 사용법은 **[melon-ticket-ext/GUIDE.md](melon-ticket-ext/GUIDE.md)** 를 참고하세요.

### 주요 기능

- 서버 시간 동기화 (30회 측정, 중앙값)
- sessionKey pre-fetch (Promise.any hedging)
- 커넥션 워밍업 (TCP/TLS)
- 캡챠 자동 감지 및 입력 UI
- NetFunnel 대기열 직접 진입/폴링
- 예매 폼 자동 제출

### 빠른 시작

1. `chrome://extensions` → 개발자 모드 ON → `melon-ticket-ext` 폴더 로드
2. 멜론 티켓 사이트 로그인
3. 상품 페이지 이동 → Extension 팝업에서 설정 입력
4. **시작 (ARM)** 클릭 → 설정 시각에 자동 실행

---

## 콘솔 스크립트

브라우저 개발자 도구 콘솔에 직접 붙여넣어 실행하는 방식입니다.

### v1 (melon.js)

기본 자동화 스크립트. 서버 시간 동기화 후 설정 시각에 예매 요청을 실행합니다.

### v2 (melon_v2.js)

v1에 재시도 로직 추가. 네트워크 오류 시 최대 3회 재시도합니다.

### v3 (melon_v3.js)

sessionKey pre-fetch와 Promise.any hedging을 도입하여 발사 시점 오버헤드를 최소화합니다.

| 설정 | 기본값 | 설명 |
|------|--------|------|
| `enablePreFetch` | `true` | sessionKey 사전 획득 |
| `hedgeCount` | `3` | 병렬 sessionKey 요청 수 |
| `enableConnectionWarmup` | `true` | TCP/TLS 사전 연결 |
| `warmupCount` | `3` | 워밍업 요청 수 |

### 콘솔 스크립트 사용법

1. 멜론 티켓 사이트에 로그인
2. 예매할 상품 페이지로 이동
3. 브라우저 개발자 도구 열기 (F12)
4. 스크립트 상단의 `CONFIG` 객체에서 `prodId`, `scheduleNo`, `fireTime` 등 수정
5. Console 탭에 스크립트 내용 붙여넣기 + 실행

---

## 기술적 특징

### 서버 시간 동기화
- HTTP 헤더의 `Date` 필드를 이용한 서버 시간 측정
- RTT(Round Trip Time)를 고려한 보정
- 발사 직전 재보정으로 정확도 향상

### 정밀 타이밍 제어
- T-2s: `setTimeout(1ms)` 폴링
- T-10ms: busy-wait 스핀
- Extension: Service Worker에서 실행하여 탭 스로틀링 회피

### NetFunnel 프로토콜 (Extension)
- `opcode=5101` 대기열 진입
- `opcode=5002` 대기열 폴링
- 응답 코드: 200(즉시진입), 201(대기), 300(바이패스), 301/302(차단)

---

## 문제 해결

| 증상 | 원인 | 해결 |
|------|------|------|
| Extension context invalidated | Extension 리로드 후 페이지 미갱신 | 페이지 F5 새로고침 |
| "잘못된 접근입니다" | 판매 기간 아님 / 로그인 만료 / 잘못된 prodId | 멜론에서 직접 예매 가능 여부 확인 |
| Service Worker 종료 | MV3 30초 유휴 종료 | 자동 복구됨 (alarms + keepalive) |
| 팝업 창 차단 | READY 버튼 미클릭 | 발사 5초 전 READY 버튼 반드시 클릭 |

---

## 법적 고지

- 이 도구는 멜론 티켓의 공식 도구가 아닙니다
- 사용자는 멜론 티켓의 이용약관을 준수해야 합니다
- 부정한 예매 시도로 인한 계정 제재는 사용자의 책임입니다
- 개발자는 이 도구 사용으로 인한 모든 결과에 대해 책임지지 않습니다
