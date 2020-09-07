import { cExperience } from './Services/DB/cExperience';
import cMyUI from './cMyUI';
import encoderMd5 from 'crypto-js';



export default class cMyUI_Inscription extends cMyUI {
    private readonly _idLoggonButton : string = 'inscription_idinscriptionButton';
    private readonly _idInputemail: string = 'inscription_idNameInput';
    private readonly _idInputAlias: string = 'inscription_idAliasInput';
    private readonly _idInputpwd1: string = 'inscription_idPWD1Input';
    private readonly _idInputpwd2: string = 'inscription_idPWD2Input';
    private readonly _idInputShowPwd: string = 'inscription_idPWDShow';
    private readonly _idMessageInfo: string = 'inscription_idMessageInfo';
    

    constructor () {
        super('cMyUI_Inscription');
    }

    public addCallBackOnMyDialog(): void {
        let me : cMyUI_Inscription = this;
 
        // ------------------------------------------------------------------------------
        // pour l'UI sinon c'est moche
        // ------------------------------------------------------------------------------
        $('#root').addClass ('inscription');

        // ------------------------------------------------------------------------------
        // Creation de la personne
        // ------------------------------------------------------------------------------
        $(`#${me._idLoggonButton}`).on ('click', function (event : JQuery.ClickEvent) : boolean { 
            let alias : string = $(`#${me._idInputAlias}`).val() as string;
            let email : string = $(`#${me._idInputemail}`).val() as string;
            let pwd1 : string  = $(`#${me._idInputpwd1}`).val() as string;
            let pwd2 : string  = $(`#${me._idInputpwd2}`).val() as string;

            if (pwd1 != pwd2) {
                let onErrorMessage: string = `<div class="ui negative message ${me._idMessageInfo}"><i class="close icon"></i>`;
                onErrorMessage += `<div class="header"> Mot de passe </div> <p> mot de passe differents </p>`;
                onErrorMessage += '</div>';
                $(`#${me._idMessageInfo}`).append(onErrorMessage);

                $('.my_inscription_input').each (function(){
                        $(this).val('');
                });
            }
            else {
                // -------------------------------------------------------------
                // est ce que cette alias / email existe en DB ?
                // -------------------------------------------------------------
                let exitInDb : boolean = cExperience.isUserExistInDB (alias, email);
                if (exitInDb) {
                    let onErrorMessage: string = `<div class="ui negative message ${me._idMessageInfo}"><i class="close icon"></i>`;
                    onErrorMessage += `<div class="header"> User </div> <p> User existe deja en DB </p>`;
                    onErrorMessage += '</div>';
                    $(`#${me._idMessageInfo}`).append(onErrorMessage);    
                }
                else {
                    exitInDb = cExperience.createUserInDB (alias, email, encoderMd5.MD5(pwd1));
                    if (exitInDb) {
                        let onErrorMessage: string = `<div class="ui positive message ${me._idMessageInfo}"><i class="close icon"></i>`;
                        onErrorMessage += `<div class="header"> User </div> <p> OK user creer en DB </p>`;
                        onErrorMessage += '</div>';
                        $(`#${me._idMessageInfo}`).append(onErrorMessage);    
                    }
                    else {
                        let onErrorMessage: string = `<div class="ui negative message ${me._idMessageInfo}"><i class="close icon"></i>`;
                        onErrorMessage += `<div class="header"> User </div> <p> Impossible de creer ce user </p>`;
                        onErrorMessage += '</div>';
                        $(`#${me._idMessageInfo}`).append(onErrorMessage);    
                    }
                }

            }
            event.stopImmediatePropagation;
            return false;
        });


        // ------------------------------------------------------------------------------
        // call back pour voir les mot de passe
        // ------------------------------------------------------------------------------
        $(`#${me._idInputShowPwd}`).on ('click', function (event : JQuery.ClickEvent) : boolean { 
            let type : string = $(`#${me._idInputpwd1}`).attr ('type') as string;
            type = type.toLowerCase();

            if (type == 'text') {
                $('.my_pwd_input').attr ('type', 'password');
            }
            else {
                $('.my_pwd_input').attr ('type', 'text');
            }

            event.stopImmediatePropagation;
            return true;
        });

        // ------------------------------------------------------------------------------
        // call back pour fermer les messages
        // ------------------------------------------------------------------------------
        this.addCallBackOnMessage(this._idMessageInfo);
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
                                <input type="text" class="my_inscription_input" name="alias" placeholder="alias" id="${this._idInputAlias}">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" class="my_inscription_input" name="email" placeholder="E-mail address" required id="${this._idInputemail}">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" class="my_pwd_input my_inscription_input" name="password1" placeholder="Password1" required id="${this._idInputpwd1}">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" class="my_pwd_input my_inscription_input" name="password2" placeholder="Password2" required id="${this._idInputpwd2}">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui checkbox">
                                <input type="checkbox" name="showpassword" id="${this._idInputShowPwd}">
                                <label>Voir les mots de passe</label>
                            </div>
                        </div>


                        <div class="ui fluid large teal submit button" id="${this._idLoggonButton}">inscription</div>
                    </div>

                    <div id="${this._idMessageInfo}"></div>

                    </form>
                </div>
            </div>
            <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>

        `;
        return retour;
    }
}

