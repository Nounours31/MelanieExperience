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
import { cExperience } from './Services/DB/cExperience';
import cMyUI from './cMyUI';
import encoderMd5 from 'crypto-js';
var cMyUI_login = /** @class */ (function (_super) {
    __extends(cMyUI_login, _super);
    function cMyUI_login() {
        var _this = _super.call(this, 'cMyUI_login') || this;
        _this._idLoggonButton = 'Login_idLoginButton';
        _this._idInputemail = 'Login_idNameInput';
        _this._idInputpwd = 'Login_idPWDInput';
        _this._idLoginDivForMessageInfo = 'Login_idMessage';
        return _this;
    }
    cMyUI_login.prototype.addCallBackOnMyDialog = function () {
        $('#root').addClass('login');
        var me = this;
        $("#" + me._idLoggonButton).on('click', function (event) {
            var emailOralias = $("#" + me._idInputemail).val();
            var type = 'email';
            if (!emailOralias.includes('@')) {
                type = 'alias';
            }
            var pwdDB = cExperience.getMd5PasswdFromMailorAlias(emailOralias, type);
            var pwdLu = $("#" + me._idInputpwd).val();
            var pwdLuX = encoderMd5.MD5(pwdLu);
            pwdLu = pwdLuX.toString();
            if ((pwdDB != null) && (pwdDB == pwdLu)) {
                var rc = cExperience.setLogin(emailOralias, type);
            }
            event.stopImmediatePropagation;
            var y = window.location;
            y.reload(true);
            return false;
        });
        this.addCallBackOnMessage(this._idLoginDivForMessageInfo);
    };
    cMyUI_login.prototype.draw = function () {
        var retour = "\n            <div class=\"ui middle aligned center aligned grid login\">\n                <div class=\"column login\">\n                    <h2 class=\"ui image header login\">\n                        <img src=\"images/login.png\" style=\"border-radius: 8px;\n                                    object-position: center;\n                                    height: auto;\n                                    display: block;\n                                    margin-left: auto;\n                                    margin-right: auto;\n                                    width: 50%;\" />\n                        <div class=\"content\">\n                            Se connecter\n                        </div>\n                    </h2>\n                    <form action=\"\" method=\"get\" class=\"ui large form\">\n                    <div class=\"ui  secondary  segment\">\n                        <div class=\"field\">\n                        <div class=\"ui left icon input\">\n                            <i class=\"user icon\"></i>\n                            <input type=\"text\" name=\"email\" placeholder=\"E-mail address\" required id=\"" + this._idInputemail + "\">\n                        </div>\n                        </div>\n                        <div class=\"field\">\n                        <div class=\"ui left icon input\">\n                            <i class=\"lock icon\"></i>\n                            <input type=\"password\" name=\"password\" placeholder=\"Password\" required id=\"" + this._idInputpwd + "\">\n                        </div>\n                        </div>\n                        <div class=\"ui fluid large teal submit button\" id=\"" + this._idLoggonButton + "\">Login</div>\n                    </div>\n\n                    <div class=\"error message\"></div>\n\n                    </form>\n\n                    <div class=\"ui message\">\n                        Pour s'enregistrer voir Nanie <a href=\"?inscription\" target=\"_blank\">Comptes</a>\n                    </div>\n\n                    <!-- Zone a message  -->\n                    <div id=\"" + this._idLoginDivForMessageInfo + "\"></div>\n    \n                </div>\n            </div>\n            <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>\n\n        ";
        return retour;
    };
    return cMyUI_login;
}(cMyUI));
export default cMyUI_login;
//# sourceMappingURL=cMyUI_login.js.map