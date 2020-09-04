var eConfigConnues;
(function (eConfigConnues) {
    eConfigConnues[eConfigConnues["Nanie"] = 0] = "Nanie";
    eConfigConnues[eConfigConnues["Paps"] = 1] = "Paps";
})(eConfigConnues || (eConfigConnues = {}));
var cConfigs = /** @class */ (function () {
    function cConfigs() {
    }
    cConfigs.ajaxWSURL = function () {
        return cConfigs._ajaxWSURL[cConfigs._currentConfig];
    };
    cConfigs._currentConfig = eConfigConnues.Nanie;
    cConfigs._ajaxWSURL = [
        'http://localhost/nanie/server/WS/BRIWS.php',
        'http://localhost:88/nanie/server/WS/BRIWS.php' /* Paps */
    ];
    return cConfigs;
}());
export { cConfigs };
//# sourceMappingURL=cConfigs.js.map