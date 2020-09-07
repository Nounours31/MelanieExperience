var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import cMyUI from './cMyUI';
import cEnvt from './infra/cEnvt';
var cMyUI_logout = /** @class */ (function (_super) {
    __extends(cMyUI_logout, _super);
    function cMyUI_logout() {
        return _super.call(this, 'cMyUI_logout') || this;
    }
    cMyUI_logout.prototype.addCallBackOnMyDialog = function () {
    };
    cMyUI_logout.prototype.draw = function () {
        var x = localStorage;
        x.removeItem(cEnvt._tokenName);
        var y = window.location;
        y.reload(true);
        var retour = "Pas encore code";
        return retour;
    };
    return cMyUI_logout;
}(cMyUI));
export default cMyUI_logout;
//# sourceMappingURL=cMyUI_logout.js.map