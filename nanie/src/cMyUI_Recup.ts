import { cExperience } from './Services/DB/cExperience';
import cMyUI from './cMyUI';



export default class cMyUI_Recup extends cMyUI {
    private readonly _idLoggonButton : string = 'recup_idrecupButton';
    private readonly _idInputemail: string = 'recup_idNameInput';
    private readonly _idInputAlias: string = 'recup_idAliasInput';
    private readonly _idInputpwd1: string = 'recup_idPWD1Input';
    private readonly _idInputpwd2: string = 'recup_idPWD2Input';
    private readonly _idInputShowPwd: string = 'recup_idPWDShow';
    private readonly _idMessageInfo: string = 'recup_idMessageInfo';
    private readonly _idInputNom: string = 'recup_idNomInfo';
    

    constructor () {
        super('cMyUI_Recup');
    }

    public addCallBackOnMyDialog(): void {
        let me : cMyUI_Recup = this;
 
        // ------------------------------------------------------------------------------
        // pour l'UI sinon c'est moche
        // ------------------------------------------------------------------------------
        $('#root').addClass ('recup');

        // ------------------------------------------------------------------------------
        // Creation de la personne
        // ------------------------------------------------------------------------------
        $(`#${me._idLoggonButton}`).on ('click', function (event : JQuery.ClickEvent) : boolean { 
            let nom : string = $(`#${me._idInputNom}`).val() as string;
            let alias : string = $(`#${me._idInputAlias}`).val() as string;
            let email : string = $(`#${me._idInputemail}`).val() as string;
            let pwd1 : string  = $(`#${me._idInputpwd1}`).val() as string;
            let pwd2 : string  = $(`#${me._idInputpwd2}`).val() as string;

            let mode : string = me.getArg('mode');
            if (mode == 'navigo') {
                // ------------------------------
                // checks
                // ------------------------------
                // pwd
                let onErrorMessage: string = `<div class="ui negative message"><i class="close icon"></i>`;
                if ((pwd1 != pwd2) || (pwd1 == null) || (pwd1 == undefined) || (pwd1.length < 1)) {
                    onErrorMessage += `<div class="header"> Mot de passe </div> <p> mot de passe differents ou indefinis </p>`;
                    onErrorMessage += `</div>`;
                    $(`#${me._idMessageInfo}`).append(onErrorMessage);    
                    me.addCallBackOnMessage(me._idMessageInfo);    
                }
                else {
                    // mise a jour du mot de passe
                    cExperience.updatePwd (me.getArg('recup_token'), pwd1);

                    let y : Location = window.location;
                    y.reload(true);    
                }
            }
            else {
                let nom : string | null = $(`#${me._idInputNom}`).val() as string;
                let alias : string | null = $(`#${me._idInputAlias}`).val() as string;
                let email : string | null = $(`#${me._idInputemail}`).val() as string;
                let isOK : boolean = false;
                if ((nom != null) && (nom != undefined) && (nom.length > 1)) {
                    isOK = true;
                }
                else {
                    nom = null;
                } 
                if ((alias != null) && (alias != undefined) && (alias.length > 1)) {
                    isOK = true;
                }
                else {
                    alias = null;
                }
                if ((email != null) && (email != undefined) && (email.length > 1)) {
                    isOK = true;
                }
                else {
                    email = null;
                }
                if (!isOK) {
                    let onErrorMessage: string = `<div class="ui negative message"><i class="close icon"></i>`;
                    onErrorMessage += `<div class="header"> Identifiant </div> <p> Il faut au moins un des 3 champs rempli pour identifier la personne </p>`;
                    onErrorMessage += `</div>`;
                    $(`#${me._idMessageInfo}`).append(onErrorMessage);    
                    me.addCallBackOnMessage(me._idMessageInfo);                        
                }
                else {
                    cExperience.sendTokenForPasswordLost (nom, alias, email);
                    let y : Location = window.location;
                    y.reload(true);    
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
    }


    public draw (): string {
        let retour : string = '';
        let recup_token : string = this.getArg('recup_token');
        if ( recup_token == '') {
            retour = `
                <div class="ui middle aligned center aligned grid recup">
                    <div class="column recup">
                        <h2 class="ui image header recup">
                            <div class="content">
                                Un mail lie au compte sera envoy&eamp;
                            </div>
                        </h2>
                        <form action="" method="get" class="ui large form">
                            <div class="ui  secondary  segment">
                                <div class="field">
                                    <div class="ui labeled input">
                                        <div class="ui label">
                                            Nom
                                        </div>
                                        <input type="text" class="my_recup_input" name="nom" placeholder="nom" id="${this._idInputNom}">
                                    </div>
                                </div>
                                <div class="ui horizontal divider">
                                Ou
                                </div>
                                <div class="field">
                                    <div class="ui labeled input">
                                        <div class="ui label">
                                            Alias de login (optionel)
                                        </div>
                                        <input type="text" class="my_recup_input" name="alias" placeholder="alias" id="${this._idInputAlias}">
                                    </div>
                                </div>
                                <div class="ui horizontal divider">
                                Ou
                                </div>
                                <div class="field">
                                    <div class="ui labeled input">
                                        <div class="ui label">
                                            EMail
                                        </div>
                                        <input type="text" class="my_recup_input" name="email" placeholder="E-mail address" required id="${this._idInputemail}">
                                    </div>
                                </div>

                                <div class="ui fluid large teal submit button" id="${this._idLoggonButton}">recup</div>
                            </div>
                            <div id="${this._idMessageInfo}"></div>
                        </form>
                    </div>
                </div>
                <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>
            `;
        }
        else {
            retour = `
                <div class="ui middle aligned center aligned grid recup">
                    <div class="column recup">
                        <h2 class="ui image header recup">
                            <div class="content">
                                Nouveau mot de passe
                            </div>
                        </h2>
                        <form action="" method="get" class="ui large form">
                            <div class="ui  secondary  segment">
                            <div class="field">
                                <div class="ui labeled input">
                                    <div class="ui label">
                                        Mot de passe
                                    </div>
                                    <input type="password" class="my_pwd_input my_inscription_input" name="password1" placeholder="Password1" required id="${this._idInputpwd1}">
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui labeled input">
                                    <div class="ui label">
                                        Mot de passe (verif)
                                    </div>
                                    <input type="password" class="my_pwd_input my_inscription_input" name="password2" placeholder="Password2" required id="${this._idInputpwd2}">
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui checkbox">
                                    <input type="checkbox" name="showpassword" id="${this._idInputShowPwd}">
                                    <label>Voir les mots de passe</label>
                                </div>
                            </div>
                            <div class="ui fluid large teal submit button" id="${this._idLoggonButton}">Mise a jour mot de passe</div>
                            </div>
                            <div id="${this._idMessageInfo}"></div>
                        </form>
                    </div>
                </div>
                <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>
            `;
        }
        return retour;
    }
}

