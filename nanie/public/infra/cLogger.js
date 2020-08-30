export var eLoggerLevel;
(function (eLoggerLevel) {
    eLoggerLevel[eLoggerLevel["All"] = 0] = "All";
    eLoggerLevel[eLoggerLevel["Debug"] = 50] = "Debug";
    eLoggerLevel[eLoggerLevel["Warning"] = 100] = "Warning";
    eLoggerLevel[eLoggerLevel["Error"] = 150] = "Error";
    eLoggerLevel[eLoggerLevel["Fatal"] = 200] = "Fatal";
})(eLoggerLevel || (eLoggerLevel = {}));
var cLogger = /** @class */ (function () {
    function cLogger(level, id) {
        if (id === void 0) { id = ''; }
        this._level = 0;
        this._level = level;
    }
    cLogger.prototype.All = function (msg) {
        this._log(msg, eLoggerLevel.All);
    };
    cLogger.prototype.Debug = function (msg) {
        this._log(msg, eLoggerLevel.Fatal);
    };
    cLogger.prototype.Warning = function (msg) {
        this._log(msg, eLoggerLevel.Fatal);
    };
    cLogger.prototype.Error = function (msg) {
        this._log(msg, eLoggerLevel.Fatal);
    };
    cLogger.prototype.Fatal = function (msg) {
        this._log(msg, eLoggerLevel.Fatal);
    };
    cLogger.prototype._log = function (msg, level) {
        if (level > this._level)
            console.log(msg);
    };
    return cLogger;
}());
export { cLogger };
//# sourceMappingURL=cLogger.js.map