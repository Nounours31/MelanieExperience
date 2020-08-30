import { cExperience, iAllInfoForUpdateExperience, iAllGenotypeInfoForUpdateExperience } from './Services/DB/cExperience';
import { iMyHtmlInfo, cTools } from './infra/cTools';
import cMyUI from './cMyUI';


export default class cMyUI_MainTab_ajout extends cMyUI {
    private readonly _idOKButton: string = 'idOKButton';
    private readonly _idInputExp: string = 'cMyUI_MainTab_ajout_idInputExp';
    private readonly _idSelectOnChromo1: string = 'cMyUI_MainTab_ajout_idSelectOnChromo1';
    private readonly _idSelectOnChromo2: string = 'cMyUI_MainTab_ajout_idSelectOnChromo2';
    private readonly _idSelectOnChromo3: string = 'cMyUI_MainTab_ajout_idSelectOnChromo3';
    private readonly _idSelectOnChromo4: string = 'cMyUI_MainTab_ajout_idSelectOnChromo4';
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
        $(`#${me._idOKButton}`).on('click', function (event) {
            let allInfosFromPage: iAllInfoForUpdateExperience = cExperience.create_iAllInfoForUpdateExperience();
            allInfosFromPage.ExpId = <string> $(`#${me._idInputExp}`).val();
            allInfosFromPage.Marquage = <string> $(`#${me._idSelectOnMarquage}`).val();
            allInfosFromPage.NbGenotype = me._nbGenotype;
            allInfosFromPage.SComparatif = <number> $(`#${me._idInputSComparatif}`).val();
            allInfosFromPage.SGeneral = <number> $(`#${me._idInputSGeneral}`).val();
            allInfosFromPage.TypeTest = <string>$(`#${me._idSelectOnTestType}`).val();

            for (let i = 0; i < me._nbGenotype; i++) {
                let allInfosFromGenotype: iAllGenotypeInfoForUpdateExperience = cExperience.create_iAllGenotypeInfoForUpdateExperience();
                allInfosFromGenotype.Chromo1 = <string>$(`#${me._idSelectOnChromo1}_${i}`).val();
                allInfosFromGenotype.Chromo2 = <string>$(`#${me._idSelectOnChromo2}_${i}`).val();
                allInfosFromGenotype.Chromo3 = <string>$(`#${me._idSelectOnChromo3}_${i}`).val();
                allInfosFromGenotype.Chromo4 = <string>$(`#${me._idSelectOnChromo4}_${i}`).val();
                allInfosFromPage.Genotype.push(allInfosFromGenotype);
            }

            let id = cExperience.updateDBExperience(allInfosFromPage);
            cExperience.dumpFromDB(id, me._idResultatDB);
        });

    }

    public UpdateMyDialog(lastExp: string, ilastExp: number) {
        let x: string = lastExp + ' [db: ' + ilastExp.toString () + ']';
        $(`#${this._idInputExp}`).val(x);
    }

    public draw (): string {
        let retour : string;
        const nbLigne = this._nbGenotype;
        let x: string = this._ctrl.lastExp + ' [db: ' + this._ctrl.iLastExp.toString() + ']';

        let infosForHTML: iMyHtmlInfo;
        let selectChromo1 : string[] = ['', '', '', ''];
        let selectChromo2: string[] = ['', '', '', ''];
        let selectChromo3: string[] = ['', '', '', ''];
        let selectChromo4: string[] = ['', '', '', ''];
        let InputNbEchantillon: string[] = ['', '', '', ''];
        let selectTypeTest : string;
        let selectMarquage : string;
        let InputSGeneral : string;
        let InputSComparatif : string;
        

        
        for (let i = 0; i < nbLigne; i++) {
            infosForHTML = { 'class': 'mySelect', 'id' : `${this._idSelectOnChromo1}_${i}`};
            selectChromo1[i] = cTools.BuildSelectFromTab(cExperience.getAllChromo1(), infosForHTML);
        
            infosForHTML = { 'class': 'mySelect', 'id': `${this._idSelectOnChromo2}_${i}` };
            selectChromo2[i] = cTools.BuildSelectFromTab(cExperience.getAllChromo2(), infosForHTML);

            infosForHTML = { 'class': 'mySelect', 'id': `${this._idSelectOnChromo3}_${i}` };
            selectChromo3[i] = cTools.BuildSelectFromTab(cExperience.getAllChromo3(), infosForHTML);

            infosForHTML = { 'class': 'mySelect', 'id': `${this._idSelectOnChromo4}_${i}` };
            selectChromo4[i] = cTools.BuildSelectFromTab(cExperience.getAllChromo4(), infosForHTML);

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
                        <th>Genotype</th><th>Chromosome 1</th> <th>Chromosome 2</th> <th>Chromosome 3</th><th>Chromosome 4</th>
                            <th>Nb Echantillon</th><th>Marquage</th><th>S general</th><th>S comparatif</th><th>Type test</th>
                    </tr>
                </thead>
                <tbody>`;
        for (let i = 0; i < nbLigne; i++) {
            if (i == 0) {
                retour += `
                    <tr>
                        <td>G ${i+1}</td><td>${selectChromo1[i]}</td><td>${selectChromo2[i]}</td><td>${selectChromo3[i]}</td><td>${selectChromo4[i]}</td>
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
                        <td>G ${i+1}</td><td>${selectChromo1[i]}</td><td>${selectChromo2[i]}</td><td>${selectChromo3[i]}</td><td>${selectChromo4[i]}</td><td>${InputNbEchantillon[i]}</td>
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

