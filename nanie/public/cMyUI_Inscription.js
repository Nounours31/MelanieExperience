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
var cMyUI_Inscription = /** @class */ (function (_super) {
    __extends(cMyUI_Inscription, _super);
    function cMyUI_Inscription() {
        var _this = _super.call(this, 'cMyUI_Inscription') || this;
        _this._idLoggonButton = 'inscription_idinscriptionButton';
        _this._idInputemail = 'inscription_idNameInput';
        _this._idInputAlias = 'inscription_idAliasInput';
        _this._idInputpwd1 = 'inscription_idPWD1Input';
        _this._idInputpwd2 = 'inscription_idPWD2Input';
        _this._idInputShowPwd = 'inscription_idPWDShow';
        _this._idMessageInfo = 'inscription_idMessageInfo';
        return _this;
    }
    cMyUI_Inscription.prototype.addCallBackOnMyDialog = function () {
        var me = this;
        // ------------------------------------------------------------------------------
        // pour l'UI sinon c'est moche
        // ------------------------------------------------------------------------------
        $('#root').addClass('inscription');
        // ------------------------------------------------------------------------------
        // Creation de la personne
        // ------------------------------------------------------------------------------
        $("#" + me._idLoggonButton).on('click', function (event) {
            var alias = $("#" + me._idInputAlias).val();
            var email = $("#" + me._idInputemail).val();
            var pwd1 = $("#" + me._idInputpwd1).val();
            var pwd2 = $("#" + me._idInputpwd2).val();
            if (pwd1 != pwd2) {
                var onErrorMessage = "<div class=\"ui negative message " + me._idMessageInfo + "\"><i class=\"close icon\"></i>";
                onErrorMessage += "<div class=\"header\"> Mot de passe </div> <p> mot de passe differents </p>";
                onErrorMessage += '</div>';
                $("#" + me._idMessageInfo).append(onErrorMessage);
                $('.my_inscription_input').each(function () {
                    $(this).val('');
                });
            }
            else {
                // -------------------------------------------------------------
                // est ce que cette alias / email existe en DB ?
                // -------------------------------------------------------------
                var exitInDb = cExperience.isUserExistInDB(alias, email);
                if (exitInDb) {
                    var onErrorMessage = "<div class=\"ui negative message " + me._idMessageInfo + "\"><i class=\"close icon\"></i>";
                    onErrorMessage += "<div class=\"header\"> User </div> <p> User existe deja en DB </p>";
                    onErrorMessage += '</div>';
                    $("#" + me._idMessageInfo).append(onErrorMessage);
                }
                else {
                    exitInDb = cExperience.createUserInDB(alias, email, encoderMd5.MD5(pwd1));
                    if (exitInDb) {
                        var onErrorMessage = "<div class=\"ui positive message " + me._idMessageInfo + "\"><i class=\"close icon\"></i>";
                        onErrorMessage += "<div class=\"header\"> User </div> <p> OK user creer en DB </p>";
                        onErrorMessage += '</div>';
                        $("#" + me._idMessageInfo).append(onErrorMessage);
                    }
                    else {
                        var onErrorMessage = "<div class=\"ui negative message " + me._idMessageInfo + "\"><i class=\"close icon\"></i>";
                        onErrorMessage += "<div class=\"header\"> User </div> <p> Impossible de creer ce user </p>";
                        onErrorMessage += '</div>';
                        $("#" + me._idMessageInfo).append(onErrorMessage);
                    }
                }
            }
            event.stopImmediatePropagation;
            return false;
        });
        // ------------------------------------------------------------------------------
        // call back pour voir les mot de passe
        // ------------------------------------------------------------------------------
        $("#" + me._idInputShowPwd).on('click', function (event) {
            var type = $("#" + me._idInputpwd1).attr('type');
            type = type.toLowerCase();
            if (type == 'text') {
                $('.my_pwd_input').attr('type', 'password');
            }
            else {
                $('.my_pwd_input').attr('type', 'text');
            }
            event.stopImmediatePropagation;
            return true;
        });
        // ------------------------------------------------------------------------------
        // call back pour fermer les messages
        // ------------------------------------------------------------------------------
        this.addCallBackOnMessage(this._idMessageInfo);
    };
    cMyUI_Inscription.prototype.draw = function () {
        var retour = "\n            <div class=\"ui middle aligned center aligned grid inscription\">\n                <div class=\"column inscription\">\n                    <h2 class=\"ui image header inscription\">\n                        <div class=\"content\">\n                            Inscription\n                        </div>\n                    </h2>\n                    <form action=\"\" method=\"get\" class=\"ui large form\">\n                    <div class=\"ui  secondary  segment\">\n                        <div class=\"field\">\n                            <div class=\"ui left icon input\">\n                                <i class=\"user icon\"></i>\n                                <input type=\"text\" class=\"my_inscription_input\" name=\"alias\" placeholder=\"alias\" id=\"" + this._idInputAlias + "\">\n                            </div>\n                        </div>\n                        <div class=\"field\">\n                            <div class=\"ui left icon input\">\n                                <i class=\"user icon\"></i>\n                                <input type=\"text\" class=\"my_inscription_input\" name=\"email\" placeholder=\"E-mail address\" required id=\"" + this._idInputemail + "\">\n                            </div>\n                        </div>\n                        <div class=\"field\">\n                            <div class=\"ui left icon input\">\n                                <i class=\"lock icon\"></i>\n                                <input type=\"password\" class=\"my_pwd_input my_inscription_input\" name=\"password1\" placeholder=\"Password1\" required id=\"" + this._idInputpwd1 + "\">\n                            </div>\n                        </div>\n                        <div class=\"field\">\n                            <div class=\"ui left icon input\">\n                                <i class=\"lock icon\"></i>\n                                <input type=\"password\" class=\"my_pwd_input my_inscription_input\" name=\"password2\" placeholder=\"Password2\" required id=\"" + this._idInputpwd2 + "\">\n                            </div>\n                        </div>\n                        <div class=\"field\">\n                            <div class=\"ui checkbox\">\n                                <input type=\"checkbox\" name=\"showpassword\" id=\"" + this._idInputShowPwd + "\">\n                                <label>Voir les mots de passe</label>\n                            </div>\n                        </div>\n\n\n                        <div class=\"ui fluid large teal submit button\" id=\"" + this._idLoggonButton + "\">inscription</div>\n                    </div>\n\n                    <div id=\"" + this._idMessageInfo + "\"></div>\n\n                    </form>\n                </div>\n            </div>\n            <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>\n\n        ";
        return retour;
    };
    return cMyUI_Inscription;
}(cMyUI));
export default cMyUI_Inscription;
//# sourceMappingURL=cMyUI_Inscription.js.map