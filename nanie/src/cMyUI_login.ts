import { cExperience } from './Services/DB/cExperience';
import cMyUI from './cMyUI';
import encoderMd5 from 'crypto-js';




export default class cMyUI_login extends cMyUI {
    private readonly _idLoggonButton : string = 'Login_idLoginButton';
    private readonly _idInputemail : string = 'Login_idNameInput';
    private readonly _idInputpwd : string = 'Login_idPWDInput';

    constructor () {
        super('cMyUI_login');
    }

    public addCallBackOnMyDialog(): void {
        $('#root').addClass ('login');

        let me : cMyUI_login = this;
        $(`#${me._idLoggonButton}`).on ('click', function (event : JQuery.ClickEvent) : boolean { 
            let emailOralias : string = $(`#${me._idInputemail}`).val() as string;
            let type : string = 'email';
            if (!emailOralias.includes ('@')) {
                type = 'alias';
            }

            let pwdDB : string | null = cExperience.getMd5PasswdFromMailorAlias(emailOralias, type);
            let pwdLu : string = $(`#${me._idInputpwd}`).val() as string;

            let pwdLuX : encoderMd5.WordArray  = encoderMd5.MD5(pwdLu);
            pwdLu = pwdLuX.toString();

            if ((pwdDB != null) && (pwdDB == pwdLu)) {
                let rc : boolean = cExperience.setLogin(emailOralias, type);
            }

            event.stopImmediatePropagation;

            let y : Location = window.location;
            y.reload(true);
    
            return false;
        });
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
                            <input type="text" name="email" placeholder="E-mail address" required id="${this._idInputemail}">
                        </div>
                        </div>
                        <div class="field">
                        <div class="ui left icon input">
                            <i class="lock icon"></i>
                            <input type="password" name="password" placeholder="Password" required id="${this._idInputpwd}">
                        </div>
                        </div>
                        <div class="ui fluid large teal submit button" id="${this._idLoggonButton}">Login</div>
                    </div>

                    <div class="error message"></div>

                    </form>

                    <div class="ui message">
                        Pour s'enregistrer voir Nanie <a href="./inscription.html" target="_blank">Comptes</a>
                    </div>
                </div>
            </div>
            <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>

        `;
        return retour;
    }
}

