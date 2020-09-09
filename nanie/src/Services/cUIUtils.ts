import { iExperienceIDMessage, iExperienceFilesMessage } from './DB/iOnMessageWithServer';
import { iResultatMessage, iGenotypeMessage } from './DB/iOnMessageWithServer';
import { cExperience } from './DB/cExperience';
import { cTools } from '../infra/cTools';

export default class cUIUtils {
    private static readonly _idOfAllExperienceIDFind : string = 'uyilitzire_draw__idOfAllExperienceIDFind';
    private static readonly _idOfOneExperienceDetails : string = 'uyilitzire_draw___idOfOneExperienceDetails';
    private static readonly _idForGenotypeToDelete : string = 'IdPourRetrouverButtonDeleteDeUnGenotype';
    private static readonly _idForFileToDelete : string = 'IdPourRetrouverButtonDeleteDeFile';


    constructor () {}

    public static drawOnExperience (ExpUid : number, deleteOn? : boolean) : string {
        let retour : string = cUIUtils.drawOneExpSumUp(ExpUid, deleteOn);
        return retour;
    }

    public static isValidStringInput(StringInput: any, neutralValue? : string): boolean {
        let retour: boolean = true;

        if (StringInput == null)
        return false;

        if (StringInput == undefined)
        return false;

        try {
            let x: string = StringInput as string;
            let i : number = x.length;
            if (i < 1)
            retour = false;

            if ((neutralValue != undefined) && (x == neutralValue)) {
                retour = false;
            }
        }
        catch (e) {
            retour = false;
        }

        return retour;
    }

    public static isValidNumberInput(NumberInput: any, neutralValue? : number): boolean {
        let retour: boolean = true;

        if (NumberInput == null)
        return false;

        if (NumberInput == undefined)
        return false;

        try {
            let x: number = NumberInput as number;
            x += 1;

            x = NumberInput as number;
            if ((neutralValue != undefined) && (x == neutralValue)) {
                retour = false;
            }
        }
        catch (e) {
            retour = false;
        }
        return retour;
    }


    // -------------------------------------------------------------------------------------------
    // ZONE CONSULTATION
    //
    // Permet d'avoir la liste des experiences et de voir leur detail BUTTON Voir !
    // -------------------------------------------------------------------------------------------
    public static drawAllExpSumUp(allExperienceuid: number[], idDiv: string) {
        let _idOKVoirOneExpButton : string = 'idDrawExp_Button_VoirExperience';
        let retour: string;
        let x: iExperienceIDMessage | null;
        if (allExperienceuid.length == 0) {
            retour = `
            <div id="${cUIUtils._idOfAllExperienceIDFind}">
            <div class="ui message">
            Il n'y a pas de resultat
            <br/>Changer les filtres
            <br/>Ou verifie si pas de bug en phpMyAdmin
            </div>
            `;
        }
        else {
            retour = `
            <table class="ui celled table">
            <thead>
            <tr>
            <th>Experience Num</th><th>ExperienceID</th><th>Qui</th> <th>Quand</th><th>Date Enregistrement</th><th>Voir le detail</th>
            </tr>
            </thead>
            <tbody>`;
            for (let i = 0; i < allExperienceuid.length; i++) {
                x = cExperience.getExperience_InfoGenerale(allExperienceuid[i]);
                if (x != null) {
                    retour += `
                    <tr>
                    <td>${allExperienceuid[i]}</td><td>${x.experiencestringid}</td><td>${x.faiteparqui}</td><td>${x.daterealisationexperience}</td><td>${x.dateinsert}</td><td>
                    <button class="ui button green buttonVoirDetail" type="submit" id="${_idOKVoirOneExpButton}_${allExperienceuid[i]}">Details</button></td>
                    </tr>`;
                }
            }
            retour += `
            </tbody>
            </table>
            </div>
            <div id="${cUIUtils._idOfOneExperienceDetails}"></div>
            `;
        }
        $(`#${idDiv}`).append(retour);

        // ----------------------------------------------------------------------------
        // voir les detail ...
        // ----------------------------------------------------------------------------
        // let me: cMyUI_MainTab_consultation = this;
        $(`.buttonVoirDetail`).on('click', function (event: JQuery.ClickEvent) {
            // ---------------------------------------------
            // qui m'appelle ?
            // ---------------------------------------------
            let VoirButtonId: string = ($(event.target).attr('id') as string);
            let sExpUid: string = VoirButtonId.substring(_idOKVoirOneExpButton.length + 1);
            let iExpUid: number = Number.parseInt(sExpUid);

            let deleteOn : boolean = false;
            let myUIForConsult : string = cUIUtils.drawOneExpSumUp(iExpUid, deleteOn);
            $(`#${cUIUtils._idOfOneExperienceDetails}`).empty();
            $(`#${cUIUtils._idOfOneExperienceDetails}`).append(myUIForConsult);
        });
        return retour;
    }



