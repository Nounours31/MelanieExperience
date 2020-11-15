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


interface iObjectifOfExp {
    id?: number;
    objectifAsInt?: number;
    objectif?: string;
    idobjectif?: number;
    TestAsLetter?: string;
    test?: string;
    experiencestringid?:string;
}

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


    private readonly _idInputUpdateInfos_okButton: string = 'cMyUI_MainTab_update__idInputUpdate_BouttonPOurAjoutdeInfo';
    private readonly _idTableOfAllInfo: string = 'cMyUI_MainTab_update__idInputUpdate__idTableOfAllInfo';
    private readonly _idTextEreaForNewObjectif: string = 'cMyUI_MainTab_update__idInputUpdate___idTextEreaForNewObjectif';
    private readonly _idTextEreaForNewTest: string = 'cMyUI_MainTab_update__idInputUpdate___idTextEreaForNewTest';
    
    
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
        retour += '<div class="ui horizontal divider">Infos (Objectifs/Tests) associee </div>';

        // affichage de la zone de mise a jour de l'experience
        retour += '<div style="margin-left: 10px;"><fieldset><legend> Mise &agrave; jour des infos associ&eacute;s &agrave; une experience en base </legend>';
        retour += this.drawUpdateInfosAssociees();
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
    // La section de mise a jour des fichiers de l'experiences
    // ===========================================================================================
    private drawUpdateInfosAssociees(): string {
        // -----------------------------------------------
        // creation du dialogue
        // -----------------------------------------------
        let retour: string = `
            <form class="ui form">
            <form class="ui form">
                <table class="ui celled table">
                <thead>
                    <tr>
                        <th>ID</th> <th>Famille</th>    <th>Objectif</th> <th>Test</th> <th>Info Test</th>
                    </tr>
                </thead>
                <tbody id="${this._idTableOfAllInfo}">
                </tbody>
                </table>
                <!-- Validation  -->
                <button class="ui button pink right floated" type="submit" id="${this._idInputUpdateInfos_okButton}">Update des infos</button>
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
        this.addCallBackOnUpdateInfosAssociees();
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
                    me.UpdateDeLaZONEObjectifEtTestOnExperience(idExp);
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
    // Gestion des callback de la section de l'updtae des fichier.
    // Je dois juste brancher les OK Ajout
    // ===========================================================================================
    private addCallBackOnUpdateInfosAssociees(): void {
        let me: cMyUI_MainTab_update = this;

        $(`#${me._idInputUpdateInfos_okButton}`).on('click', function (event : JQuery.ClickEvent) : boolean {
            let newObectif: string = $(`#${me._idTextEreaForNewObjectif}`).val() as string;
            let newTest: string = $(`#${me._idTextEreaForNewTest}`).val() as string;

            let objectifId: number = Number.parseInt ($(`#${me._idTextEreaForNewObjectif}`).attr('name') as string);
            let testId: number = Number.parseInt($(`#${me._idTextEreaForNewTest}`).attr('name') as string);
    
            let isUpdated : boolean = false;
            if ((newObectif.length > 1) && (objectifId > 0)) {
                newObectif = cTools.mysql_real_escape_string(newObectif);
                let sql: string = `update experience_objectif set objectif='${newObectif}' where (id = ${objectifId})`;
                cExperience.launchSQL(sql);
                isUpdated = true;
            }
            if ((newTest.length > 1) && (objectifId > 0) && (testId > 0)) {
                newTest = cTools.mysql_real_escape_string(newTest);
                let sql: string = `update experience_otestonobjectif set test='${newTest}' where (id = ${testId})`;
                cExperience.launchSQL(sql);
                isUpdated = true;
            }
            if (isUpdated)
                alert ('Update done! F5 de l apage pour etre sur ... c\'est pap\'s qui code');
            event.stopImmediatePropagation();
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
        if (id === undefined) {
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


    // ==========================================================================
    // affichage de la zone d'info
    // deleguee dans une autre classe pour factorisation
    // ==========================================================================

    private UpdateDeLaZONEObjectifEtTestOnExperience(id?: number): void {

        // --------------------------
        // menage ...
        // --------------------------
        let me: cMyUI_MainTab_update = this;
        $(`#${me._idTableOfAllInfo}`).empty();

        // --------------------------
        // si pas d'info sur l'exp j'essaye de retrouve son nom dans la page
        // --------------------------
        let expIdAsString: string = <string>$(`#${me._idInputUpdateFile_ExpIDVal}`).val();
        if (id === undefined) {
            let uidExp: number = cExperience.getExperienceUidFromExperienceStringid(expIdAsString);
            id = uidExp;
        }

        // --------------------------
        // Recup de l'Objectif Id (le premier entier du nom)
        // --------------------------
        let ObjectifAsInt: string = expIdAsString.substring(1, expIdAsString.indexOf('-'));

        // --------------------------
        // Recup du testletter & testId
        // --------------------------
        let TestAsLetter: string = expIdAsString.substring(expIdAsString.indexOf('-') + 1, expIdAsString.indexOf('-') + 2);
        let TestId: string = expIdAsString.substring(0, expIdAsString.indexOf('-') + 2);

        // --------------------------
        // recup de l'objectif associe a ce ObjectifAsInt
        // --------------------------
        let sql = `SELECT id, objectif FROM experience_objectif where (objectifAsInt = ${ObjectifAsInt})`;
        console.log ('sql: ' + sql);
        let objectifOfExp: iObjectifOfExp[] = cExperience.launchSQL(sql);
        let objectif: string = objectifOfExp[0].objectif as string;
        let objectifId: number = objectifOfExp[0].id as number;

        // --------------------------
        // recup de l'ensemble des exp de meme objectif
        // --------------------------
        sql = `select exp.experiencestringid`;
        sql += ' from experience exp ';
        sql += ` where ( (substring(exp.experiencestringid, 2, INSTR(exp.experiencestringid, '-')-2)) = ${ObjectifAsInt})`;
        console.log('sql: ' + sql);
        objectifOfExp = cExperience.launchSQL(sql);
        let allExp : string[] = [];
        objectifOfExp.forEach(element => {
            allExp.push(element.experiencestringid as string);
        });
        let nbExp: number = allExp.length;


        // --------------------------
        // recup du test asscocie a cette experience
        // --------------------------
        sql = `SELECT id, test FROM experience_otestonobjectif where ((idobjectif = ${objectifId}) and (TestAsLetter = '${TestAsLetter}'))`;
        console.log('sql: ' + sql);
        objectifOfExp = cExperience.launchSQL(sql);
        let test: string = objectifOfExp[0].test as string;
        let testId: number = objectifOfExp[0].id as number;

        // --------------------------
        // recup de l'ensemble des exp de meme test
        // --------------------------
        sql = `select exp.experiencestringid`;
        sql += ' from experience exp ';
        sql += ` where (`;
        sql += ` ((substring(exp.experiencestringid, 2, INSTR(exp.experiencestringid, '-')-2)) = ${ObjectifAsInt}) `;
        sql += ' and ';
        sql += ` ((substring(exp.experiencestringid, INSTR(exp.experiencestringid, '-')+1, 1)) = '${TestAsLetter}')`;
        sql += ')';
        console.log('sql: ' + sql);
        objectifOfExp = cExperience.launchSQL(sql);
        let allExpWithThisTest: string = '';
        objectifOfExp.forEach(element => {
            allExpWithThisTest += element.experiencestringid as string;
            allExpWithThisTest += '<br/>';
        });

        // --------------------------
        // --------------------------
        let dialog: string = '<tr>';
        dialog += `<tr><td rowspan="${nbExp}">${ObjectifAsInt}</td><td>${allExp[0]}</td><td rowspan="${nbExp}">`;
        dialog += `<strong style="color:#008c25;">${objectif}</strong><br/>`;
        dialog += `<div class="pure-control-group">
                        <label for="${this._idTextEreaForNewObjectif}">New ?</label>
                        <input type="text" id="${this._idTextEreaForNewObjectif}" name="${objectifId}" placeholder="..." />
                    </div>`;
        dialog += `</td><td rowspan="${nbExp}">${allExpWithThisTest}</td><td rowspan="${nbExp}">`;
        dialog += `<strong style="color:#008c25;">${test}</strong><br/>`;
        dialog += `<div class="pure-control-group">
                        <label for="${this._idTextEreaForNewTest}">New ?</label>
                        <input type="text" id="${this._idTextEreaForNewTest}" name="${testId}" placeholder="..." />
                    </div>`;
        dialog += `</td></tr>`;

        for (let j = 1; j < nbExp; j++)
            dialog += `<tr><td>${allExp[j]}</td></tr>`;

        $(`#${me._idTableOfAllInfo}`).html(dialog);
    }
}

