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


export default class cMyUI_MainTab_update extends cMyUI {
    // ---------------------------------------------------------
    // list de ancre (via les ID) pour JQuery et retourver mes dialoge dans la page
    // ---------------------------------------------------------
    private readonly _idCreationOKButton: string = 'cMyUI_MainTab_update_SaisieExperience_OKButton';
    private readonly _idCreationExperienceGroupOfInfo: string = 'cMyUI_MainTab_update_SaisieExperience_ExpIDGroup';
    private readonly _idCreationDateExp: string = 'cMyUI_MainTab_update_SaisieExperience_DateExp';
    private readonly _idCreationQui: string = 'cMyUI_MainTab_update_SaisieExperience_Qui';
    private readonly _idCreationDivForMessageInfo: string = 'cMyUI_MainTab_update_MainTab_DivForForm_Info';
    private readonly _idCreationExperienceNomPrefixe: string = 'cMyUI_MainTab_update_MainTab_UI_Info_ExperienceAsLettre';
    private readonly _idCreationExperienceExperiencetype: string = 'cMyUI_MainTab_update_MainTab_UI_Info__idExperienceExperiencetype';
    private readonly _idCreationExperienceClef: string = 'cMyUI_MainTab_update_MainTab_UI_Info_idExperienceClef';
    private readonly _idCreationExperienceNumero: string = 'cMyUI_MainTab_update_MainTab_UI_Info_idExperienceNumero';

    private readonly _My_Message_Classe : string = 'ClasseDesMessagesInfo';

    private readonly _idUpdateOKButton: string = 'cMyUI_MainTab_ajout_idOKButton';
    private readonly _idUpdateSelectOnchromosome1: string = 'cMyUI_MainTab_ajout_idSelectOnchromosome1';
    private readonly _idUpdateSelectOnchromosome2: string = 'cMyUI_MainTab_ajout_idSelectOnchromosome2';
    private readonly _idUpdateSelectOnchromosome3: string = 'cMyUI_MainTab_ajout_idSelectOnchromosome3';
    private readonly _idUpdateSelectOnchromosome4: string = 'cMyUI_MainTab_ajout_idSelectOnchromosome4';
    private readonly _idUpdateSelectOnTestType: string = 'cMyUI_MainTab_ajout_idSelectOnTestType';
    private readonly _idUpdateSelectOnMarquage: string = 'cMyUI_MainTab_ajout_idSelectOnMarquage';
    private readonly _idUpdateSelectOnTerritoire: string = 'cMyUI_MainTab_ajout_idSelectOnTerritoire';
    private readonly _idUpdateInputNbEchantillon: string = 'cMyUI_MainTab_ajout_idInputNbEchantillon';
    private readonly _idUpdateInputSGeneral: string = 'cMyUI_MainTab_ajout__idInputSGeneral';
    private readonly _idUpdateInputSComparatif: string = 'cMyUI_MainTab_ajout_idInputSComparatif';


    private readonly _idCreationExperience_drawInfoApresCreation: string = 'cMyUI_MainTab_ajout__idCreationExperience_drawInfoApresCreation';

    private readonly _idInputUpdateFile_ExpIDVal: string = 'cMyUI_MainTab_updtaeFileInput';
    private readonly _idInputUpdateFile_SelectFiles: string = 'cMyUI_MainTab_ajout_updtaeFilexxxx';
    private readonly _idInputUpdateFile_DivMessage: string = 'cMyUI_MainTab_ajout__idCzzzzzzzz';
    private readonly _idInputUpdateFile_okButton: string = 'cMyUI_MainTab_ajout__idCeeeeeeeeee';
    private readonly _idInputUpdate_CheckExpButton: string = 'cMyUI_MainTab_update_VerifExperience';
    private readonly _idInputUpdate_ChangeExperienceName: string = 'cMyUI_MainTab_update_ChangeExperienceName';
    private readonly _idInputUpdate_DivToHiddeDialogIfExpUnValide: string = 'cMyUI_MainTab_update__idInputUpdate_DivToHiddeDialogIfExpUnValide';

    // ----------------------------------------------------
    // Nb genotype par defaut
    // ----------------------------------------------------
    private readonly _nbGenotype = 8;

    // ----------------------------------------------------
    // Experience validee ?
    // ----------------------------------------------------
    private _isExperienceChecked : boolean = false;



