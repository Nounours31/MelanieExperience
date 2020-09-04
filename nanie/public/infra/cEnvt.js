import { eLoggerLevel } from './cLogger';
import { cConfigs } from './cConfigs';
var cEnvt = /** @class */ (function () {
    function cEnvt() {
    }
    cEnvt.getDebugLevel = function () {
        return cEnvt._debugLevel;
    };
    cEnvt.getAjaxURLWS = function () {
        var x = window.location.origin;
        return (x + cEnvt._ajaxWSURL);
    };
    cEnvt._debugLevel = eLoggerLevel.Debug;
    cEnvt._ajaxWSURL = cConfigs.ajaxWSURL();
    return cEnvt;
}());
export default cEnvt;
//# sourceMappingURL=cEnvt.js.map