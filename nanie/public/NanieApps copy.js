import '../sass/myApps.scss';
import $ from 'jquery';
import cMyUI_MainTab from './cMyUI_MainTab';
import cMyUI_login from './cMyUI_login';
import cEnvt from './infra/cEnvt';
import { cExperience } from './Services/DB/cExperience';
var NanieApps = /** @class */ (function () {
    function NanieApps() {
    }
    NanieApps.prototype.main = function () {
        // ------------------------------------------------------------
        // Point d'entree de la page principale: 'root' 
        // ------------------------------------------------------------
        var rootDiv = $('.root');
        var dialog = new cMyUI_MainTab();
        var login = new cMyUI_login();
        // ------------------------------------------------------------
        // Appel de la methode draw de tous les dialogues et affichage
        // ------------------------------------------------------------
        var isTokenOK = false;
        var myStorage = localStorage;
        if (myStorage.hasOwnProperty(cEnvt._tokenName)) {
            isTokenOK = cExperience.checkToken(myStorage.getItem(cEnvt._tokenName));
        }
        if (!isTokenOK) {
            var newHTML = login.draw();
            if ((rootDiv != null) && (newHTML != null)) {
                rootDiv.append(newHTML);
            }
            login.addCallBackOnMyDialog();
        }
        else {
            var newHTML = dialog.draw();
            if ((rootDiv != null) && (newHTML != null)) {
                rootDiv.append(newHTML);
            }
            // ------------------------------------------------------------
            // chargement des callback
            // ------------------------------------------------------------
            dialog.addCallBackOnMyDialog();
        }
    };
    return NanieApps;
}());
// ------------------------------------------------------------
// Call effectue par le JS du HTML
// ------------------------------------------------------------
var a = new NanieApps();
a.main();
//# sourceMappingURL=NanieApps copy.js.map