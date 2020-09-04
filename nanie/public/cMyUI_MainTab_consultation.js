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
var cMyUI_MainTab_consultation = /** @class */ (function (_super) {
    __extends(cMyUI_MainTab_consultation, _super);
    function cMyUI_MainTab_consultation() {
        var _this = _super.call(this, 'MainTab') || this;
        _this._idOKButton = 'OKButton';
        return _this;
    }
    cMyUI_MainTab_consultation.prototype.addCallBackOnMyDialog = function () {
        var me = this;
        $(".voir").on('click', function (event) {
            // afiicher dans <div id="${this._idResultatDB}"></div>
            $("#" + me._idResultatDB).empty();
            event.stopImmediatePropagation();
            var VoirButtonId = $(event.target).attr('id');
            var sExpUid = VoirButtonId.substring(me._idOKButton.length + 1);
            var iExpUid = Number.parseInt(sExpUid);
            var infoGeneraleExperience = cExperience.getExperience_InfoGenerale(iExpUid);
            var ExperienceStringId = "----";
            if (infoGeneraleExperience != null)
                ExperienceStringId = infoGeneraleExperience.experiencestringid;
            var infoResultatExperience = cExperience.getExperience_ResultatTest(iExpUid);
            var infoGenomeExperience = cExperience.getExperience_ResultatGenotype(iExpUid);
            var myUIForConsult = '';
            if ((infoGenomeExperience != null) && (infoResultatExperience != null)) {
                var infoResultatExperience_0 = infoResultatExperience[0];
                var uneInfoGenomeExperience = void 0;
                if ((infoResultatExperience_0 === undefined) || (infoResultatExperience_0.idexperience === undefined)) {
                    // pas de data associe a cette experience
                    myUIForConsult = "\n                        <div class=\"ui labeled yellow input\">\n                            <p>Pas de donnees d'experience associee <br/></p>\n                        </div> ";
                }
                else {
                    myUIForConsult = "\n                        <div class=\"ui labeled input\">\n                            <div class=\"ui label\">\n                                Experience Id\n                            </div>\n                            <p>" + ExperienceStringId + "  [ID en DB: " + infoResultatExperience_0.idexperience + "]</p>\n                        </div>\n                        <table class=\"ui celled table\">\n                        <thead>\n                            <tr>\n                                <th>Genotype</th><th>chromosomesome 1</th> <th>chromosomesome 2</th> <th>chromosomesome 3</th><th>chromosomesome 4</th>\n                                    <th>Nb Echantillon</th><th>Marquage</th><th>S general</th><th>S comparatif</th><th>Type test</th>\n                            </tr>\n                        </thead>\n                        <tbody>";
                    for (var i = 0; i < infoGenomeExperience.length; i++) {
                        uneInfoGenomeExperience = infoGenomeExperience[i];
                        if (i == 0) {
                            myUIForConsult += "\n                            <tr>\n                                <td>G " + (i + 1) + "</td><td>" + uneInfoGenomeExperience.chromosome1 + "</td><td>" + uneInfoGenomeExperience.chromosome2 + "</td><td>" + uneInfoGenomeExperience.chromosome3 + "</td><td>" + uneInfoGenomeExperience.chromosome4 + "</td><td>" + uneInfoGenomeExperience.nbechantillon + "</td>\n                                    <td rowspan=\"" + infoGenomeExperience.length + "\">" + infoResultatExperience_0.marquage + "</td>\n                                    <td rowspan=\"" + infoGenomeExperience.length + "\">" + infoResultatExperience_0.SGeneral + "</td>\n                                    <td rowspan=\"" + infoGenomeExperience.length + "\">" + infoResultatExperience_0.SComparatif + "</td>\n                                    <td rowspan=\"" + infoGenomeExperience.length + "\">" + infoResultatExperience_0.typedetest + "</td>\n                            </tr>";
                        }
                        else {
                            myUIForConsult += "\n                            <tr>\n                                <td>G " + (i + 1) + "</td><td>" + uneInfoGenomeExperience.chromosome1 + "</td><td>" + uneInfoGenomeExperience.chromosome2 + "</td><td>" + uneInfoGenomeExperience.chromosome3 + "</td><td>" + uneInfoGenomeExperience.chromosome4 + "</td><td>" + uneInfoGenomeExperience.nbechantillon + "</td>\n                        </tr>";
                        }
                    }
                    myUIForConsult += "\n                        </tbody>\n                        </table>\n                    ";
                }
                var infoFileExperience = cExperience.getExperience_ResultatImage(iExpUid);
                if ((infoFileExperience != null) && (infoFileExperience.length > 0)) {
                    myUIForConsult += "\n                        <div class=\"ui labeled input\" >\n                            <div class=\"ui label\" >\n                                Images\n                            </div>\n                        </div>\n                        <table class=\"ui celled table\">\n                            <tbody>";
                    for (var i = 0; i < infoFileExperience.length; i++) {
                        myUIForConsult += "<tr>\n                            <td>" + infoFileExperience[i].nom + "</td>\n                            <td>" + infoFileExperience[i].path + "</td>\n                            <td><img src=\"" + infoFileExperience[i].url + "\" alt=\"" + infoFileExperience[i].path + "\" width=\"400\" height=\"341\" title=\"image " + i + "\"></td>\n                        </tr>";
                    }
                    myUIForConsult += "\n                            </tbody>\n                        </table>";
                }
                else {
                    myUIForConsult += "\n                        <div class=\"ui labeled input\" >\n                            <div class=\"ui label yellow\" >\n                                Pas d'image associees a cette experiences\n                            </div>\n                        </div>";
                }
            }
            $("#" + me._idResultatDB).append(myUIForConsult);
            //            let y: iExperienceFilesMessage = cExperience.getExperience_FilesURL(iExpUid);
        });
    };
    cMyUI_MainTab_consultation.prototype.draw = function () {
        var retour;
        var allExperienceuid = cExperience.getAllExperienceUid();
        var x;
        retour = "\n                <table class=\"ui celled table\">\n                <thead>\n                    <tr>\n                        <th>Experience Num</th><th>ExperienceID</th><th>Qui</th> <th>Quand</th><th>Date Enregistrement</th><th>Voir</th>\n                    </tr>\n                </thead>\n                <tbody>";
        for (var i = 0; i < allExperienceuid.length; i++) {
            x = cExperience.getExperience_InfoGenerale(allExperienceuid[i]);
            if (x != null) {
                retour += "\n                    <tr>\n                        <td>" + allExperienceuid[i] + "</td><td>" + x.experiencestringid + "</td><td>" + x.faiteparqui + "</td><td>" + x.daterealisationexperience + "</td><td>" + x.dateinsert + "</td><td>\n                        <button class=\"ui button green voir\" type=\"submit\" id=\"" + this._idOKButton + "_" + allExperienceuid[i] + "\">Voir</button></td>\n                    </tr>";
            }
        }
        retour += "\n                </tbody>\n                </table>\n        ";
        return retour;
    };
    return cMyUI_MainTab_consultation;
}(cMyUI));
export default cMyUI_MainTab_consultation;
//# sourceMappingURL=cMyUI_MainTab_consultation.js.map