    constructor () {
        super('cMyUI_MainTab_update');
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
        retour += '<div style="margin-left: 10px;"><fieldset><legend> Id de l\'experience &agrave; modifier</legend>';
        retour += `<div class="ui labeled input" >
                        <div class="ui label" >
                            Experience Id
                        </div>
                        <input type = "text" placeholder = "[lettre][chiffre]-[lettre][chiffre]" id = "${this._idInputUpdateFile_ExpIDVal}" />
                        <button class="ui button green right floated" type="submit" id="${this._idInputUpdate_CheckExpButton}">Verif de l'experience</button>
                        <!-- Change  -->
                        <button class="ui button red right floated" type="submit" id="${this._idInputUpdate_ChangeExperienceName}">Changement d'experience</button>
                    </div>`;
        retour += '</fieldset></div>';

        // la div qiu permet de cacher le dialogue si l'exp n'est pas valide
        retour += `<div id="${this._idInputUpdate_DivToHiddeDialogIfExpUnValide}">`;

        // Le separateur
        retour += '<div class="ui horizontal divider">Fichiers associ&eacute;s</div>';

        // affichage de la zone de mise a jour de l'experience
        retour += '<div style="margin-left: 10px;"><fieldset><legend> Mise &agrave; jour des fichiers associ&eacute;s &agrave; une experience en base </legend>';
        retour += this.drawUpdateFichier();
        retour += '</fieldset></div>';

        // Le separateur
        retour += '<div class="ui horizontal divider">G&eacute;notypes associ&eacute;s</div>';

        // affichage de la zone de mise a jour de l'experience
        retour += '<div style="margin-left: 10px;"><fieldset><legend> Mise &agrave; jour des g&eacute;notypes associ&eacute;s &agrave; une experience en base </legend>';
        retour += this.drawUpdateDialog();
        retour += '</fieldset></div>';

        // affichage de la zone info de l'experience
        retour += '<div style="margin-left: 10px;"><fieldset class="visuexperience"><legend> En base: </legend>';
        retour += this.drawInfoExperienceDialog();
        retour += '</fieldset></div>';


        // fin de la div qiu permet de cacher le dialogue si l'exp n'est pas valide
        retour += '</div>';
        return retour;
    }



    // ===========================================================================================
    // La section de mise a jour des fichiers de l'experiences
    // ===========================================================================================
    private drawUpdateFichier(): string {
        // -----------------------------------------------
        // creation du dialogue
        // -----------------------------------------------
        let retour: string = `
            <form class="ui form">
                <!-- Fichier associed  -->
                <div class="field">
                    <label>Lien vers les images</label>
                    <input type="file" name="expImage" accept="*" multiple id="${this._idInputUpdateFile_SelectFiles}">
                </div>

                <!-- Zone a message  -->
                <div id="${this._idInputUpdateFile_DivMessage}"></div>

                <!-- Validation  -->
                <button class="ui button pink right floated" type="submit" id="${this._idInputUpdateFile_okButton}">Ajout de fichier</button>
            </form>`;

        return retour;
    }





