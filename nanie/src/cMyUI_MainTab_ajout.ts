import { cExperience } from './Services/DB/cExperience';
import { iResultatMessage, iGenotypeMessage } from './Services/DB/iOnMessageWithServer';
import { iMyHtmlInfo, cTools } from './infra/cTools';
import cMyUI from './cMyUI';


export default class cMyUI_MainTab_ajout extends cMyUI {
    private readonly _idOKButton: string = 'idOKButton';
    private readonly _idInputExp: string = 'cMyUI_MainTab_ajout_idInputExp';
    private readonly _idSelectOnchromosome1: string = 'cMyUI_MainTab_ajout_idSelectOnchromosome1';
    private readonly _idSelectOnchromosome2: string = 'cMyUI_MainTab_ajout_idSelectOnchromosome2';
    private readonly _idSelectOnchromosome3: string = 'cMyUI_MainTab_ajout_idSelectOnchromosome3';
    private readonly _idSelectOnchromosome4: string = 'cMyUI_MainTab_ajout_idSelectOnchromosome4';
    private readonly _idSelectOnTestType: string = 'cMyUI_MainTab_ajout_idSelectOnTestType';
    private readonly _idSelectOnMarquage: string = 'cMyUI_MainTab_ajout_idSelectOnMarquage';
    private readonly _idInputNbEchantillon: string = 'cMyUI_MainTab_ajout_idInputNbEchantillon';
    private readonly _idInputSGeneral: string = 'cMyUI_MainTab_ajout__idInputSGeneral';
    private readonly _idInputSComparatif: string = 'cMyUI_MainTab_ajout_idInputSComparatif';
    private readonly _nbGenotype = 4;

    constructor () {
        super ('MainTab');
    }

    public addCallBackOnMyDialog(): void {
        // activer les sementicUI du dialog

        // choisir la tab par defaut
        // $('.ui .item').removeClass('active');
        // $(`#${this._idTabSaisie}`).addClass('active');

        let me: cMyUI_MainTab_ajout = this;
        $(`#${me._idOKButton}`).on('click', function (event: JQuery.ClickEvent) {
            let allInfosFromPage: iResultatMessage = cExperience.create_iResultatMessage();
            allInfosFromPage.experiencestringid = <string> $(`#${me._idInputExp}`).val();
            allInfosFromPage.idexperience = cExperience.getExperienceUidFromExperienceStringid(allInfosFromPage.experiencestringid);

            allInfosFromPage.marquage = <string> $(`#${me._idSelectOnMarquage}`).val();
            allInfosFromPage.NbGenotype = me._nbGenotype;
            allInfosFromPage.SComparatif = <number> $(`#${me._idInputSComparatif}`).val();
            allInfosFromPage.SGeneral = <number> $(`#${me._idInputSGeneral}`).val();
            allInfosFromPage.typedetest = <string>$(`#${me._idSelectOnTestType}`).val();

            for (let i = 0; i < me._nbGenotype; i++) {
                let allInfosFromGenotype: iGenotypeMessage = cExperience.create_iGenotypeMessage();
                allInfosFromGenotype.chromosome1 = <string>$(`#${me._idSelectOnchromosome1}_${i}`).val();
                allInfosFromGenotype.chromosome2 = <string>$(`#${me._idSelectOnchromosome2}_${i}`).val();
                allInfosFromGenotype.chromosome3 = <string>$(`#${me._idSelectOnchromosome3}_${i}`).val();
                allInfosFromGenotype.chromosome4 = <string>$(`#${me._idSelectOnchromosome4}_${i}`).val();
                allInfosFromGenotype.nbechantillon = <number>$(`#${me._idInputNbEchantillon}_${i}`).val();
                if (allInfosFromPage.Genotype != null)
                    allInfosFromPage.Genotype.push(allInfosFromGenotype);
            }

            let id = cExperience.updateDBExperience(allInfosFromPage);
            event.stopImmediatePropagation();
            return false;
        });

    }

    public UpdateMyDialog(lastExp: string, ilastExp: number) {
        let x: string = lastExp;
        $(`#${this._idInputExp}`).val(x);
    }

