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
import cExperience from './Services/DB/cExperience';
import cMyUI from './cMyUI';
var cMyUI_MainTab = /** @class */ (function (_super) {
    __extends(cMyUI_MainTab, _super);
    function cMyUI_MainTab() {
        var _this = _super.call(this, 'MainTab') || this;
        _this._idOKButton = 'SaisieExperience_OKButton';
        _this._idDateExp = 'SaisieExperience_DateExp';
        _this._idQui = 'SaisieExperience_Qui';
        _this._idFiles = 'SaisieExperience_Files';
        _this._idTabSaisie = 'tab-saisie';
        return _this;
    }
    cMyUI_MainTab.prototype.addCallBackOnMyDialog = function () {
        // activer les sementicUI du dialog
        $('.tabular.menu .item').tab();
        $('.ui.accordion').accordion();
        // choisir la tab par defaut
        // $('.ui .item').removeClass('active');
        // $(`#${this._idTabSaisie}`).addClass('active');
        var me = this;
        $("#" + this._idOKButton).click(function () {
            var date = $("#" + me._idDateExp).val();
            var qui = $("#" + me._idQui).val();
            var files = $("#" + me._idFiles).prop('files');
            var onError = false;
            var onErrorMessage = '<div class="ui negative message"><i class="close icon"></i>';
            if (date.length < 1) {
                onErrorMessage += "\n                        <div class=\"header\">\n                            Pb de date\n                        </div>\n                        <p> Il faut choisir une date </p>";
                onError = true;
            }
            if (files.length < 1) {
                onErrorMessage += "\n                        <div class=\"header\">\n                            Image\n                        </div>\n                        <p> Il faut choisir au moins une image </p>";
                onError = true;
            }
            onErrorMessage += '</div>';
            if (onError) {
                $("#MainTab_UI_Info").append(onErrorMessage);
                me.addCallBackOnMessage();
                return false;
            }
            return true;
        });
    };
    cMyUI_MainTab.prototype.draw = function () {
        var retour;
        var experienceInfo = this.SaisieExperience();
        var browseInfo = this.browseExperience();
        retour = "\n        <div class=\"ui fluid container\">\n            <div class=\"ui top attached tabular menu\">\n                <div class=\"active item\" data-tab=\"" + this._idTabSaisie + "\" id=\"" + this._idTabSaisie + "\">Saisie Experience</div>\n                <div class=\"item\" data-tab=\"tab-consultation\">Consultation</div>\n            </div>\n            <div class=\"ui bottom attached active tab segment\" data-tab=\"" + this._idTabSaisie + "\">\n                <!-- Tab Content !-->\n                " + experienceInfo + "\n            </div>\n            <div class=\"ui bottom attached tab segment\" data-tab=\"tab-consultation\">\n                <!-- Tab Content !-->\n                " + browseInfo + "\n            </div>\n        </div>\n        ";
        return retour;
    };
    cMyUI_MainTab.prototype.SaisieExperience = function () {
        var retour;
        var Formulaire_creation_Experience = this.getFormulaire_creation_Experience();
        retour = "\n            <div class=\"ui grid container\">\n                <div class=\"ui styled accordion\">\n                    <div class=\"title active\">\n                        <i class=\"dropdown icon\"></i>\n                        Creation d'une experience\n                    </div>\n                    <div class=\"content active\">\n                        Info pour la creation:\n                        " + Formulaire_creation_Experience + "\n                    </div>\n\n                    <div class=\"title\">\n                        <i class=\"dropdown icon\"></i>\n                        Completer une experience\n                    </div>\n                    <div class=\"content\">\n                        Ajout des infos:\n                    </div>\n                </div>\n            </div>\n            ";
        return retour;
    };
    cMyUI_MainTab.prototype.getFormulaire_creation_Experience = function () {
        var allPersonnesOption = '';
        var allPersonnes = cExperience.getAllPersone();
        for (var i = 0; i < allPersonnes.length; i++) {
            allPersonnesOption += "<option value=\"" + allPersonnes[i] + "\">" + allPersonnes[i] + "</option>";
        }
        var retour = "\n            <form class=\"ui form\">\n                <div class=\"field\">\n                    <label>Date de l'experience</label>\n                    <input type=\"date\" name=\"date-exp\" placeholder=\"2020-10-01\" min=\"2020-10-01\" id=\"" + this._idDateExp + "\"/>\n                </div>\n\n                <div class=\"field\">\n                    <label>Qui a realise l'experience?</label>\n                    <select class=\"ui compact selection dropdown\" id=\"" + this._idQui + "\">\n                        <option selected value=\"Nanie\">Nanie</option>\n                        " + allPersonnesOption + "\n                        <option value=\"autre\">Autres</option>\n                    </select>\n                </div>\n\n                <div class=\"field\">\n                    <label>Lien vers les images</label>\n                    <input type=\"file\" name=\"expImage\" accept=\"image/png, image/jpeg\" multiple id=\"" + this._idFiles + "\">\n                </div>\n\n                <div id=\"MainTab_UI_Info\"></div>\n\n                <button class=\"ui button\" type=\"submit\" id=\"" + this._idOKButton + "\">OK !</button>\n            </form>";
        return retour;
    };
    cMyUI_MainTab.prototype.browseExperience = function () {
        return '<div>Consultation div</div>';
    };
    return cMyUI_MainTab;
}(cMyUI));
export default cMyUI_MainTab;
//# sourceMappingURL=cMyUI_MainTab copy.js.map