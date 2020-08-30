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
var cMyUI_MainTab_create = /** @class */ (function (_super) {
    __extends(cMyUI_MainTab_create, _super);
    function cMyUI_MainTab_create() {
        var _this = _super.call(this, 'MainTab') || this;
        _this._DefaultPersonneNom = 'Fages';
        _this._DefaultPersonneNomInitiale = _this._DefaultPersonneNom.charAt(0);
        _this._idOKButton = 'SaisieExperience_OKButton';
        _this._idDateExp = 'SaisieExperience_DateExp';
        _this._idQui = 'SaisieExperience_Qui';
        _this._idFiles = 'SaisieExperience_Files';
        _this._idDivForMessageInfo = 'MainTab_DivForForm_Info';
        _this._idMessageInfo = 'MainTab_UI_Info_MessageID';
        _this._idExperienceNomPrefixe = 'MainTab_UI_Info_ExperienceAsLettre';
        _this._idExperienceNumero = 'MainTab_UI_Info_idExperienceNumero';
        _this._idExperienceExperiencetype = 'MainTab_UI_Info__idExperienceExperiencetype';
        _this._idExperienceClef = 'MainTab_UI_Info_idExperienceClef';
        _this._My_Message_Classe = 'ClasseDesMessagesInfo';
        return _this;
    }
    cMyUI_MainTab_create.prototype.addCallBackOnMyDialog = function () {
        this.checkFormContenu();
        this.lienExprienceId_NomManip();
    };
    cMyUI_MainTab_create.prototype.lienExprienceId_NomManip = function () {
        var me = this;
        $("#" + this._idQui).on('change', function (event) {
            var val = $("#" + me._idQui).val();
            var valEntete = val.charAt(0);
            $("#" + me._idExperienceNomPrefixe).val(valEntete);
        });
    };
    // ---------------------------------------------------------------------------
    // Callback du OK
    //      1. check du contenu du formulaire
    //      2. envoie en DB si OK
    // ---------------------------------------------------------------------------
    cMyUI_MainTab_create.prototype.checkFormContenu = function () {
        var me = this;
        $("#" + this._idOKButton).on('click', function (event) {
            // les 3 champs a controler
            var date = $("#" + me._idDateExp).val();
            var qui = $("#" + me._idQui).val();
            var files = $("#" + me._idFiles).prop('files');
            // errurs si 1 manque
            var onError = false;
            var onErrorMessage = "<div class=\"ui negative message " + me._My_Message_Classe + "\"><i class=\"close icon\"></i>";
            if (date.length < 1) {
                onErrorMessage += "\n                        <div class=\"header\">\n                            Pb de date\n                        </div>\n                        <p> Il faut choisir une date </p>";
                onError = true;
            }
            if (files.length < 1) {
                onErrorMessage += "\n                        <div class=\"header\">\n                            Image\n                        </div>\n                        <p> Il faut choisir au moins une image </p>";
                onError = true;
            }
            onErrorMessage += '</div>';
            // affiche de l'erreur
            if (onError) {
                $("#" + me._idDivForMessageInfo).append(onErrorMessage);
                $("#" + me._idDivForMessageInfo).on('click', function () {
                    $("." + me._My_Message_Classe).remove();
                });
            }
            else {
                // envoie en DB
                var experienceId = '';
                experienceId += $("#" + me._idExperienceNomPrefixe).val();
                experienceId += $("#" + me._idExperienceNumero).val();
                experienceId += '-' + $("#" + me._idExperienceExperiencetype).val();
                experienceId += $("#" + me._idExperienceClef).val();
                var id = cExperience.createDBExperience(experienceId, date, qui, files);
                if (id > 0) {
                    var onOKMessage = "<div class=\"ui positive message " + me._My_Message_Classe + "\"><i class=\"close icon\"></i>";
                    onOKMessage += "\n                                <div class=\"header\">\n                                    Creation experience en DB -- OK\n                                </div>\n                                <p> " + experienceId + ", " + date + ", " + qui + ", " + files + " </p>";
                    onOKMessage += '</div>';
                    $("#" + me._idDivForMessageInfo).append(onOKMessage);
                    $("#" + me._idDivForMessageInfo).on('click', function () {
                        $("." + me._My_Message_Classe).remove();
                    });
                    me._ctrl.setLastExp(experienceId, id);
                }
                else {
                    alert('Impossible de mettre en base cette demande');
                }
            }
            event.stopPropagation();
            return false;
        });
    };
    cMyUI_MainTab_create.prototype.draw = function () {
        var allPersonnesOption = '';
        var allPersonnes = cExperience.getAllPersone();
        for (var i = 0; i < allPersonnes.length; i++) {
            allPersonnesOption += "<option value=\"" + allPersonnes[i] + "\">" + allPersonnes[i] + "</option>";
        }
        var AllExperienceInitialeOption = '';
        var AllExperienceInitiale = cExperience.getAllExperienceInitiale();
        for (var i = 0; i < AllExperienceInitiale.length; i++) {
            AllExperienceInitialeOption += "<option value=\"" + AllExperienceInitiale[i] + "\">" + AllExperienceInitiale[i] + "</option>";
        }
        var retour = "\n            <form class=\"ui form\">\n                <div class=\"field\">\n                    <label>Experience Id</label>\n                    <div class=\"ui left labeled input\">\n                        <input type=\"text\" value=\"" + this._DefaultPersonneNomInitiale + "\" id=\"" + this._idExperienceNomPrefixe + "\">\n                        <input type=\"number\" value=\"0\" id=\"" + this._idExperienceNumero + "\">\n                        <p style=\"font-size: x-large; margin:auto;\">-</p>\n                        <select class=\"ui compact selection dropdown\" id=\"" + this._idExperienceExperiencetype + "\">\n                            <option selected value=\"A\">A</option>\n                            " + AllExperienceInitialeOption + "\n                            <option value=\"autre\">Autres</option>\n                        </select>\n                        <input type=\"number\" value=\"0\" id=\"" + this._idExperienceClef + "\">\n                    </div>\n                </div>\n\n                <div class=\"field\">\n                    <label>Date de l'experience</label>\n                    <input type=\"date\" name=\"date-exp\" value=\"2020-10-01\" min=\"2020-10-01\" id=\"" + this._idDateExp + "\"/>\n                </div>\n\n                <div class=\"field\">\n                    <label>Qui a realise l'experience?</label>\n                    <select class=\"ui compact selection dropdown\" id=\"" + this._idQui + "\">\n                        <option selected value=\"" + this._DefaultPersonneNom + "\">" + this._DefaultPersonneNom + "</option>\n                        " + allPersonnesOption + "\n                        <option value=\"autre\">Autres</option>\n                    </select>\n                </div>\n\n                <div class=\"field\">\n                    <label>Lien vers les images</label>\n                    <input type=\"file\" name=\"expImage\" accept=\"image/png, image/jpeg\" multiple id=\"" + this._idFiles + "\">\n                </div>\n\n                <div id=\"" + this._idDivForMessageInfo + "\"></div>\n\n                <button class=\"ui button pink\" type=\"submit\" id=\"" + this._idOKButton + "\">OK !</button>\n            </form>";
        return retour;
    };
    return cMyUI_MainTab_create;
}(cMyUI));
export default cMyUI_MainTab_create;
//# sourceMappingURL=cMyUI_MainTab_create.js.map