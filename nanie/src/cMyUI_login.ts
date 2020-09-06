import { cExperience } from './Services/DB/cExperience';
import { iResultatMessage, iGenotypeMessage } from './Services/DB/iOnMessageWithServer';
import { iExperienceIDMessage, iExperienceFilesMessage } from './Services/DB/iOnMessageWithServer';
import { iMyHtmlInfo, cTools } from './infra/cTools';
import cMyUI from './cMyUI';




export default class cMyUI_login extends cMyUI {
    constructor () {
        super('cMyUI_login');
    }

    public addCallBackOnMyDialog(): void {
        $('#root').addClass ('login');
    }


    public draw (): string {
        let retour : string = `
            <div class="ui middle aligned center aligned grid login">
                <div class="column login">
                    <h2 class="ui image header login">
                        <img src="images/login.png" style="border-radius: 8px;
                                    object-position: center;
                                    height: auto;
                                    display: block;
                                    margin-left: auto;
                                    margin-right: auto;
                                    width: 50%;" />
                        <div class="content">
                            Se connecter
                        </div>
                    </h2>
                    <form action="" method="get" class="ui large form">
                    <div class="ui  secondary  segment">
                        <div class="field">
                        <div class="ui left icon input">
                            <i class="user icon"></i>
                            <input type="text" name="email" placeholder="E-mail address">
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui left icon input">
                            <i class="lock icon"></i>
                            <input type="password" name="password" placeholder="Password">
                        </div>
                        </div>
                        <div class="ui fluid large teal submit button">Login</div>
                    </div>

                    <div class="error message"></div>

                    </form>

                    <div class="ui message">
                        Pour s'enregistrer voir Nanie
                    </div>
                </div>
            </div>
            <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>

        `;
        return retour;
    }
}

