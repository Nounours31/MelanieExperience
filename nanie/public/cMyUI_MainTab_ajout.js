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
import { cTools } from './infra/cTools';
import cMyUI from './cMyUI';
var cMyUI_MainTab_ajout = /** @class */ (function (_super) {
    __extends(cMyUI_MainTab_ajout, _super);
    function cMyUI_MainTab_ajout() {
        var _this = _super.call(this, 'MainTab') || this;
        _this._idOKButton = 'idOKButton';
        _this._idInputExp = 'cMyUI_MainTab_ajout_idInputExp';
        _this._idSelectOnChromo1 = 'cMyUI_MainTab_ajout_idSelectOnChromo1';
        _this._idSelectOnChromo2 = 'cMyUI_MainTab_ajout_idSelectOnChromo2';
        _this._idSelectOnChromo3 = 'cMyUI_MainTab_ajout_idSelectOnChromo3';
        _this._idSelectOnChromo4 = 'cMyUI_MainTab_ajout_idSelectOnChromo4';
        _this._idSelectOnTestType = 'cMyUI_MainTab_ajout_idSelectOnTestType';
        _this._idSelectOnMarquage = 'cMyUI_MainTab_ajout_idSelectOnMarquage';
        _this._idInputNbEchantillon = 'cMyUI_MainTab_ajout_idInputNbEchantillon';
        _this._idInputSGeneral = 'cMyUI_MainTab_ajout__idInputSGeneral';
        _this._idInputSComparatif = 'cMyUI_MainTab_ajout_idInputSComparatif';
        _this._nbGenotype = 4;
        return _this;
    }
    cMyUI_MainTab_ajout.prototype.addCallBackOnMyDialog = function () {
        // activer les sementicUI du dialog
        // choisir la tab par defaut
        // $('.ui .item').removeClass('active');
        // $(`#${this._idTabSaisie}`).addClass('active');
        var me = this;
        $("#" + me._idOKButton).on('click', function (event) {
            var allInfosFromPage = cExperience.create_iAllInfoForUpdateExperience();
            allInfosFromPage.ExpId = $("#" + me._idInputExp).val();
            allInfosFromPage.Marquage = $("#" + me._idSelectOnMarquage).val();
            allInfosFromPage.NbGenotype = me._nbGenotype;
            allInfosFromPage.SComparatif = $("#" + me._idInputSComparatif).val();
            allInfosFromPage.SGeneral = $("#" + me._idInputSGeneral).val();
            allInfosFromPage.TypeTest = $("#" + me._idSelectOnTestType).val();
            for (var i = 0; i < me._nbGenotype; i++) {
                var allInfosFromGenotype = cExperience.create_iAllGenotypeInfoForUpdateExperience();
                allInfosFromGenotype.Chromo1 = $("#" + me._idSelectOnChromo1 + "_" + i).val();
                allInfosFromGenotype.Chromo2 = $("#" + me._idSelectOnChromo2 + "_" + i).val();
                allInfosFromGenotype.Chromo3 = $("#" + me._idSelectOnChromo3 + "_" + i).val();
                allInfosFromGenotype.Chromo4 = $("#" + me._idSelectOnChromo4 + "_" + i).val();
                allInfosFromPage.Genotype.push(allInfosFromGenotype);
            }
            var id = cExperience.updateDBExperience(allInfosFromPage);
            cExperience.dumpFromDB(id, me._idResultatDB);
        });
    };
    cMyUI_MainTab_ajout.prototype.UpdateMyDialog = function (lastExp, ilastExp) {
        var x = lastExp + ' [db: ' + ilastExp.toString() + ']';
        $("#" + this._idInputExp).val(x);
    };
    cMyUI_MainTab_ajout.prototype.draw = function () {
        var retour;
        var nbLigne = this._nbGenotype;
        var x = this._ctrl.lastExp + ' [db: ' + this._ctrl.iLastExp.toString() + ']';
        var infosForHTML;
        var selectChromo1 = ['', '', '', ''];
        var selectChromo2 = ['', '', '', ''];
        var selectChromo3 = ['', '', '', ''];
        var selectChromo4 = ['', '', '', ''];
        var InputNbEchantillon = ['', '', '', ''];
        var selectTypeTest;
        var selectMarquage;
        var InputSGeneral;
        var InputSComparatif;
        for (var i = 0; i < nbLigne; i++) {
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnChromo1 + "_" + i };
            selectChromo1[i] = cTools.BuildSelectFromTab(cExperience.getAllChromo1(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnChromo2 + "_" + i };
            selectChromo2[i] = cTools.BuildSelectFromTab(cExperience.getAllChromo2(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnChromo3 + "_" + i };
            selectChromo3[i] = cTools.BuildSelectFromTab(cExperience.getAllChromo3(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnChromo4 + "_" + i };
            selectChromo4[i] = cTools.BuildSelectFromTab(cExperience.getAllChromo4(), infosForHTML);
            infosForHTML = { 'class': 'myInputInt', 'type': 'number', 'id': this._idInputNbEchantillon + "_" + i };
            InputNbEchantillon[i] = cTools.BuildInputInt('1', infosForHTML);
        }
        infosForHTML = { 'class': 'myInputFloat', 'type': 'number', 'id': "" + this._idInputSGeneral, 'placeholder': '1.79e-11' };
        InputSGeneral = cTools.BuildInputInt('1', infosForHTML);
        infosForHTML = { 'class': 'myInputFloat', 'type': 'number', 'id': "" + this._idInputSComparatif, 'placeholder': '1.79e-11' };
        InputSComparatif = cTools.BuildInputInt('1', infosForHTML);
        infosForHTML = { 'class': 'mySelect', 'id': "" + this._idSelectOnTestType };
        selectTypeTest = cTools.BuildSelectFromTab(cExperience.getAllTestType(), infosForHTML);
        infosForHTML = { 'class': 'mySelect', 'id': "" + this._idSelectOnMarquage };
        selectMarquage = cTools.BuildSelectFromTab(cExperience.getAllMarquage(), infosForHTML);
        retour = "\n            <form class=\"ui form\">\n                <div class=\"ui labeled input\">\n                    <div class=\"ui label\">\n                        Experience Id\n                    </div>\n                    <input type=\"text\" value=\"" + x + "\" placeholder=\"[lettre][chiffre]-[lettre][chiffre]\" id=\"" + this._idInputExp + "\"/>\n                </div>\n                <table class=\"ui celled table\">\n                <thead>\n                    <tr>\n                        <th>Genotype</th><th>Chromosome 1</th> <th>Chromosome 2</th> <th>Chromosome 3</th><th>Chromosome 4</th>\n                            <th>Nb Echantillon</th><th>Marquage</th><th>S general</th><th>S comparatif</th><th>Type test</th>\n                    </tr>\n                </thead>\n                <tbody>";
        for (var i = 0; i < nbLigne; i++) {
            if (i == 0) {
                retour += "\n                    <tr>\n                        <td>G " + (i + 1) + "</td><td>" + selectChromo1[i] + "</td><td>" + selectChromo2[i] + "</td><td>" + selectChromo3[i] + "</td><td>" + selectChromo4[i] + "</td>\n                            <td>" + InputNbEchantillon[i] + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + selectMarquage + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + InputSGeneral + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + InputSComparatif + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + selectTypeTest + "</td>\n                    </tr>";
            }
            else {
                retour += "\n                    <tr>\n                        <td>G " + (i + 1) + "</td><td>" + selectChromo1[i] + "</td><td>" + selectChromo2[i] + "</td><td>" + selectChromo3[i] + "</td><td>" + selectChromo4[i] + "</td><td>" + InputNbEchantillon[i] + "</td>\n                    </tr>";
            }
        }
        retour += "\n                </tbody>\n                </table>\n                <button class=\"ui button pink\" type=\"submit\" id=\"" + this._idOKButton + "\">OK !</button>\n            </form>\n        ";
        return retour;
    };
    return cMyUI_MainTab_ajout;
}(cMyUI));
export default cMyUI_MainTab_ajout;
//# sourceMappingURL=cMyUI_MainTab_ajout.js.map