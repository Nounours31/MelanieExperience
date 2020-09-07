import '../sass/myApps.scss';
import $ from 'jquery';
import cMyUI_MainTab from './cMyUI_MainTab';
import cMyUI_login from './cMyUI_login';
import cMyUI_Inscription from './cMyUI_Inscription';
import cEnvt from './infra/cEnvt';
import { cExperience } from './Services/DB/cExperience';

class NanieApps {

    constructor() {
     }

    main(): void {
        // ------------------------------------------------------------
        // Point d'entree de la page principale: 'root' 
        // ------------------------------------------------------------
        let rootDiv: JQuery<HTMLElement> = $('.root');
        let dialog: cMyUI_MainTab = new cMyUI_MainTab();
        let login: cMyUI_login = new cMyUI_login();
        let inscription: cMyUI_Inscription = new cMyUI_Inscription();


        // ------------------------------------------------------------
        // filtrage URL
        // ------------------------------------------------------------
        let x : Location = window.location;
        let uri : string = x.search;
        uri = uri.replace('?', '');
        uri = uri.toLowerCase();
        
        if (uri == 'inscription') {
            let newHTML: string = inscription.draw();
            if ((rootDiv != null) && (newHTML != null)) {
                rootDiv.append(newHTML);
            }
            inscription.addCallBackOnMyDialog();        }
        else {
            // ------------------------------------------------------------
            // Appel de la methode draw de tous les dialogues et affichage
            // ------------------------------------------------------------
            let isTokenOK : boolean = false;
            let myStorage : Storage = localStorage;
            if (myStorage.hasOwnProperty (cEnvt._tokenName)) {
                isTokenOK = cExperience.checkToken (myStorage.getItem (cEnvt._tokenName) as string);
            }

            if (!isTokenOK) {
                let newHTML: string = login.draw();
                if ((rootDiv != null) && (newHTML != null)) {
                    rootDiv.append(newHTML);
                }
                login.addCallBackOnMyDialog();
            }
            else {
                let newHTML: string = dialog.draw();
                if ((rootDiv != null) && (newHTML != null)) {
                    rootDiv.append(newHTML);
                }

                // ------------------------------------------------------------
                // chargement des callback
                // ------------------------------------------------------------
                dialog.addCallBackOnMyDialog(); 
            }
        }
    }
}


// ------------------------------------------------------------
// Call effectue par le JS du HTML
// ------------------------------------------------------------
let a: NanieApps = new NanieApps();
a.main();