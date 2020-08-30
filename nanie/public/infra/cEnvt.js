import { eLoggerLevel } from './cLogger';
var cEnvt = /** @class */ (function () {
    function cEnvt() {
    }
    cEnvt.getDebugLevel = function () {
        return this._debugLevel;
    };
    cEnvt._debugLevel = eLoggerLevel.Debug;
    return cEnvt;
}());
export default cEnvt;
//# sourceMappingURL=cEnvt.js.map