    // -------------------------------------------------------------------------------------------
    // ZONE CREATION / UPDATE
    //
    // Les call back de delete associe a la partie 'visu' du create
    // -------------------------------------------------------------------------------------------
    public static addcallbackFordrawOnExperience(idOfButtonUpdate : string) {
        $(`.${this._idForGenotypeToDelete}`).each (function () {
            $(this).on ('click', function (event : JQuery.ClickEvent) {
                let button : HTMLElement =  event.target;
                let genotypeuid = Number.parseInt (button.getAttribute ('value') as string);
                cExperience.deleteGenotypeFromuid (genotypeuid);

                // info de changement en db
                $(`#${idOfButtonUpdate}`).trigger ('Event_DeleteFileOrGenotype');
            });
        });
        $(`.${this._idForFileToDelete}`).each (function () {
            $(this).on ('click', function (event : JQuery.ClickEvent) {
                let button : HTMLElement =  event.target;
                let uid = Number.parseInt (button.getAttribute ('value') as string);
                cExperience.deleteFileFronuid (uid);

                // info de changement en db
                $(`#${idOfButtonUpdate}`).trigger ('Event_DeleteFileOrGenotype');
            });
        });

        // refresh de la zone En base

    }

    // -------------------------------------------------------------------------------------------
    // ZONE CREATION / UPDATE
    //
    // Voir ce qui est en base
    // -------------------------------------------------------------------------------------------
    public static drawOneExpSumUp(iExpUid: number, deleteOn? : boolean) : string {

        // -----------------------------------------------------
        // recup de toutes les infos possible
        // -----------------------------------------------------
        let infoGeneraleExperience: iExperienceIDMessage | null = cExperience.getExperience_InfoGenerale(iExpUid);
        let ExperienceStringId: string = '----';
        if (infoGeneraleExperience != null) {
            ExperienceStringId = infoGeneraleExperience.experiencestringid;
        }

        let infoResultatExperience: iResultatMessage[] | null = cExperience.getExperience_ResultatTest(iExpUid);
        let infoGenomeExperience: iGenotypeMessage[] | null = cExperience.getExperience_ResultatGenotype(iExpUid);

        // -----------------------------------------------------
        // affichage
        // -----------------------------------------------------
        let myUIForConsult: string = '';

        // ----------------------
        // de l'experience
        // ----------------------

        let x: iExperienceIDMessage = cExperience.getExperience_InfoGenerale(iExpUid) as iExperienceIDMessage;
        myUIForConsult = `
        <!--    Resume de l'experience   -->
        <div class="ui labeled input">
        <div class="ui label">
        Experience
        </div>
        </div>
        <table class="ui celled table">
        <thead>
        <tr>
        <th>Numero (DB)</th><th>ExperienceID</th> <th>Qui</th> <th>Quand</th><th>Date d'enregistrement</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>${iExpUid}</td><td>${x.experiencestringid}</td><td>${x.faiteparqui}</td><td>${x.daterealisationexperience}</td><td>${x.dateinsert}</td>
        </tr>
        </tbody>
        </table>`;

        // ----------------------
        // des resultats de l'experience - si rien (delete explicite en DB ?) je met des info pipo pour permettre le dialog de continuer
        // ----------------------
        if ((infoResultatExperience == null) || (infoResultatExperience.length < 1)) {
            infoResultatExperience = [{
                SComparatif: 0.0,
                SGeneral : 0.0,
                idexperience : -1,
                marquage: 'undef',
                territoire: 'undef',
                typedetest: 'undef',
                Genotype: [],
                NbGenotype: 0,
                dateinsert: 'undef',
                experiencestringid: '----',
                uid: -1
            }];
        }
        if ((infoGenomeExperience == null) || (infoGenomeExperience.length < 1)) {
            infoGenomeExperience = [{
                chromosome1: '-',
                chromosome2: '-',
                chromosome3: '-',
                chromosome4: '-',
                nbechantillon: 0,
                idexperience: -1,
                uid: -1
            }];
        }


        myUIForConsult += `
        <!--    Les resultats   -->
        <div class="ui labeled input">
        <div class="ui label">
        Resultats
        </div>
        </div>
        <table class="ui celled table">
        <thead>
        <tr>
        <th>Genotype</th><th>territoire</th><th>chromosomesome 1</th> <th>chromosomesome 2</th> <th>chromosomesome 3</th><th>chromosomesome 4</th>
        <th>Nb Echantillon</th><th>Marquage</th><th>S general</th><th>S comparatif</th><th>Type test</th>
        </tr>
        </thead>
        <tbody>`;

        let uneInfoResultatExperience: iResultatMessage = infoResultatExperience[0];
        let uneInfoGenomeExperience: iGenotypeMessage;
        for (let i = 0; i < infoGenomeExperience.length; i++) {
            uneInfoGenomeExperience = infoGenomeExperience[i];

            let buttonstring : string = '';
            if ((deleteOn != undefined) && deleteOn && (uneInfoGenomeExperience.uid as number > 0)) {
                buttonstring = `<button value="${uneInfoGenomeExperience.uid}" class="${cUIUtils._idForGenotypeToDelete}">delete?</button>`;
            }

            if (i == 0) {
                myUIForConsult += `
                <tr>
                <td>G ${i + 1} ${buttonstring}</td>
                <td rowspan="${infoGenomeExperience.length}">${uneInfoResultatExperience.territoire}</td>
                <td>${uneInfoGenomeExperience.chromosome1}</td><td>${uneInfoGenomeExperience.chromosome2}</td><td>${uneInfoGenomeExperience.chromosome3}</td><td>${uneInfoGenomeExperience.chromosome4}</td><td>${uneInfoGenomeExperience.nbechantillon}</td>
                <td rowspan="${infoGenomeExperience.length}">${uneInfoResultatExperience.marquage}</td>
                <td rowspan="${infoGenomeExperience.length}">${uneInfoResultatExperience.SGeneral}</td>
                <td rowspan="${infoGenomeExperience.length}">${uneInfoResultatExperience.SComparatif}</td>
                <td rowspan="${infoGenomeExperience.length}">${uneInfoResultatExperience.typedetest}</td>
                </tr>`;
            }
            else {
                myUIForConsult += `
                <tr>
                <td>G ${i + 1} ${buttonstring}</td><td>${uneInfoGenomeExperience.chromosome1}</td><td>${uneInfoGenomeExperience.chromosome2}</td><td>${uneInfoGenomeExperience.chromosome3}</td><td>${uneInfoGenomeExperience.chromosome4}</td><td>${uneInfoGenomeExperience.nbechantillon}</td>
                </tr>`;

            }
        }
        myUIForConsult += `
            </tbody>
            </table>
            `;

        // ----------------------
        // les fichiers
        // ----------------------
        let infoFileExperience: iExperienceFilesMessage[] | null = cExperience.getExperience_ResultatImage(iExpUid);
        if ((infoFileExperience != null) && (infoFileExperience.length > 0)) {
            myUIForConsult += `
            <!--    Les fichiers   -->
            <div class="ui labeled input" >
            <div class="ui label" >
            Images / Fichiers
            </div>
            </div>
            <table class="ui celled table">
            <tbody>`;

            let buttonstring: string = '';
            let imagestring: string = '';
            let y : Location = window.location;

            for (let i = 0; i < infoFileExperience.length; i++) {
                buttonstring = '';
                if ((deleteOn != undefined) && deleteOn) {
                    buttonstring = `<td><button value="${infoFileExperience[i].uid}" class="${cUIUtils._idForFileToDelete}">delete?</button></td>`;
                }

                imagestring = '';
                if (cTools.isImageFileFromName(infoFileExperience[i].nom as string)) {
                    imagestring = `<img src="${y.href}/${infoFileExperience[i].url}" alt="${infoFileExperience[i].path}" width="400" height="341" title="image ${i}" />
                                 ou <a href="${y.href}/${infoFileExperience[i].url}" download="${infoFileExperience[i].nom}" class="anchorLikebutton">Downloader</a>`;
                }
                else {
                    imagestring = `<a href="${y.href}/${infoFileExperience[i].url}" class="anchorLikebutton" target="_blank">Voir</a> ou <a href="${y.href}/${infoFileExperience[i].url}" download="${infoFileExperience[i].nom}" class="anchorLikebutton">Downloader</a>`;
                }

                myUIForConsult += `
                <tr>
                ${buttonstring}
                <td>${infoFileExperience[i].nom}<br/>[ sur le server --> ${infoFileExperience[i].path} ]</td>
                <td>${imagestring}</td>
                </tr>`;
            }
            myUIForConsult += `
            </tbody>
            </table>`;
        }
        else {
            myUIForConsult += `
            <div class="ui labeled input" >
            <div class="ui label yellow" >
            Pas d'image associees a cette experiences
            </div>
            </div>`;
        }
        return myUIForConsult;
    }


}