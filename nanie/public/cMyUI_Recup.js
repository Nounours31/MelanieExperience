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
var cMyUI_Recup = /** @class */ (function (_super) {
    __extends(cMyUI_Recup, _super);
    function cMyUI_Recup() {
        var _this = _super.call(this, 'cMyUI_Recup') || this;
        _this._idLoggonButton = 'recup_idrecupButton';
        _this._idInputemail = 'recup_idNameInput';
        _this._idInputAlias = 'recup_idAliasInput';
        _this._idInputpwd1 = 'recup_idPWD1Input';
        _this._idInputpwd2 = 'recup_idPWD2Input';
        _this._idInputShowPwd = 'recup_idPWDShow';
        _this._idMessageInfo = 'recup_idMessageInfo';
        _this._idInputNom = 'recup_idNomInfo';
        return _this;
    }
    cMyUI_Recup.prototype.addCallBackOnMyDialog = function () {
        var me = this;
        // ------------------------------------------------------------------------------
        // pour l'UI sinon c'est moche
        // ------------------------------------------------------------------------------
        $('#root').addClass('recup');
        // ------------------------------------------------------------------------------
        // Creation de la personne
        // ------------------------------------------------------------------------------
        $("#" + me._idLoggonButton).on('click', function (event) {
            var nom = $("#" + me._idInputNom).val();
            var alias = $("#" + me._idInputAlias).val();
            var email = $("#" + me._idInputemail).val();
            var pwd1 = $("#" + me._idInputpwd1).val();
            var pwd2 = $("#" + me._idInputpwd2).val();
            var mode = me.getArg('mode');
            if (mode == 'navigo') {
                // ------------------------------
                // checks
                // ------------------------------
                // pwd
                var onErrorMessage = "<div class=\"ui negative message\"><i class=\"close icon\"></i>";
                if ((pwd1 != pwd2) || (pwd1 == null) || (pwd1 == undefined) || (pwd1.length < 1)) {
                    onErrorMessage += "<div class=\"header\"> Mot de passe </div> <p> mot de passe differents ou indefinis </p>";
                    onErrorMessage += "</div>";
                    $("#" + me._idMessageInfo).append(onErrorMessage);
                    me.addCallBackOnMessage(me._idMessageInfo);
                }
                else {
                    // mise a jour du mot de passe
                    cExperience.updatePwd(me.getArg('recup_token'), pwd1);
                    var y = window.location;
                    y.reload(true);
                }
            }
            else {
                var nom_1 = $("#" + me._idInputNom).val();
                var alias_1 = $("#" + me._idInputAlias).val();
                var email_1 = $("#" + me._idInputemail).val();
                var isOK = false;
                if ((nom_1 != null) && (nom_1 != undefined) && (nom_1.length > 1)) {
                    isOK = true;
                }
                else {
                    nom_1 = null;
                }
                if ((alias_1 != null) && (alias_1 != undefined) && (alias_1.length > 1)) {
                    isOK = true;
                }
                else {
                    alias_1 = null;
                }
                if ((email_1 != null) && (email_1 != undefined) && (email_1.length > 1)) {
                    isOK = true;
                }
                else {
                    email_1 = null;
                }
                if (!isOK) {
                    var onErrorMessage = "<div class=\"ui negative message\"><i class=\"close icon\"></i>";
                    onErrorMessage += "<div class=\"header\"> Identifiant </div> <p> Il faut au moins un des 3 champs rempli pour identifier la personne </p>";
                    onErrorMessage += "</div>";
                    $("#" + me._idMessageInfo).append(onErrorMessage);
                    me.addCallBackOnMessage(me._idMessageInfo);
                }
                else {
                    cExperience.sendTokenForPasswordLost(nom_1, alias_1, email_1);
                    var y = window.location;
                    y.reload(true);
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
    };
    cMyUI_Recup.prototype.draw = function () {
        var retour = '';
        var recup_token = this.getArg('recup_token');
        if (recup_token == '') {
            retour = "\n                <div class=\"ui middle aligned center aligned grid recup\">\n                    <div class=\"column recup\">\n                        <h2 class=\"ui image header recup\">\n                            <div class=\"content\">\n                                Un mail lie au compte sera envoy&eamp;\n                            </div>\n                        </h2>\n                        <form action=\"\" method=\"get\" class=\"ui large form\">\n                            <div class=\"ui  secondary  segment\">\n                                <div class=\"field\">\n                                    <div class=\"ui labeled input\">\n                                        <div class=\"ui label\">\n                                            Nom\n                                        </div>\n                                        <input type=\"text\" class=\"my_recup_input\" name=\"nom\" placeholder=\"nom\" id=\"" + this._idInputNom + "\">\n                                    </div>\n                                </div>\n                                <div class=\"ui horizontal divider\">\n                                Ou\n                                </div>\n                                <div class=\"field\">\n                                    <div class=\"ui labeled input\">\n                                        <div class=\"ui label\">\n                                            Alias de login (optionel)\n                                        </div>\n                                        <input type=\"text\" class=\"my_recup_input\" name=\"alias\" placeholder=\"alias\" id=\"" + this._idInputAlias + "\">\n                                    </div>\n                                </div>\n                                <div class=\"ui horizontal divider\">\n                                Ou\n                                </div>\n                                <div class=\"field\">\n                                    <div class=\"ui labeled input\">\n                                        <div class=\"ui label\">\n                                            EMail\n                                        </div>\n                                        <input type=\"text\" class=\"my_recup_input\" name=\"email\" placeholder=\"E-mail address\" required id=\"" + this._idInputemail + "\">\n                                    </div>\n                                </div>\n\n                                <div class=\"ui fluid large teal submit button\" id=\"" + this._idLoggonButton + "\">recup</div>\n                            </div>\n                            <div id=\"" + this._idMessageInfo + "\"></div>\n                        </form>\n                    </div>\n                </div>\n                <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>\n            ";
        }
        else {
            retour = "\n                <div class=\"ui middle aligned center aligned grid recup\">\n                    <div class=\"column recup\">\n                        <h2 class=\"ui image header recup\">\n                            <div class=\"content\">\n                                Nouveau mot de passe\n                            </div>\n                        </h2>\n                        <form action=\"\" method=\"get\" class=\"ui large form\">\n                            <div class=\"ui  secondary  segment\">\n                            <div class=\"field\">\n                                <div class=\"ui labeled input\">\n                                    <div class=\"ui label\">\n                                        Mot de passe\n                                    </div>\n                                    <input type=\"password\" class=\"my_pwd_input my_inscription_input\" name=\"password1\" placeholder=\"Password1\" required id=\"" + this._idInputpwd1 + "\">\n                                </div>\n                            </div>\n                            <div class=\"field\">\n                                <div class=\"ui labeled input\">\n                                    <div class=\"ui label\">\n                                        Mot de passe (verif)\n                                    </div>\n                                    <input type=\"password\" class=\"my_pwd_input my_inscription_input\" name=\"password2\" placeholder=\"Password2\" required id=\"" + this._idInputpwd2 + "\">\n                                </div>\n                            </div>\n                            <div class=\"field\">\n                                <div class=\"ui checkbox\">\n                                    <input type=\"checkbox\" name=\"showpassword\" id=\"" + this._idInputShowPwd + "\">\n                                    <label>Voir les mots de passe</label>\n                                </div>\n                            </div>\n                            <div class=\"ui fluid large teal submit button\" id=\"" + this._idLoggonButton + "\">Mise a jour mot de passe</div>\n                            </div>\n                            <div id=\"" + this._idMessageInfo + "\"></div>\n                        </form>\n                    </div>\n                </div>\n                <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>\n            ";
        }
        return retour;
    };
    return cMyUI_Recup;
}(cMyUI));
export default cMyUI_Recup;
//# sourceMappingURL=cMyUI_Recup.js.map