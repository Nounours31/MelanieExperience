/*
** @quick review 9/9/2020
** Copyright Nanie 2020 - licence MIT
**
** Cette classe est accessible via l'URL .../nanie/ apres le login
** C'est la page de creation de l'experience
** et de mise a jour
*/
import { cExperience } from './Services/DB/cExperience';
import { iResultatMessage, iGenotypeMessage } from './Services/DB/iOnMessageWithServer';
import { iMyHtmlInfo, cTools } from './infra/cTools';
import cMyUI from './cMyUI';
import cUIUtils from './Services/cUIUtils';


export default class cMyUI_MainTab_create extends cMyUI {
    // ---------------------------------------------------------
    // list de ancre (via les ID) pour JQuery et retourver mes dialoge dans la page
    // ---------------------------------------------------------
    private readonly _idCreationOKButton: string = 'cMyUI_MainTab_create_SaisieExperience_OKButton';
    private readonly _idCreationExperienceGroupOfInfo: string = 'cMyUI_MainTab_create_SaisieExperience_ExpIDGroup';
    private readonly _idCreationDateExp: string = 'cMyUI_MainTab_create_SaisieExperience_DateExp';
    private readonly _idCreationQui: string = 'cMyUI_MainTab_create_SaisieExperience_Qui';
    private readonly _idCreationDivForMessageInfo: string = 'cMyUI_MainTab_create_MainTab_DivForForm_Info';
    private readonly _idCreationExperienceNomPrefixe: string = 'cMyUI_MainTab_create_MainTab_UI_Info_ExperienceAsLettre';
    private readonly _idCreationExperienceExperiencetype: string = 'cMyUI_MainTab_create_MainTab_UI_Info__idExperienceExperiencetype';
    private readonly _idCreationExperienceClef: string = 'cMyUI_MainTab_create_MainTab_UI_Info_idExperienceClef';
    private readonly _idCreationExperienceNumero: string = 'cMyUI_MainTab_create_MainTab_UI_Info_idExperienceNumero';

    private readonly _My_Message_Classe : string = 'ClasseDesMessagesInfo';

    private readonly _idUpdateOKButton: string = 'cMyUI_MainTab_ajout_idOKButton';
    private readonly _idUpdateInputExp: string = 'cMyUI_MainTab_ajout_idInputExp';

    private readonly _idCreationExperience_drawInfoApresCreation: string = 'cMyUI_MainTab_ajout__idCreationExperience_drawInfoApresCreation';



    // ----------------------------------------------------
    // Nb genotype par defaut
    // ----------------------------------------------------
    private readonly _nbGenotype = 4;

    constructor () {
        super('cMyUI_MainTab_create');
    }


    // ===========================================================================================
    // La page est decoupe en 3 sections:
    //      - section 1: la creation de l'experience
    //      - section 2: l'ajout des resultats (appelle a tord 'update') sur une experience identifiee par son ExperienceID
    //      - section 3: une section qui fait echo a ce qui est creer en base (verif que creta + ajout est OK)
    // ===========================================================================================
    public draw (): string {
        let retour : string = '';

        // affichage de la zone de creation de l'experience
        retour += '<div style="margin-left: 10px;"><fieldset><legend> Cr&eacute;ation d\'une experience en base </legend>';
        retour += this.drawCreateDialog();
        retour += '</fieldset></div>';

        return retour;
    }






    // ===========================================================================================
    // La section de creation pure et dure
    // ===========================================================================================
    private drawCreateDialog(): string {
        // -----------------------------------------------
        // recup de la liste des personnes qui peuvent realiser une experience, et creation du select UI
        let DefaultPersonneNomInitiale: string = '';
        let infosForHTML = { 'class': 'ui compact selection dropdown', 'id': `${this._idCreationQui}` };
        let allPersonnesOption: string = cTools.BuildSelectFromTab(cExperience.getAllPersone(), infosForHTML, false);

        // -----------------------------------------------
        // recup des initales possibles d'une experience, et creation du select UI
        // -----------------------------------------------
        let AllExperienceInitialeOption: string = '';
        infosForHTML = { 'class': 'ui compact selection dropdown', 'id': `${this._idCreationExperienceExperiencetype}` };
        AllExperienceInitialeOption = cTools.BuildSelectFromTab(cExperience.getAllExperienceInitiale(), infosForHTML, true);



        // -----------------------------------------------
        // creation du dialogue
        // -----------------------------------------------
        let retour: string = `
            <form class="ui form">
                <!-- Experience ID -->
                <div class="field">
                    <label>Experience Id</label>
                    <div id="${this._idCreationExperienceGroupOfInfo}">
                        <div class="ui left labeled input">
                            <input type="text" value="${DefaultPersonneNomInitiale}" id="${this._idCreationExperienceNomPrefixe}">
                            <input type="number" value="0" id="${this._idCreationExperienceNumero}">
                            <p style="font-size: x-large; margin:auto;">-</p>
                            ${AllExperienceInitialeOption}
                            <input type="number" value="0" id="${this._idCreationExperienceClef}">
                        </div>
                    </div>
                </div>

                <!-- date de le Experience -->
                <div class="field">
                    <label>Date de l'experience</label>
                    <input type="date" name="date-exp" value="2020-10-01" min="2019-01-01" id="${this._idCreationDateExp}"/>
                </div>

                <!-- qui a fait le Experience -->
                <div class="field">
                    <label>Qui a realise l'experience?</label>
                    ${allPersonnesOption}
                </div>

                <!-- Zone a message  -->
                <div id="${this._idCreationDivForMessageInfo}"></div>

                <!-- Validation  -->
                <button class="ui button pink right floated" type="submit" id="${this._idCreationOKButton}">Cr&eacute;ation de l\'exp&eacute;rience !</button>
            </form>`;

        return retour;
    }


