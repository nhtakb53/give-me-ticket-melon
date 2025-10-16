/**
 * 티켓 캡쳐/리플레이 시스템 데모
 * 실제 사용 예시를 보여주는 스크립트
 */
(function() {
    'use strict';

    // 페이지 로드 후 실행
    document.addEventListener('DOMContentLoaded', function() {
        console.log('티켓 캡쳐/리플레이 데모 시작');
        
        // 시스템이 로드될 때까지 대기
        setTimeout(function() {
            if (window.ticketCaptureReplay) {
                console.log('✅ 티켓 캡쳐/리플레이 시스템이 성공적으로 로드되었습니다.');
                console.log('사용 가능한 명령어:');
                console.log('- window.ticketCaptureReplay.startCapture() : 캡쳐 시작');
                console.log('- window.ticketCaptureReplay.stopCapture() : 캡쳐 중지');
                console.log('- window.ticketCaptureReplay.startReplay() : 리플레이 시작');
                console.log('- window.ticketCaptureReplay.stopReplay() : 리플레이 중지');
                console.log('- window.ticketCaptureReplay.exportData() : 데이터 내보내기');
                
                // 자동 데모 실행 (선택사항)
                if (window.location.search.includes('autodemo=true')) {
                    runAutoDemo();
                }
            } else {
                console.error('❌ 티켓 캡쳐/리플레이 시스템 로드 실패');
            }
        }, 2000);
    });

    /**
     * 자동 데모 실행
     */
    function runAutoDemo() {
        console.log('🚀 자동 데모를 시작합니다...');
        
        const system = window.ticketCaptureReplay;
        
        // 1. 캡쳐 시작
        console.log('1. 캡쳐 시작');
        system.startCapture();
        
        // 2. 예매하기 버튼 클릭 시뮬레이션
        setTimeout(function() {
            console.log('2. 예매하기 버튼 클릭 시뮬레이션');
            const ticketBtn = document.getElementById('ticketReservation_Btn');
            if (ticketBtn) {
                ticketBtn.click();
            } else {
                console.log('예매하기 버튼을 찾을 수 없습니다. 테스트용 버튼을 생성합니다.');
                createTestButton();
            }
        }, 1000);
        
        // 3. 추가 동작들
        setTimeout(function() {
            console.log('3. 추가 동작들 실행');
            simulateAdditionalActions();
        }, 2000);
        
        // 4. 캡쳐 중지
        setTimeout(function() {
            console.log('4. 캡쳐 중지');
            system.stopCapture();
            
            // 5. 리플레이 시작
            setTimeout(function() {
                console.log('5. 리플레이 시작');
                system.startReplay();
            }, 1000);
        }, 3000);
    }

    /**
     * 테스트용 버튼 생성
     */
    function createTestButton() {
        const testBtn = document.createElement('button');
        testBtn.id = 'ticketReservation_Btn';
        testBtn.textContent = '예매하기 (테스트)';
        testBtn.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 10px 20px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            z-index: 9999;
        `;
        
        testBtn.addEventListener('click', function() {
            console.log('테스트 예매하기 버튼 클릭됨');
            
            // AJAX 요청 시뮬레이션
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/test', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({ test: 'data' }));
            
            // DOM 조작 시뮬레이션
            const statusDiv = document.createElement('div');
            statusDiv.innerHTML = '<p>예매 처리 중...</p>';
            statusDiv.style.cssText = `
                position: fixed;
                top: 150px;
                right: 20px;
                background: #fff;
                border: 1px solid #ccc;
                padding: 10px;
                border-radius: 4px;
                z-index: 9999;
            `;
            document.body.appendChild(statusDiv);
            
            setTimeout(function() {
                statusDiv.innerHTML = '<p>예매 완료!</p>';
                statusDiv.style.background = '#d4edda';
            }, 2000);
        });
        
        document.body.appendChild(testBtn);
    }

    /**
     * 추가 동작들 시뮬레이션
     */
    function simulateAdditionalActions() {
        // 폼 제출 시뮬레이션
        const form = document.createElement('form');
        form.id = 'testForm';
        form.innerHTML = `
            <input type="hidden" name="prodId" value="212072">
            <input type="hidden" name="quantity" value="2">
        `;
        document.body.appendChild(form);
        
        setTimeout(function() {
            form.submit();
        }, 500);
        
        // DOM 조작 시뮬레이션
        setTimeout(function() {
            const container = document.createElement('div');
            container.id = 'testContainer';
            container.innerHTML = '<p>테스트 콘텐츠</p>';
            document.body.appendChild(container);
            
            container.setAttribute('data-test', 'value');
            container.innerHTML = '<p>수정된 콘텐츠</p>';
        }, 1000);
    }

    /**
     * 키보드 단축키 설정
     */
    document.addEventListener('keydown', function(event) {
        // Ctrl + Shift + C : 캡쳐 시작/중지
        if (event.ctrlKey && event.shiftKey && event.key === 'C') {
            event.preventDefault();
            const system = window.ticketCaptureReplay;
            if (system) {
                if (system.isCapturing) {
                    system.stopCapture();
                } else {
                    system.startCapture();
                }
            }
        }
        
        // Ctrl + Shift + R : 리플레이 시작/중지
        if (event.ctrlKey && event.shiftKey && event.key === 'R') {
            event.preventDefault();
            const system = window.ticketCaptureReplay;
            if (system) {
                if (system.isReplaying) {
                    system.stopReplay();
                } else {
                    system.startReplay();
                }
            }
        }
        
        // Ctrl + Shift + E : 데이터 내보내기
        if (event.ctrlKey && event.shiftKey && event.key === 'E') {
            event.preventDefault();
            const system = window.ticketCaptureReplay;
            if (system) {
                system.exportData();
            }
        }
    });

    console.log('🎹 키보드 단축키:');
    console.log('- Ctrl + Shift + C : 캡쳐 시작/중지');
    console.log('- Ctrl + Shift + R : 리플레이 시작/중지');
    console.log('- Ctrl + Shift + E : 데이터 내보내기');

})();
