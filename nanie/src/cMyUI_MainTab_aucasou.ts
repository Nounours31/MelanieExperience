import { cExperience } from './Services/DB/cExperience';
import { iResultatMessage, iGenotypeMessage } from './Services/DB/iOnMessageWithServer';
import { iExperienceIDMessage, iExperienceFilesMessage } from './Services/DB/iOnMessageWithServer';
import { iMyHtmlInfo, cTools } from './infra/cTools';
import cMyUI from './cMyUI';




export default class cMyUI_MainTab_aucasou extends cMyUI {
    constructor () {
        super('cMyUI_MainTab_aucasou');
    }

    public addCallBackOnMyDialog(): void {
    }


    public draw (): string {
        let retour : string = `Pas encore code`;
        return retour;
    }
}

