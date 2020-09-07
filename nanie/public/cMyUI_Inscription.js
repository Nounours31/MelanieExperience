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
var cMyUI_Inscription = /** @class */ (function (_super) {
    __extends(cMyUI_Inscription, _super);
    function cMyUI_Inscription() {
        var _this = _super.call(this, 'cMyUI_Inscription') || this;
        _this._idLoggonButton = 'inscription_idinscriptionButton';
        _this._idInputemail = 'inscription_idNameInput';
        _this._idInputAlias = 'inscription_idNameInput';
        _this._idInputpwd1 = 'inscription_idPWDInput';
        _this._idInputpwd2 = 'inscription_idPWDInput';
        return _this;
    }
    cMyUI_Inscription.prototype.addCallBackOnMyDialog = function () {
        $('#root').addClass('inscription');
        var me = this;
        $("#" + me._idLoggonButton).on('click', function (event) {
            var emailOralias = $("#" + me._idInputemail).val();
            var type = 'email';
            if (!emailOralias.includes('@')) {
                type = 'alias';
            }
            var pwdDB = cExperience.getMd5PasswdFromMailorAlias(emailOralias, type);
            var pwdLu1 = $("#" + me._idInputpwd1).val();
            var pwdLu2 = $("#" + me._idInputpwd2).val();
            event.stopImmediatePropagation;
            return false;
        });
    };
    cMyUI_Inscription.prototype.draw = function () {
        var retour = "\n            <div class=\"ui middle aligned center aligned grid inscription\">\n                <div class=\"column inscription\">\n                    <h2 class=\"ui image header inscription\">\n                        <div class=\"content\">\n                            Inscription\n                        </div>\n                    </h2>\n                    <form action=\"\" method=\"get\" class=\"ui large form\">\n                    <div class=\"ui  secondary  segment\">\n                        <div class=\"field\">\n                            <div class=\"ui left icon input\">\n                                <i class=\"user icon\"></i>\n                                <input type=\"text\" name=\"alias\" placeholder=\"alias\" id=\"" + this._idInputAlias + "\">\n                            </div>\n                        </div>\n                        <div class=\"field\">\n                            <div class=\"ui left icon input\">\n                                <i class=\"user icon\"></i>\n                                <input type=\"text\" name=\"email\" placeholder=\"E-mail address\" required id=\"" + this._idInputemail + "\">\n                            </div>\n                        </div>\n                        <div class=\"field\">\n                            <div class=\"ui left icon input\">\n                                <i class=\"lock icon\"></i>\n                                <input type=\"password\" name=\"password1\" placeholder=\"Password1\" required id=\"" + this._idInputpwd1 + "\">\n                            </div>\n                        </div>\n                        <div class=\"field\">\n                            <div class=\"ui left icon input\">\n                                <i class=\"lock icon\"></i>\n                                <input type=\"password\" name=\"password2\" placeholder=\"Password2\" required id=\"" + this._idInputpwd2 + "\">\n                            </div>\n                        </div>\n\n                        <div class=\"field\">\n                            <div class=\"ui left icon input\">\n                                <i class=\"lock icon\"></i>\n                                <input type=\"password\" name=\"password2\" placeholder=\"Password2\" required id=\"" + this._idInputpwd2 + "\"/>\n                                <i class=\"asterisk icon\"></i>\n                            </div>\n                        </div>\n\n                        <div class=\"ui fluid large teal submit button\" id=\"" + this._idLoggonButton + "\">inscription</div>\n                    </div>\n\n                    <div class=\"error message\"></div>\n\n                    </form>\n                </div>\n            </div>\n            <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>\n\n        ";
        return retour;
    };
    return cMyUI_Inscription;
}(cMyUI));
export default cMyUI_Inscription;
//# sourceMappingURL=cMyUI_Inscription.js.map