    // ===========================================================================================
    // La section d'ajout des experiences
    // ===========================================================================================
    private drawUpdateDialog(): string {
        let retour: string;

        // ----------------------------------------------------
        // Nb genotype par defaut
        // ----------------------------------------------------
        const nbLigne = this._nbGenotype;

        // ----------------------------------------------------
        // Les infos a afficher dans l'UI
        // ----------------------------------------------------
        let infosForHTML: iMyHtmlInfo;
        let selectchromosome1: string[] = ['', '', '', ''];
        let selectchromosome2: string[] = ['', '', '', ''];
        let selectchromosome3: string[] = ['', '', '', ''];
        let selectchromosome4: string[] = ['', '', '', ''];
        let InputNbEchantillon: string[] = ['', '', '', ''];
        let selectTypeTest: string;
        let selectMarquage: string;
        let selectTerritoire: string;
        let InputSGeneral: string;
        let InputSComparatif: string;

        // ----------------------------------------------------
        // Recup des info en DB et construction des Select generiques
        // ----------------------------------------------------
        for (let i = 0; i < nbLigne; i++) {
            infosForHTML = { 'class': 'mySelect', 'id': `${this._idUpdateSelectOnchromosome1}_${i}` };
            selectchromosome1[i] = cTools.BuildSelectFromTab(cExperience.getAllchromosome1(), infosForHTML);

            infosForHTML = { 'class': 'mySelect', 'id': `${this._idUpdateSelectOnchromosome2}_${i}` };
            selectchromosome2[i] = cTools.BuildSelectFromTab(cExperience.getAllchromosome2(), infosForHTML);

            infosForHTML = { 'class': 'mySelect', 'id': `${this._idUpdateSelectOnchromosome3}_${i}` };
            selectchromosome3[i] = cTools.BuildSelectFromTab(cExperience.getAllchromosome3(), infosForHTML);

            infosForHTML = { 'class': 'mySelect', 'id': `${this._idUpdateSelectOnchromosome4}_${i}` };
            selectchromosome4[i] = cTools.BuildSelectFromTab(cExperience.getAllchromosome4(), infosForHTML);

            infosForHTML = { 'class': 'myInputInt', 'type': 'number', 'id': `${this._idUpdateInputNbEchantillon}_${i}` };
            InputNbEchantillon[i] = cTools.BuildInputInt('0', infosForHTML);
        }
        infosForHTML = { 'class': 'myInputFloat', 'type': 'number', 'id': `${this._idUpdateInputSGeneral}`, 'placeholder': '1.79e-11' };
        InputSGeneral = cTools.BuildInputInt('1', infosForHTML);

        infosForHTML = { 'class': 'myInputFloat', 'type': 'number', 'id': `${this._idUpdateInputSComparatif}`, 'placeholder': '1.79e-11' };
        InputSComparatif = cTools.BuildInputInt('1', infosForHTML);


        infosForHTML = { 'class': 'mySelect', 'id': `${this._idUpdateSelectOnTestType}` };
        selectTypeTest = cTools.BuildSelectFromTab(cExperience.getAllTestType(), infosForHTML);

        infosForHTML = { 'class': 'mySelect', 'id': `${this._idUpdateSelectOnMarquage}` };
        selectMarquage = cTools.BuildSelectFromTab(cExperience.getAllMarquage(), infosForHTML);

        infosForHTML = { 'class': 'mySelect', 'id': `${this._idUpdateSelectOnTerritoire}` };
        selectTerritoire = cTools.BuildSelectFromTab(cExperience.getAllTerritoire(), infosForHTML);


        // ----------------------------------------------------
        // Contructin de l'UI
        // ----------------------------------------------------
        retour = `
            <form class="ui form">
                <button class="ui button pink right floated" type="submit" id="${this._idUpdateOKButton}">OK !</button>
                <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Genotype</th><th>territoire</th><th>chromosomesome 1</th> <th>chromosomesome 2</th> <th>chromosomesome 3</th><th>chromosomesome 4</th>
                            <th>Nb Echantillon</th><th>Marquage</th><th>S general</th><th>S comparatif</th><th>Type test</th>
                    </tr>
                </thead>
                <tbody>`;
        for (let i = 0; i < nbLigne; i++) {
            if (i == 0) {
                retour += `
                    <tr>
                        <td>G ${i + 1}</td>
                            <!-- le territoire de tous les chromosomes -->
                            <td rowspan="${nbLigne}">${selectTerritoire}</td>

                            <!-- les chromosomes -->
                            <td>${selectchromosome1[i]}</td><td>${selectchromosome2[i]}</td><td>${selectchromosome3[i]}</td><td>${selectchromosome4[i]}</td> <td>${InputNbEchantillon[i]}</td>

                            <!-- les info de tous les chromo -->
                            <td rowspan="${nbLigne}">${selectMarquage}</td>
                            <td rowspan="${nbLigne}">${InputSGeneral}</td>
                            <td rowspan="${nbLigne}">${InputSComparatif}</td>
                            <td rowspan="${nbLigne}">${selectTypeTest}</td>
                    </tr>`;
            }
            else {
                retour += `
                    <tr>
                        <td>G ${i + 1}</td>

                        <!-- les chromosomes -->
                        <td>${selectchromosome1[i]}</td><td>${selectchromosome2[i]}</td><td>${selectchromosome3[i]}</td><td>${selectchromosome4[i]}</td><td>${InputNbEchantillon[i]}</td>
                    </tr>`;
            }
        }
        retour += `
                </tbody>
                </table>
            </form>
        `;

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
        this.addCallBackOnMyDialog_CheckIdExp();
        this.addCallBackOnMyDialog_ajoutFiles();
        this.addCallBackOnMyDialog_ajout();
        return;
    }
    