    public draw (): string {
        let retour : string;
        const nbLigne = this._nbGenotype;
        let x: string = this._ctrl.lastExp;

        let infosForHTML: iMyHtmlInfo;
        let selectchromosome1 : string[] = ['', '', '', ''];
        let selectchromosome2: string[] = ['', '', '', ''];
        let selectchromosome3: string[] = ['', '', '', ''];
        let selectchromosome4: string[] = ['', '', '', ''];
        let InputNbEchantillon: string[] = ['', '', '', ''];
        let selectTypeTest : string;
        let selectMarquage : string;
        let InputSGeneral : string;
        let InputSComparatif : string;
        

        
        for (let i = 0; i < nbLigne; i++) {
            infosForHTML = { 'class': 'mySelect', 'id' : `${this._idSelectOnchromosome1}_${i}`};
            selectchromosome1[i] = cTools.BuildSelectFromTab(cExperience.getAllchromosome1(), infosForHTML);
        
            infosForHTML = { 'class': 'mySelect', 'id': `${this._idSelectOnchromosome2}_${i}` };
            selectchromosome2[i] = cTools.BuildSelectFromTab(cExperience.getAllchromosome2(), infosForHTML);

            infosForHTML = { 'class': 'mySelect', 'id': `${this._idSelectOnchromosome3}_${i}` };
            selectchromosome3[i] = cTools.BuildSelectFromTab(cExperience.getAllchromosome3(), infosForHTML);

            infosForHTML = { 'class': 'mySelect', 'id': `${this._idSelectOnchromosome4}_${i}` };
            selectchromosome4[i] = cTools.BuildSelectFromTab(cExperience.getAllchromosome4(), infosForHTML);

            infosForHTML = { 'class': 'myInputInt', 'type': 'number', 'id': `${this._idInputNbEchantillon}_${i}` };
            InputNbEchantillon[i] = cTools.BuildInputInt('1', infosForHTML);
        }
        infosForHTML = { 'class': 'myInputFloat', 'type': 'number', 'id': `${this._idInputSGeneral}`, 'placeholder': '1.79e-11' };
        InputSGeneral = cTools.BuildInputInt('1', infosForHTML);

        infosForHTML = { 'class': 'myInputFloat', 'type': 'number', 'id': `${this._idInputSComparatif}`, 'placeholder': '1.79e-11'  };
        InputSComparatif = cTools.BuildInputInt('1', infosForHTML);


        infosForHTML = { 'class': 'mySelect', 'id': `${this._idSelectOnTestType}` };
        selectTypeTest = cTools.BuildSelectFromTab(cExperience.getAllTestType(), infosForHTML);

        infosForHTML = { 'class': 'mySelect', 'id': `${this._idSelectOnMarquage}` };
        selectMarquage = cTools.BuildSelectFromTab(cExperience.getAllMarquage(), infosForHTML);
        
        retour = `
            <form class="ui form">
                <div class="ui labeled input">
                    <div class="ui label">
                        Experience Id
                    </div>
                    <input type="text" value="${x}" placeholder="[lettre][chiffre]-[lettre][chiffre]" id="${this._idInputExp}"/>
                </div>
                <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Genotype</th><th>chromosomesome 1</th> <th>chromosomesome 2</th> <th>chromosomesome 3</th><th>chromosomesome 4</th>
                            <th>Nb Echantillon</th><th>Marquage</th><th>S general</th><th>S comparatif</th><th>Type test</th>
                    </tr>
                </thead>
                <tbody>`;
        for (let i = 0; i < nbLigne; i++) {
            if (i == 0) {
                retour += `
                    <tr>
                        <td>G ${i+1}</td><td>${selectchromosome1[i]}</td><td>${selectchromosome2[i]}</td><td>${selectchromosome3[i]}</td><td>${selectchromosome4[i]}</td>
                            <td>${InputNbEchantillon[i]}</td>
                            <td rowspan="${nbLigne}">${selectMarquage}</td>
                            <td rowspan="${nbLigne}">${InputSGeneral}</td>
                            <td rowspan="${nbLigne}">${InputSComparatif}</td>
                            <td rowspan="${nbLigne}">${selectTypeTest}</td>
                    </tr>`;
            }
            else {
                retour += `
                    <tr>
                        <td>G ${i+1}</td><td>${selectchromosome1[i]}</td><td>${selectchromosome2[i]}</td><td>${selectchromosome3[i]}</td><td>${selectchromosome4[i]}</td><td>${InputNbEchantillon[i]}</td>
                    </tr>`;
            }
        }
        retour += `
                </tbody>
                </table>
                <button class="ui button pink" type="submit" id="${this._idOKButton}">OK !</button>
            </form>
        `;

        return retour;
    }

}

