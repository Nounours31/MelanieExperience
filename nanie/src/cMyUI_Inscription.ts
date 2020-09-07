import { cExperience } from './Services/DB/cExperience';
import cMyUI from './cMyUI';
import encoderMd5 from 'crypto-js';



export default class cMyUI_Inscription extends cMyUI {
    private readonly _idLoggonButton : string = 'inscription_idinscriptionButton';
    private readonly _idInputemail: string = 'inscription_idNameInput';
    private readonly _idInputAlias: string = 'inscription_idNameInput';
    private readonly _idInputpwd1: string = 'inscription_idPWDInput';
    private readonly _idInputpwd2: string = 'inscription_idPWDInput';

    constructor () {
        super('cMyUI_Inscription');
    }

    public addCallBackOnMyDialog(): void {
        $('#root').addClass ('inscription');

        let me : cMyUI_Inscription = this;
        $(`#${me._idLoggonButton}`).on ('click', function (event : JQuery.ClickEvent) : boolean { 
            let emailOralias : string = $(`#${me._idInputemail}`).val() as string;
            let type : string = 'email';
            if (!emailOralias.includes ('@')) {
                type = 'alias';
            }

            let pwdDB : string | null = cExperience.getMd5PasswdFromMailorAlias(emailOralias, type);
            let pwdLu1: string = $(`#${me._idInputpwd1}`).val() as string;
            let pwdLu2: string = $(`#${me._idInputpwd2}`).val() as string;

            event.stopImmediatePropagation;
            return false;
        });
    }


    public draw (): string {
        let retour : string = `
            <div class="ui middle aligned center aligned grid inscription">
                <div class="column inscription">
                    <h2 class="ui image header inscription">
                        <div class="content">
                            Inscription
                        </div>
                    </h2>
                    <form action="" method="get" class="ui large form">
                    <div class="ui  secondary  segment">
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="alias" placeholder="alias" id="${this._idInputAlias}">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="email" placeholder="E-mail address" required id="${this._idInputemail}">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password1" placeholder="Password1" required id="${this._idInputpwd1}">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password2" placeholder="Password2" required id="${this._idInputpwd2}">
                            </div>
                        </div>

                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password2" placeholder="Password2" required id="${this._idInputpwd2}"/>
                                <i class="asterisk icon"></i>
                            </div>
                        </div>

                        <div class="ui fluid large teal submit button" id="${this._idLoggonButton}">inscription</div>
                    </div>

                    <div class="error message"></div>

                    </form>
                </div>
            </div>
            <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>

        `;
        return retour;
    }
}