    private addCallBackOnMyDialog_CheckIdExp() : void {
        let me: cMyUI_MainTab_update = this;
 
        $(`#${this._idInputUpdate_CheckExpButton}`).on('click', function (event: any) {
            // Experience ID
            let ExpIdName: string = $(`#${me._idInputUpdateFile_ExpIDVal}`).val() as string;
            if ((ExpIdName == null) || (ExpIdName == undefined) || (ExpIdName.length < 5)) {
                alert('Il faut une experience Id');
            }
            else {
                let idExp: number = cExperience.getExperienceUidFromExperienceStringid(ExpIdName);
                if (idExp > 0) {
                    me.UpdateDeLaZONEBilanViSuDBApresupdateOuAjout(idExp);
                    me._isExperienceChecked = true;

                    $(`#${me._idInputUpdateFile_ExpIDVal}`).prop('disabled', true);
                    $(`#${me._idInputUpdate_CheckExpButton}`).prop('disabled', true);
                    $(`#${me._idInputUpdate_ChangeExperienceName}`).prop('disabled', false);

                    $(`#${me._idInputUpdate_DivToHiddeDialogIfExpUnValide}`).show();
                }
                else {
                    alert('Il n\'y a pas d\'experience avec cet ID en base');
                }
            }
        });

        $(`#${this._idInputUpdate_ChangeExperienceName}`).on('click', function (event: any) {
            // Experience ID
            $(`#${me._idInputUpdateFile_ExpIDVal}`).val('');
            me._isExperienceChecked = false;

            $(`#${me._idInputUpdateFile_ExpIDVal}`).prop('disabled', false);
            $(`#${me._idInputUpdate_CheckExpButton}`).prop('disabled', false);
            $(`#${me._idInputUpdate_ChangeExperienceName}`).prop('disabled', true);

            $(`#${me._idInputUpdate_DivToHiddeDialogIfExpUnValide}`).hide();
        });

        $(`#${this._idInputUpdate_ChangeExperienceName}`).trigger('click');
    }


    // ===========================================================================================
    // Gestion des callback de la section de l'updtae des fichier.
    // Je dois juste brancher les OK Ajout
    // ===========================================================================================
    private addCallBackOnMyDialog_ajoutFiles(): void {
        let me: cMyUI_MainTab_update = this;
        $(`#${this._idInputUpdateFile_okButton}`).on('click', function (event : any) {
            let files: FileList = $(`#${me._idInputUpdateFile_SelectFiles}`).prop('files');
            if (files.length < 1) {
                alert ('Il faut choisir au moins un fichier');
            }
            else {
                // si experience cree, on pousse les fichiers dessus
                let ExpIdName : string = $(`#${me._idInputUpdateFile_ExpIDVal}`).val() as string;
                if ((ExpIdName == null) || (ExpIdName == undefined) || (ExpIdName.length < 5)) {
                    alert('Il faut une experience Id');
                }
                else {
                    let idExp: number = cExperience.getExperienceUidFromExperienceStringid(ExpIdName);
                    if (idExp > 0) {
                        cExperience.uploadFiles(idExp, files);

                        // nettoyage de la zone de fichiers
                        $(`#${me._idInputUpdateFile_SelectFiles}`).val('');

                        // demande de mise a jour de la section 3  de consultation
                        me.UpdateDeLaZONEBilanViSuDBApresupdateOuAjout(idExp);
                    }
                    else {
                        alert('Il n\'y a pas d\'experience avec cet ID en base');
                    }
                }
            }

            event.stopPropagation();
            return false;
        });
    }