    // ===========================================================================================
    // La section de consultation vide tant que rien de creer
    // ===========================================================================================
    public drawInfoExperienceDialog(): string {
        let retour: string = `
            <div id="${this._idCreationExperience_drawInfoApresCreation}"></div>
        `;
        return retour;
    }




    // ===========================================================================================
    // Gestion des callback du dialog
    // ===========================================================================================
    public addCallBackOnMyDialog(): void {
        this.addCallBackOnMyDialog_create();
        return;
    }


    // ===========================================================================================
    // Gestion des callback de la section de creation de l'experience
    // Check si le contenu est valide et definition du nom de l'exprience
    // ===========================================================================================
    private addCallBackOnMyDialog_create(): void {
        this.checkFormContenu();
        this.lienExprienceId_NomManip();
        $(`#${this._idCreationQui}`).trigger('change');
    }


    // ===========================================================================================
    // ce callback me permet de mettre a jour le nom de l'experience lorsque le nom de la personne
    // qui a realiser l'experience change
    // ===========================================================================================
    private lienExprienceId_NomManip(): void {
        let me: cMyUI_MainTab_create = this;

        // --------------------------------------------------
        // la personne qui a fait l'exp change
        // --------------------------------------------------
        $(`#${this._idCreationQui}`).on('change', function (event) {

            let val: number = <number>$(`#${me._idCreationQui}`).val();
            let oValEntete : any = cExperience.getPersonneFromUid(val) as any;
            if ('nom' in oValEntete) {
                let x: string = oValEntete['nom'];
                $(`#${me._idCreationExperienceNomPrefixe}`).val(x.charAt(0));
                $(`#${me._idCreationExperienceGroupOfInfo}`).trigger('change');
            }
        });
    }

    // ===========================================================================================
    // Callback du OK - create experience
    //      1. check du contenu du formulaire
    //      2. envoie en DB si OK
    // ===========================================================================================
    private checkFormContenu(): void {
        let me: cMyUI_MainTab_create = this;
        $(`#${this._idCreationOKButton}`).on('click', function (event) {

            // les 3 champs a controler
            let date: string = <string>$(`#${me._idCreationDateExp}`).val();
            let qui: string = <string>$(`#${me._idCreationQui}`).val();

            // errurs si 1 manque
            let onError: boolean = false;
            let onErrorMessage: string = `<div class="ui negative message ${me._My_Message_Classe}"><i class="close icon"></i>`;
            if (date.length < 1) {
                onErrorMessage += `
                        <div class="header">
                            Pb de date
                        </div>
                        <p> Il faut choisir une date </p>`;
                onError = true;
            }
            onErrorMessage += '</div>';

            // affiche de l'erreur
            if (onError) {
                $(`#${me._idCreationDivForMessageInfo}`).append(onErrorMessage);
                $(`#${me._idCreationDivForMessageInfo}`).on('click', function () {
                    $(`.${me._My_Message_Classe}`).remove();
                });
            }
            else {
                // envoie en DB
                let experienceId: string = '';
                experienceId += $(`#${me._idCreationExperienceNomPrefixe}`).val();
                experienceId += $(`#${me._idCreationExperienceNumero}`).val();
                experienceId += '-' + $(`#${me._idCreationExperienceExperiencetype}`).val();
                experienceId += $(`#${me._idCreationExperienceClef}`).val();

                let id: number = cExperience.createDBExperience(experienceId, date, qui);
                if (id > 0) {

                    let onOKMessage: string = `<div class="ui positive message ${me._My_Message_Classe}"><i class="close icon"></i>`;
                    onOKMessage += `
                                <div class="header">
                                    Creation experience en DB -- OK
                                </div>
                                <p> ${experienceId}, ${date}, ${qui} </p>`;
                    onOKMessage += '</div>';
                    $(`#${me._idCreationDivForMessageInfo}`).append(onOKMessage);
                    $(`#${me._idCreationDivForMessageInfo}`).on('click', function () {
                        $(`.${me._My_Message_Classe}`).remove();
                    });
                    me._ctrl.setLastExp(experienceId, id);

                    // demande de mise a jour de la section 3  de consultation
                    me.UpdateDeLaZONEBilanViSuDBApresCreateOuAjout(id);
                }
                else {
                    alert('Impossible de mettre en base cette demande');
                }
            }
            event.stopPropagation();
            return false;
        });
    }



    // ==========================================================================
    // affichage de la zone d'info
    // deleguee dans une autre classe pour factorisation
    // ==========================================================================
    private UpdateDeLaZONEBilanViSuDBApresCreateOuAjout(id? : number) : void {

        // menage ...
        let me : cMyUI_MainTab_create = this;
        $(`#${me._idCreationExperience_drawInfoApresCreation}`).empty();

        // si pas d'info sur l'exp j'essaye de retrouve son nom dans la page
        if (id == undefined) {
            let expIdAsString : string = <string>$(`#${me._idUpdateInputExp}`).val();
            let uidExp : number = cExperience.getExperienceUidFromExperienceStringid(expIdAsString);
            id = uidExp;
        }

        // calcul de la page et update
        let deleteOn : boolean = true;
        $(`#${me._idCreationExperience_drawInfoApresCreation}`).append (cUIUtils.drawOnExperience(id, deleteOn));
        if (deleteOn)
            cUIUtils.addcallbackFordrawOnExperience (this._idUpdateOKButton);
        return;

    }
}

