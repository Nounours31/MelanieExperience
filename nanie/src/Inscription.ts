import '../sass/myApps.scss';
import $ from 'jquery';
import cEnvt from './infra/cEnvt';
import { cExperience } from './Services/DB/cExperience';

class Inscription {

    constructor() {
     }

    main(): void {
        // ------------------------------------------------------------
        // Point d'entree de la page principale: 'root' 
        // ------------------------------------------------------------
        let rootDiv: JQuery<HTMLElement> = $('.root');
        rootDiv.append('<p>Coucou</p>');
    }
}


// ------------------------------------------------------------
// Call effectue par le JS du HTML
// ------------------------------------------------------------
let a: Inscription = new Inscription();
a.main();