    // ===========================================================================================
    // Callback du OK - update experience [ajout de resultats]
    //      1. check du contenu du formulaire
    //      2. envoie en DB si OK
    // ===========================================================================================
    private addCallBackOnMyDialog_ajout(): void {
        let me: cMyUI_MainTab_update = this;

        // -------------------------------------------
        // call back de lecture du formulaire pour l'envoye en db
        // check et push en DB
        // --------------------------------------------
        $(`#${me._idUpdateOKButton}`).on('click', function (event: JQuery.ClickEvent) {

            // lecture des infos
            let allInfosFromPage: iResultatMessage = cExperience.create_iResultatMessage();
            allInfosFromPage.experiencestringid = <string>$(`#${me._idInputUpdateFile_ExpIDVal}`).val();
            allInfosFromPage.idexperience = cExperience.getExperienceUidFromExperienceStringid(allInfosFromPage.experiencestringid);

            allInfosFromPage.marquage = <number>$(`#${me._idUpdateSelectOnMarquage}`).val();
            allInfosFromPage.territoire = <number>$(`#${me._idUpdateSelectOnTerritoire}`).val();
            allInfosFromPage.SComparatif = <number>$(`#${me._idUpdateInputSComparatif}`).val();
            allInfosFromPage.SGeneral = <number>$(`#${me._idUpdateInputSGeneral}`).val();
            allInfosFromPage.typedetest = <number>$(`#${me._idUpdateSelectOnTestType}`).val();

            let nbValuatedGenotype: number = 0;
            for (let i = 0; i < me._nbGenotype; i++) {
                let allInfosFromGenotype: iGenotypeMessage = cExperience.create_iGenotypeMessage();
                allInfosFromGenotype.chromosome1 = <number>$(`#${me._idUpdateSelectOnchromosome1}_${i}`).val();
                allInfosFromGenotype.chromosome2 = <number>$(`#${me._idUpdateSelectOnchromosome2}_${i}`).val();
                allInfosFromGenotype.chromosome3 = <number>$(`#${me._idUpdateSelectOnchromosome3}_${i}`).val();
                allInfosFromGenotype.chromosome4 = <number>$(`#${me._idUpdateSelectOnchromosome4}_${i}`).val();
                allInfosFromGenotype.nbechantillon = <number>$(`#${me._idUpdateInputNbEchantillon}_${i}`).val();
                if ((allInfosFromPage.Genotype != null) && (allInfosFromGenotype.nbechantillon > 0)) {
                    allInfosFromPage.Genotype.push(allInfosFromGenotype);
                    nbValuatedGenotype++;
                }

                // reset des champs echantillons a 0 ...
                $(`#${me._idUpdateInputNbEchantillon}_${i}`).val(0);
            }
            allInfosFromPage.NbGenotype = nbValuatedGenotype;

            // push en DB des info
            let id = cExperience.updateDBExperience(allInfosFromPage);

            // update de la visu de l'exp depuis la DB
            me.UpdateDeLaZONEBilanViSuDBApresupdateOuAjout(allInfosFromPage.idexperience);


            event.stopImmediatePropagation();
            return false;
        });


        // -------------------------------------------
        // USER_EVENT
        // call back du user event envoye par le delete d'un objet afin de demander le redraw de la section info (section 3)
        // --------------------------------------------
        $(`#${me._idUpdateOKButton}`).on('Event_DeleteFileOrGenotype', function (event: any) {
            // recherche de l'id de l'exp
            let allInfosFromPage: iResultatMessage = cExperience.create_iResultatMessage();
            allInfosFromPage.experiencestringid = <string>$(`#${me._idInputUpdateFile_ExpIDVal}`).val();
            allInfosFromPage.idexperience = cExperience.getExperienceUidFromExperienceStringid(allInfosFromPage.experiencestringid);

            // update de la visu de l'exp depuis la DB
            me.UpdateDeLaZONEBilanViSuDBApresupdateOuAjout(allInfosFromPage.idexperience);
            event.stopImmediatePropagation();
            return false;
        });
    }

    // ==========================================================================
    // affichage de la zone d'info
    // deleguee dans une autre classe pour factorisation
    // ==========================================================================
    private UpdateDeLaZONEBilanViSuDBApresupdateOuAjout(id? : number) : void {

        // menage ...
        let me : cMyUI_MainTab_update = this;
        $(`#${me._idCreationExperience_drawInfoApresCreation}`).empty();

        // si pas d'info sur l'exp j'essaye de retrouve son nom dans la page
        if (id == undefined) {
            let expIdAsString: string = <string>$(`#${me._idInputUpdateFile_ExpIDVal}`).val();
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

