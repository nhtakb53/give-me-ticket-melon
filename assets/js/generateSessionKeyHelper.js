/**
 * 멜론 티켓 사이트에서 generateSessionKey 함수를 콘솔에서 실행하는 도우미 스크립트
 * 실제 사이트: https://ticket.melon.com/performance/index.htm?prodId=212046
 */

(function() {
    'use strict';

    console.log('🎫 멜론 티켓 generateSessionKey 실행 도우미');
    console.log('=====================================');

    /**
     * generateSessionKey 함수를 실행하는 헬퍼 함수
     * @param {Object} params - 함수에 전달할 파라미터
     */
    function executeGenerateSessionKey(params) {
        console.log('🚀 generateSessionKey 실행 시작...');
        console.log('전달된 파라미터:', params);

        // 기본 파라미터 설정
        const defaultParams = {
            prodId: '212046', // 현재 페이지의 상품 ID
            scheduleNo: 100001, // 선택된 회차 번호 (선택사항)
            v: 1
        };

        const finalParams = Object.assign({}, defaultParams, params);
        console.log('최종 파라미터:', finalParams);

        // AMD 모듈 시스템을 통해 함수 접근 시도
        if (typeof require !== 'undefined') {
            try {
                require(['js/app/performance/service/reservationCommonService'], function(reservationCommonService) {
                    console.log('✅ reservationCommonService 모듈 로드 성공');
                    
                    const promise = reservationCommonService.service.generateSessionKey(finalParams);
                    
                    promise.then(function(result) {
                        console.log('✅ generateSessionKey 성공!');
                        console.log('결과:', result);
                        
                        // 결과 분석
                        if (result) {
                            console.log('📊 결과 분석:');
                            console.log('- 세션키:', result.sessionKey);
                            console.log('- 트래픽 제어 여부:', result.trafficCtrlYn);
                            console.log('- 넷퍼넬 액션 ID:', result.nf_action_id);
                            console.log('- 스케줄 번호:', result.scheduleNo);
                        }
                    }).catch(function(error) {
                        console.error('❌ generateSessionKey 실패:', error);
                    });
                });
            } catch (error) {
                console.error('❌ 모듈 로드 실패:', error);
                console.log('💡 대안 방법을 시도합니다...');
                tryAlternativeMethod(finalParams);
            }
        } else {
            console.log('💡 require 함수가 없습니다. 대안 방법을 시도합니다...');
            tryAlternativeMethod(finalParams);
        }
    }

    /**
     * 대안 방법: 전역 객체를 통한 접근
     */
    function tryAlternativeMethod(params) {
        console.log('🔄 대안 방법 시도 중...');

        // 전역 객체에서 함수 찾기
        const possiblePaths = [
            'window.reservationCommonService',
            'window.reservationCommonService.service',
            'window.reservationCommonService.service.generateSessionKey',
            'window.melon.reservationCommonService',
            'window.melon.reservationCommonService.service',
            'window.melon.reservationCommonService.service.generateSessionKey'
        ];

        let foundFunction = null;
        let foundPath = '';

        for (const path of possiblePaths) {
            try {
                const func = eval(path);
                if (typeof func === 'function') {
                    foundFunction = func;
                    foundPath = path;
                    break;
                }
            } catch (e) {
                // 무시
            }
        }

        if (foundFunction) {
            console.log(`✅ 함수 발견: ${foundPath}`);
            try {
                const promise = foundFunction(params);
                if (promise && typeof promise.then === 'function') {
                    promise.then(function(result) {
                        console.log('✅ generateSessionKey 성공!');
                        console.log('결과:', result);
                    }).catch(function(error) {
                        console.error('❌ generateSessionKey 실패:', error);
                    });
                } else {
                    console.log('결과:', promise);
                }
            } catch (error) {
                console.error('❌ 함수 실행 실패:', error);
            }
        } else {
            console.log('❌ generateSessionKey 함수를 찾을 수 없습니다.');
            console.log('💡 수동으로 함수를 찾아보세요:');
            console.log('1. 브라우저 개발자 도구의 Sources 탭에서 js/app/performance/service/reservationCommonService 파일 찾기');
            console.log('2. 해당 파일에서 generateSessionKey 함수 확인');
            console.log('3. 함수가 정의된 모듈의 전역 참조 찾기');
            
            // 디버깅 정보 제공
            provideDebuggingInfo();
        }
    }

    /**
     * 디버깅 정보 제공
     */
    function provideDebuggingInfo() {
        console.log('🔍 디버깅 정보:');
        console.log('- 현재 URL:', window.location.href);
        console.log('- 상품 ID:', window.location.search.match(/prodId=(\d+)/)?.[1] || '없음');
        
        // 전역 객체들 확인
        console.log('- 사용 가능한 전역 객체들:');
        const globalObjects = ['melon', 'commonUtil', 'commonCode', 'commonDomain', 'reservationCommonService'];
        globalObjects.forEach(obj => {
            if (window[obj]) {
                console.log(`  ✅ window.${obj} 존재`);
            } else {
                console.log(`  ❌ window.${obj} 없음`);
            }
        });

        // AMD 모듈 시스템 확인
        if (typeof require !== 'undefined') {
            console.log('- AMD 모듈 시스템 사용 중');
            console.log('- 사용 가능한 모듈들:', Object.keys(require.cache || {}));
        } else {
            console.log('- AMD 모듈 시스템 없음');
        }
    }

    /**
     * 직접 API 호출 방법
     */
    function directApiCall(params) {
        console.log('🌐 직접 API 호출 시도...');
        
        const apiUrl = 'https://tktapi.melon.com/api/product/prodKey.json';
        const requestData = {
            prodId: params.prodId,
            scheduleNo: params.scheduleNo,
            v: params.v
        };

        console.log('API URL:', apiUrl);
        console.log('요청 데이터:', requestData);

        // Fetch API 사용
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestData),
            credentials: 'include' // 쿠키 포함
        })
        .then(response => {
            console.log('응답 상태:', response.status);
            return response.json();
        })
        .then(data => {
            console.log('✅ API 호출 성공!');
            console.log('응답 데이터:', data);
        })
        .catch(error => {
            console.error('❌ API 호출 실패:', error);
        });
    }

    // 전역 함수로 등록
    window.executeGenerateSessionKey = executeGenerateSessionKey;
    window.directApiCall = directApiCall;

    // 사용법 안내
    console.log('📖 사용법:');
    console.log('1. 기본 실행:');
    console.log('   executeGenerateSessionKey({})');
    console.log('');
    console.log('2. 특정 상품 ID로 실행:');
    console.log('   executeGenerateSessionKey({ prodId: "212046" })');
    console.log('');
    console.log('3. 회차 번호 포함 실행:');
    console.log('   executeGenerateSessionKey({ prodId: "212046", scheduleNo: 1 })');
    console.log('');
    console.log('4. 직접 API 호출:');
    console.log('   directApiCall({ prodId: "212046", scheduleNo: 1, v: 1 })');
    console.log('');
    console.log('5. 현재 페이지 상품 ID 자동 감지:');
    const currentProdId = window.location.search.match(/prodId=(\d+)/)?.[1];
    if (currentProdId) {
        console.log(`   executeGenerateSessionKey({ prodId: "${currentProdId}" })`);
    }

    // 자동 실행 (선택사항)
    if (window.location.search.includes('autogenerate=true')) {
        console.log('🚀 자동 실행 모드');
        setTimeout(() => {
            executeGenerateSessionKey({});
        }, 2000);
    }

})();
