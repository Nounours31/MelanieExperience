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
import cMyUI_MainTab_create from './cMyUI_MainTab_create';
import cMyUI_MainTab_ajout from './cMyUI_MainTab_ajout';
var cMyUI_MainTab = /** @class */ (function (_super) {
    __extends(cMyUI_MainTab, _super);
    function cMyUI_MainTab() {
        var _this = _super.call(this, 'MainTab') || this;
        _this._idTabSaisie = 'tab-saisie';
        _this._creationUI = new cMyUI_MainTab_create();
        _this._ajoutUI = new cMyUI_MainTab_ajout();
        return _this;
    }
    cMyUI_MainTab.prototype.addCallBackOnMyDialog = function () {
        // activer les sementicUI du dialog
        $('.ui.accordion').accordion();
        $('.tabular.menu .item').tab();
        this._creationUI.addCallBackOnMyDialog();
        this._ajoutUI.addCallBackOnMyDialog();
    };
    cMyUI_MainTab.prototype.draw = function () {
        var retour;
        var experienceCreationAccordeonInfo = this.experienceCreationAccordeonInfo();
        var experienceConsultationInfo = this.experienceConsultationInfo();
        retour = "\n        <div class=\"ui fluid container\">\n            <div class=\"ui top attached tabular menu\">\n                <div class=\"active item\" data-tab=\"" + this._idTabSaisie + "\" id=\"" + this._idTabSaisie + "\">Saisie Experience</div>\n                <div class=\"item\" data-tab=\"tab-consultation\">Consultation</div>\n            </div>\n            <div class=\"ui bottom attached active tab segment\" data-tab=\"" + this._idTabSaisie + "\">\n                <!-- Tab Content !-->\n                " + experienceCreationAccordeonInfo + "\n            </div>\n            <div class=\"ui bottom attached tab segment\" data-tab=\"tab-consultation\">\n                <!-- Tab Content !-->\n                " + experienceConsultationInfo + "\n            </div>\n        </div>\n        ";
        return retour;
    };
    cMyUI_MainTab.prototype.experienceCreationAccordeonInfo = function () {
        var experienceCreationInfo = this._creationUI.draw();
        var experienceAjoutInfo = this._ajoutUI.draw();
        var retour;
        retour = "\n            <div class=\"ui grid container\">\n                <div class=\"ui styled accordion\">\n                    <div class=\"title active\">\n                        <i class=\"dropdown icon\"></i>\n                        Creation d'une experience\n                    </div>\n                    <div class=\"content active\">\n                        Info pour la creation:\n                        " + experienceCreationInfo + "\n                    </div>\n\n                    <div class=\"title\">\n                        <i class=\"dropdown icon\"></i>\n                        Completer une experience\n                    </div>\n                    <div class=\"content\">\n                        Ajout des infos:\n                        " + experienceAjoutInfo + "\n                    </div>\n                </div>\n            </div>\n            ";
        return retour;
    };
    cMyUI_MainTab.prototype.experienceConsultationInfo = function () {
        return '<div>Consultation div</div>';
    };
    return cMyUI_MainTab;
}(cMyUI));
export default cMyUI_MainTab;
//# sourceMappingURL=cMyUI_MainTab.js.map