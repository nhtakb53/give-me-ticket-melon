/**
 * 서버환경에 따른 도메인 변환 유틸
 * @type {{convertUrl: _convertUrl}}
 */
var DeployPhaseUtils = (function() {

    /**
     * Prefix
     * @type {string}
     * @private
     */
    var _PREFIX = location.hostname.substr(0, location.hostname.indexOf('-') + 1);

    /**
     * server mode
     * @type {string}
     * @private
     */
    var _SERVER_MODE = location.hostname.substr(0, location.hostname.indexOf('-')).toLowerCase();

    /**
     * phase_domain.yaml 데이터
     * @type {{}}
     * @private
     */
    var _PHASE_DOMAINS = JSON.parse(localStorage.getItem('phaseDomains')) || {};

    var _isSandbox = _SERVER_MODE == 'sandbox';
    var _isCbt = _SERVER_MODE == 'cbt';
    var _isRelease = _SERVER_MODE == 'release';
    var _isProd = !_SERVER_MODE;

    /**
     * phase_domain.yaml 조회
     * @private
     */
    _getPhaseDomains = function() {

        // 운영환경일 경우
        if (!_SERVER_MODE) {
            return;
        }

        var request = new XMLHttpRequest();
        var poc = "pc"
        var url = 'https://' + _PREFIX + 'tktapi.melon.com/phase/phaseDomains.json?poc=' + poc;
        request.open('GET', url, true);

        request.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 400) {
                    // Success!
                    var res = JSON.parse(this.responseText);
                    if(res.result == 0) {
                        localStorage.setItem('phaseDomains', JSON.stringify(res.data));
                        _PHASE_DOMAINS = res.data;
                    } else {
                        console.log('getPhaseDomains ERROR!!!', 'result: 1');
                    }
                } else {
                    console.log('getPhaseDomains Network ERROR!!!');
                }
            }
        };

        request.send();
        request = null;
    };

    /**
     * convert url
     * @param url
     * @returns {void|string|*}
     * @private
     */
    _convertUrl = function(url) {
        try {
            if ( !url ) {
                return url;
            }

            if (_SERVER_MODE) {
                var domain = url
                    .replace(/h?t?t?p?s?:?\/\//gi, '')
                    .split('/')[0];

                if (!(_PHASE_DOMAINS[domain] && _PHASE_DOMAINS[domain][_SERVER_MODE])) {
                    return url;
                }

                var rtnDomain = _PHASE_DOMAINS[domain][_SERVER_MODE];
                return url.replace(domain, rtnDomain);
            }

            return url;
        } catch (e) {
            console.log(e);
            return url;
        }
    };

    /**
     * init
     * @private
     */
    _init = function() {
        this._getPhaseDomains();
    };

    _init();

    return {
        convertUrl: _convertUrl,
        isSandbox: _isSandbox,
        isCbt: _isCbt,
        isRelease: _isRelease,
        isProd: _isProd
    }
})();