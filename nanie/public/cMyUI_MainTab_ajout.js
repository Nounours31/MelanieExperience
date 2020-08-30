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
var cMyUI_MainTab_ajout = /** @class */ (function (_super) {
    __extends(cMyUI_MainTab_ajout, _super);
    function cMyUI_MainTab_ajout() {
        var _this = _super.call(this, 'MainTab') || this;
        _this._idOKButton = "idOKButton";
        return _this;
    }
    cMyUI_MainTab_ajout.prototype.addCallBackOnMyDialog = function () {
        // activer les sementicUI du dialog
        // choisir la tab par defaut
        // $('.ui .item').removeClass('active');
        // $(`#${this._idTabSaisie}`).addClass('active');
        var me = this;
    };
    cMyUI_MainTab_ajout.prototype.draw = function () {
        var retour;
        retour = "\n            <form class=\"ui form\">\n                <div class=\"ui labeled input\">\n                    <div class=\"ui label\">\n                        Experience Id\n                    </div>\n                    <input type=\"text\" placeholder=\"125\"/>\n                </div>\n                <table class=\"ui celled table\">\n                <thead>\n                    <tr><th>Chromosome 1</th>\n                    <th>Chromosome 2</th>\n                    <th>Nb Echantillon</th>\n                    <th>Type test</th>\n                    <th><button class=\"ui button\" type=\"submit\" id=\"" + this._idOKButton + "\">Ajouter une ligne</button></th>\n                </tr></thead>\n                <tbody>\n                    <tr>\n                    <td>James</td>\n                    <td>toto</td>\n                    <td>24</td>\n                    <td>Engineer</td>\n                    <td>x</td>\n                    </tr>\n                </tbody>\n                </table>\n                <button class=\"ui button\" type=\"submit\" id=\"" + this._idOKButton + "\">OK !</button>\n            </form>\n        ";
        return retour;
    };
    return cMyUI_MainTab_ajout;
}(cMyUI));
export default cMyUI_MainTab_ajout;
//# sourceMappingURL=cMyUI_MainTab_ajout.js.map