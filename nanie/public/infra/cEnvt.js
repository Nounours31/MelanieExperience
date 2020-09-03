import { eLoggerLevel } from './cLogger';
var cEnvt = /** @class */ (function () {
    function cEnvt() {
    }
    cEnvt.getDebugLevel = function () {
        return cEnvt._debugLevel;
    };
    cEnvt.getAjaxURLWS = function () {
        return cEnvt._ajaxWSURL;
    };
    cEnvt._debugLevel = eLoggerLevel.Debug;
    cEnvt._ajaxWSURL = 'http://localhost:88/nanie/server/WS/BRIWS.php';
    return cEnvt;
}());
export default cEnvt;
//# sourceMappingURL=cEnvt.js.map