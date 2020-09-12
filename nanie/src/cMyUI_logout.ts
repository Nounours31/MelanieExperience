import { cExperience } from './Services/DB/cExperience';
import { iResultatMessage, iGenotypeMessage } from './Services/DB/iOnMessageWithServer';
import { iExperienceIDMessage, iExperienceFilesMessage } from './Services/DB/iOnMessageWithServer';
import { iMyHtmlInfo, cTools } from './infra/cTools';
import cMyUI from './cMyUI';
import cEnvt from './infra/cEnvt';




export default class cMyUI_logout extends cMyUI {
    constructor () {
        super('cMyUI_logout');
    }

    public addCallBackOnMyDialog(): void {
    }


    public draw (): string {
        let x : Storage = localStorage;
        x.removeItem (cEnvt._tokenName);

        let y : Location = window.location;
        y.reload(true);

        let retour : string = `Pas encore code`;
        return retour;
    }
}

