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
    private readonly _idCreationFiles: string = 'cMyUI_MainTab_create_SaisieExperience_Files';
    private readonly _idCreationDivForMessageInfo: string = 'cMyUI_MainTab_create_MainTab_DivForForm_Info';
    private readonly _idCreationExperienceNomPrefixe: string = 'cMyUI_MainTab_create_MainTab_UI_Info_ExperienceAsLettre';
    private readonly _idCreationExperienceExperiencetype: string = 'cMyUI_MainTab_create_MainTab_UI_Info__idExperienceExperiencetype';
    private readonly _idCreationExperienceClef: string = 'cMyUI_MainTab_create_MainTab_UI_Info_idExperienceClef';
    private readonly _idCreationExperienceNumero: string = 'cMyUI_MainTab_create_MainTab_UI_Info_idExperienceNumero';

    private readonly _My_Message_Classe : string = 'ClasseDesMessagesInfo';

    private readonly _idUpdateOKButton: string = 'cMyUI_MainTab_ajout_idOKButton';
    private readonly _idUpdateInputExp: string = 'cMyUI_MainTab_ajout_idInputExp';
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
        return retour;
    }




    // ===========================================================================================
    // La section de creation pure et dure
    // ===========================================================================================
    private drawCreateDialog(): string {
        // -----------------------------------------------
        // recup de la liste des personnes qui peuvent realiser une experience, et creation du select UI
        // -----------------------------------------------
        let DefaultPersonneNom: string = '';
        let DefaultPersonneNomInitiale: string = '';
        let allPersonnesOption: string = '';
        let allPersonnes: string[] = cExperience.getAllPersone();
        let selected : string = 'selected';
        for (let i : number  = 0; i < allPersonnes.length; i++) {
            selected = '';
            if (i == 0) {
                selected = 'selected';
                DefaultPersonneNom = allPersonnes[i];
                DefaultPersonneNomInitiale = DefaultPersonneNom.charAt (0);
            }
            allPersonnesOption += `<option value="${allPersonnes[i]}" ${selected}>${allPersonnes[i]}</option>`;
        }

        // -----------------------------------------------
        // recup des initales possibles d'une experience, et creation du select UI
        // -----------------------------------------------
        let AllExperienceInitialeOption: string = '';
        let AllExperienceInitiale: string[] = cExperience.getAllExperienceInitiale();
        for (let i : number = 0; i < AllExperienceInitiale.length; i++) {
            selected = '';
            if (i == 0)
                selected = 'selected';
            AllExperienceInitialeOption += `<option value="${AllExperienceInitiale[i]}" ${selected}>${AllExperienceInitiale[i]}</option>`;
        }


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
                            <select class="ui compact selection dropdown" id="${this._idCreationExperienceExperiencetype}">
                                ${AllExperienceInitialeOption}
                            </select>
                            <input type="number" value="0" id="${this._idCreationExperienceClef}">
                        </div>
                    </div>
                </div>

                <!-- date de le Experience -->
                <div class="field">
                    <label>Date de l'experience</label>
                    <input type="date" name="date-exp" value="2020-10-01" min="2020-10-01" id="${this._idCreationDateExp}"/>
                </div>

                <!-- qui a fait le Experience -->
                <div class="field">
                    <label>Qui a realise l'experience?</label>
                    <select class="ui compact selection dropdown" id="${this._idCreationQui}">
                        ${allPersonnesOption}
                    </select>
                </div>

                <!-- Fichier associed  -->
                <div class="field">
                    <label>Lien vers les images</label>
                    <input type="file" name="expImage" accept="*" multiple id="${this._idCreationFiles}">
                </div>

                <!-- Zone a message  -->
                <div id="${this._idCreationDivForMessageInfo}"></div>

                <!-- Validation  -->
                <button class="ui button pink right floated" type="submit" id="${this._idCreationOKButton}">Cr&eacute;ation de l\'exp&eacute;rience !</button>
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
                <div class="ui labeled input">
                    <div class="ui label">
                        Experience Id
                    </div>
                    <!-- Recup du nom de l'exprience de l'UI OU par callback ATTENTION-->
                    <input type="text" placeholder="[lettre][chiffre]-[lettre][chiffre]" id="${this._idUpdateInputExp}"/>
                </div>
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
        this.addCallBackOnMyDialog_create();
        this.addCallBackOnMyDialog_ajout();
        return;
    }



    // ===========================================================================================
    // Gestion des callback de la section de creation de l'experience
    // Check si le contenu est valide et definition du nom de l'exprience
    // ===========================================================================================
    private addCallBackOnMyDialog_create(): void {
        this.checkFormContenu();
        this.lienExprienceId_NomManip();
    }


    // ===========================================================================================
    // ce callback me permet de mettre a jour le nom de l'experience lorsque le nom de la personne
    // qui a realiser l'experience change
    // ===========================================================================================
    private lienExprienceId_NomManip(): void {
        let me: cMyUI_MainTab_create = this;

        // la personne qui a fait l'exp change
        $(`#${this._idCreationQui}`).on('change', function (event) {
            // recup de son nom
            let val: string = <string>$(`#${me._idCreationQui}`).val();
            let valEntete = val.charAt(0);

            // changement du nom de l'exp
            $(`#${me._idCreationExperienceNomPrefixe}`).val(valEntete);

            // je pousse l'evenement sur le group qui va prevenir la section ajout de ce changemeny
            $(`#${me._idCreationExperienceGroupOfInfo}`).trigger('change');
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
            let files: FileList = $(`#${me._idCreationFiles}`).prop('files');

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
            if (files.length < 1) {
                onErrorMessage += `
                        <div class="header">
                            Image
                        </div>
                        <p> Il faut choisir au moins une image </p>`;
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
                    // si experience cree, on pousse les fichiers dessus
                    cExperience.uploadFiles(id, files);

                    let onOKMessage: string = `<div class="ui positive message ${me._My_Message_Classe}"><i class="close icon"></i>`;
                    onOKMessage += `
                                <div class="header">
                                    Creation experience en DB -- OK
                                </div>
                                <p> ${experienceId}, ${date}, ${qui}, ${files} </p>`;
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

    // ===========================================================================================
    // Callback du OK - update experience [ajout de resultats]
    //      1. check du contenu du formulaire
    //      2. envoie en DB si OK
    // ===========================================================================================
    private addCallBackOnMyDialog_ajout(): void {
        let me: cMyUI_MainTab_create = this;

        // -------------------------------------------
        // ce call back permet de mettre  ajour le nom d el'expID dnas la zone d'update
        // le "fire" est fait par
        //      1. le call back de changement de nom de qui,
        //          2. qui est re fireed par  lienExprienceId_NomManip de la section 1 de creation
        // --------------------------------------------
        $(`#${me._idCreationExperienceGroupOfInfo}`).on('change', function (event: JQuery.ChangeEvent) {
            let lettreNomPrefixExpID : string = $(`#${me._idCreationExperienceNomPrefixe}`).val() as string;
            let chiffreNumExpId : number = $(`#${me._idCreationExperienceNumero}`).val() as number;
            let lettreTypeExpId : string = $(`#${me._idCreationExperienceExperiencetype}`).val() as string;
            let chiffreClefExpId : number = $(`#${me._idCreationExperienceClef}`).val() as number;
            let ExpIdName = lettreNomPrefixExpID + chiffreNumExpId.toString() + '-' + lettreTypeExpId + chiffreClefExpId.toString();
            $(`#${me._idUpdateInputExp}`).val(ExpIdName);
        });


        // -------------------------------------------
        // call back de lecture du formulaire pour l'envoye en db
        // check et push en DB
        // --------------------------------------------
        $(`#${me._idUpdateOKButton}`).on('click', function (event: JQuery.ClickEvent) {

            // lecture des infos
            let allInfosFromPage: iResultatMessage = cExperience.create_iResultatMessage();
            allInfosFromPage.experiencestringid = <string>$(`#${me._idUpdateInputExp}`).val();
            allInfosFromPage.idexperience = cExperience.getExperienceUidFromExperienceStringid(allInfosFromPage.experiencestringid);

            allInfosFromPage.marquage = <string>$(`#${me._idUpdateSelectOnMarquage}`).val();
            allInfosFromPage.territoire = <string>$(`#${me._idUpdateSelectOnTerritoire}`).val();
            allInfosFromPage.SComparatif = <number>$(`#${me._idUpdateInputSComparatif}`).val();
            allInfosFromPage.SGeneral = <number>$(`#${me._idUpdateInputSGeneral}`).val();
            allInfosFromPage.typedetest = <string>$(`#${me._idUpdateSelectOnTestType}`).val();

            let nbValuatedGenotype: number = 0;
            for (let i = 0; i < me._nbGenotype; i++) {
                let allInfosFromGenotype: iGenotypeMessage = cExperience.create_iGenotypeMessage();
                allInfosFromGenotype.chromosome1 = <string>$(`#${me._idUpdateSelectOnchromosome1}_${i}`).val();
                allInfosFromGenotype.chromosome2 = <string>$(`#${me._idUpdateSelectOnchromosome2}_${i}`).val();
                allInfosFromGenotype.chromosome3 = <string>$(`#${me._idUpdateSelectOnchromosome3}_${i}`).val();
                allInfosFromGenotype.chromosome4 = <string>$(`#${me._idUpdateSelectOnchromosome4}_${i}`).val();
                allInfosFromGenotype.nbechantillon = <number>$(`#${me._idUpdateInputNbEchantillon}_${i}`).val();
                if ((allInfosFromPage.Genotype != null) && (allInfosFromGenotype.nbechantillon > 0)) {
                    allInfosFromPage.Genotype.push(allInfosFromGenotype);
                    nbValuatedGenotype++;
                }
            }
            allInfosFromPage.NbGenotype = nbValuatedGenotype;

            // push en DB des info
            let id = cExperience.updateDBExperience(allInfosFromPage);

            // update de la visu de l'exp depuis la DB
            me.UpdateDeLaZONEBilanViSuDBApresCreateOuAjout (allInfosFromPage.idexperience);


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
            allInfosFromPage.experiencestringid = <string>$(`#${me._idUpdateInputExp}`).val();
            allInfosFromPage.idexperience = cExperience.getExperienceUidFromExperienceStringid(allInfosFromPage.experiencestringid);

            // update de la visu de l'exp depuis la DB
            me.UpdateDeLaZONEBilanViSuDBApresCreateOuAjout (allInfosFromPage.idexperience);
            event.stopImmediatePropagation();
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

