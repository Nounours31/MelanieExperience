import { cExperience } from './Services/DB/cExperience';
import { iResultatMessage, iGenotypeMessage } from './Services/DB/iOnMessageWithServer';
import { iExperienceIDMessage, iExperienceFilesMessage } from './Services/DB/iOnMessageWithServer';
import { iMyHtmlInfo, cTools } from './infra/cTools';
import cMyUI from './cMyUI';




export default class cMyUI_MainTab_consultation extends cMyUI {
    private readonly _idOKButton : string = 'OKButton';
    constructor () {
        super ('MainTab');
    }

    public addCallBackOnMyDialog(): void {
        let me: cMyUI_MainTab_consultation = this;
        $(`.voir`).on('click', function (event: JQuery.ClickEvent) {
            // afiicher dans <div id="${this._idResultatDB}"></div>
            $(`#${me._idResultatDB}`).empty();

            event.stopImmediatePropagation();
            let VoirButtonId : string = ($(event.target).attr('id') as string);
            let sExpUid: string = VoirButtonId.substring(me._idOKButton.length + 1);
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
                    myUIForConsult = `
                        <div class="ui labeled input">
                            <div class="ui label">
                                Experience Id
                            </div>
                            <p>${ExperienceStringId}  [ID en DB: ${infoResultatExperience_0.idexperience}]</p>
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
            $(`#${me._idResultatDB}`).append(myUIForConsult);
//            let y: iExperienceFilesMessage = cExperience.getExperience_FilesURL(iExpUid);
        });
    }


    public draw (): string {
        let retour : string;

        let allExperienceuid : number[] = cExperience.getAllExperienceUid();
        let x: iExperienceIDMessage | null;

        let id_territoire_select: string = 'id_territoire_select';
        let id_selectchromosome: string = 'id_select_chrommosome';

        let infosForHTML: object = {'id': `${id_territoire_select}` };
        let selectTerritoire: string = cTools.BuildSelectFromTab(cExperience.getAllTerritoire(), infosForHTML);
        let selectchromosome: string[] = [];
        for (let i : number = 0; i < 4; i++) {
            let infosForHTML: object = { 'id': `${id_selectchromosome}_${i}` };
            if (i == 0) selectchromosome.push(cTools.BuildSelectFromTab(cExperience.getAllchromosome1(), infosForHTML));
            if (i == 1) selectchromosome.push(cTools.BuildSelectFromTab(cExperience.getAllchromosome2(), infosForHTML));
            if (i == 2) selectchromosome.push(cTools.BuildSelectFromTab(cExperience.getAllchromosome3(), infosForHTML));
            if (i == 3) selectchromosome.push(cTools.BuildSelectFromTab(cExperience.getAllchromosome4(), infosForHTML));
        }


    /*    SELECT exp.uid FROM`experience` exp
        INNER JOIN`experience_listegenotype` geno ON geno.idexperience = exp.uid
        INNER JOIN`experience_resultatdestests` res ON res.idexperience = exp.uid
        where((res.territoire = 'Vg') and(res.SComparatif < 2) and(res.SComparatif < 2) 
and(geno.chromosome1 = 'Pink') and(geno.chromosome2 = 'Decl')) */




        retour = `
           <form class="pure-form">
                <fieldset class="pure-group pure-input-1-4" style="border-style: none;">
                    <label for="${id_territoire_select}">Territoire</label>
                    ${selectTerritoire}
                </fieldset>
                <fieldset>
                    <legend>selection genotype</legend>`;
        for (let i: number = 0; i < 4; i++) {
            retour += `
                <label for="${id_selectchromosome}_${i}">chromosome${i+1}</label>
                ${selectchromosome[i]}
                `;
        }
        retour += `
                </fieldset>
                <fieldset class="pure-group pure-input-1-4"  style="border-style: none;">
                    <label for="Scomparatif_input">S comparatif (&lt; 0.05)</label>
                    <input id="Scomparatif_input" type="number" placeholder="1.0e-2" min="0" max="0.05" step="any"/>
                </fieldset>
                <fieldset class="pure-group pure-input-1-4"  style="border-style: none;">
                    <button class="ui button primary voir" type="submit" id="toto">Cherche ...</button></td>
                </fieldset>
            </form>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Experience Num</th><th>ExperienceID</th><th>Qui</th> <th>Quand</th><th>Date Enregistrement</th><th>Voir</th>
                    </tr>
                </thead>
                <tbody>`;
        for (let i = 0; i < allExperienceuid.length; i++) {
            x = cExperience.getExperience_InfoGenerale(allExperienceuid[i]);
            if (x != null) {
                retour += `
                    <tr>
                        <td>${allExperienceuid[i]}</td><td>${x.experiencestringid}</td><td>${x.faiteparqui}</td><td>${x.daterealisationexperience}</td><td>${x.dateinsert}</td><td>
                        <button class="ui button green voir" type="submit" id="${this._idOKButton}_${allExperienceuid[i]}">Voir</button></td>
                    </tr>`;
            }
        }
        retour += `
                </tbody>
                </table>
        `;

        return retour;
    }
}

