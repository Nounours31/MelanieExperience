import { iExperienceIDMessage, iExperienceFilesMessage } from './DB/iOnMessageWithServer';
import { iResultatMessage, iGenotypeMessage } from './DB/iOnMessageWithServer';
import { cExperience } from './DB/cExperience';

export default class cUIUtils {
    constructor () {}

    public static drawOnExperience (ExpUid : number) : string {
        let retour : string = '';
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


    public static drawAllExpSumUp(allExperienceuid: number[], idDiv: string) {
        let _idOKVoirOneExpButton : string = 'idDrawExp_Button_VoirExperience';
        let retour: string;
        let x: iExperienceIDMessage | null;
        if (allExperienceuid.length == 0) {
            retour = `
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

            let infoGeneraleExperience: iExperienceIDMessage | null = cExperience.getExperience_InfoGenerale(iExpUid);
            let ExperienceStringId: string = "----";
            if (infoGeneraleExperience != null)
                ExperienceStringId = infoGeneraleExperience.experiencestringid;
            let infoResultatExperience: iResultatMessage[] | null = cExperience.getExperience_ResultatTest(iExpUid);
            let infoGenomeExperience: iGenotypeMessage[] | null = cExperience.getExperience_ResultatGenotype(iExpUid);

            let myUIForConsult: string = '';
            if ((infoGenomeExperience != null) && (infoResultatExperience != null)) {
                let infoResultatExperience_0: iResultatMessage = infoResultatExperience[0];
                let uneInfoGenomeExperience: iGenotypeMessage;

                if ((infoResultatExperience_0 === undefined) || (infoResultatExperience_0.idexperience === undefined)) {
                    // pas de data associe a cette experience
                    myUIForConsult = `
                    <div class="ui labeled yellow input">
                        <p>Pas de donnees d'experience associee <br/></p>
                    </div> `;
                }
                else {
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
                    </table>

                    <!--    Les resultats   -->
                    <div class="ui labeled input">
                        <div class="ui label">
                            Resultats
                        </div>
                    </div>
                    <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>Genotype</th><th>chromosomesome 1</th> <th>chromosomesome 2</th> <th>chromosomesome 3</th><th>chromosomesome 4</th>
                                <th>Nb Echantillon</th><th>Marquage</th><th>S general</th><th>S comparatif</th><th>Type test</th>
                        </tr>
                    </thead>
                    <tbody>`;
                    for (let i = 0; i < infoGenomeExperience.length; i++) {
                        uneInfoGenomeExperience = infoGenomeExperience[i];
                        if (i == 0) {
                            myUIForConsult += `
                        <tr>
                            <td>G ${i + 1}</td><td>${uneInfoGenomeExperience.chromosome1}</td><td>${uneInfoGenomeExperience.chromosome2}</td><td>${uneInfoGenomeExperience.chromosome3}</td><td>${uneInfoGenomeExperience.chromosome4}</td><td>${uneInfoGenomeExperience.nbechantillon}</td>
                                <td rowspan="${infoGenomeExperience.length}">${infoResultatExperience_0.marquage}</td>
                                <td rowspan="${infoGenomeExperience.length}">${infoResultatExperience_0.SGeneral}</td>
                                <td rowspan="${infoGenomeExperience.length}">${infoResultatExperience_0.SComparatif}</td>
                                <td rowspan="${infoGenomeExperience.length}">${infoResultatExperience_0.typedetest}</td>
                        </tr>`;
                        }
                        else {
                            myUIForConsult += `
                        <tr>
                            <td>G ${i + 1}</td><td>${uneInfoGenomeExperience.chromosome1}</td><td>${uneInfoGenomeExperience.chromosome2}</td><td>${uneInfoGenomeExperience.chromosome3}</td><td>${uneInfoGenomeExperience.chromosome4}</td><td>${uneInfoGenomeExperience.nbechantillon}</td>
                    </tr>`;

                        }
                    }
                    myUIForConsult += `
                    </tbody>
                    </table>
                `;
                }


                let infoFileExperience: iExperienceFilesMessage[] | null = cExperience.getExperience_ResultatImage(iExpUid);
                if ((infoFileExperience != null) && (infoFileExperience.length > 0)) {
                    myUIForConsult += `
                    <!--    Les fichiers   -->
                    <div class="ui labeled input" >
                        <div class="ui label" >
                            Images
                        </div>
                    </div>
                    <table class="ui celled table">
                        <tbody>`;
                    for (let i = 0; i < infoFileExperience.length; i++) {
                        myUIForConsult += `<tr>
                        <td>${infoFileExperience[i].nom}</td>
                        <td>${infoFileExperience[i].path}</td>
                        <td><img src="${infoFileExperience[i].url}" alt="${infoFileExperience[i].path}" width="400" height="341" title="image ${i}"></td>
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
            }
            $(`#${idDiv}`).append(myUIForConsult);

        });
        return retour;
    }
}