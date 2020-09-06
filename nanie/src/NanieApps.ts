import '../sass/myApps.scss';
import $ from 'jquery';
import cMyUI_MainTab from './cMyUI_MainTab';
import cMyUI_login from './cMyUI_login';

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


        // ------------------------------------------------------------
        // Appel de la methode draw de tous les dialogues et affichage
        // ------------------------------------------------------------
        let newHTML: string = login.draw();
        if ((rootDiv != null) && (newHTML != null)) {
            rootDiv.append(newHTML);
        }
        login.addCallBackOnMyDialog();
/*
        let newHTML: string = dialog.draw();
        if ((rootDiv != null) && (newHTML != null)) {
            rootDiv.append(newHTML);
        }

        // ------------------------------------------------------------
        // chargement des callback
        // ------------------------------------------------------------
        dialog.addCallBackOnMyDialog(); */
    }
}


// ------------------------------------------------------------
// Call effectue par le JS du HTML
// ------------------------------------------------------------
let a: NanieApps = new NanieApps();
a.main();