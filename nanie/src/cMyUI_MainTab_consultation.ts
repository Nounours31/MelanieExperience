import { cExperience } from './Services/DB/cExperience';
import { iResultatMessage, iGenotypeMessage } from './Services/DB/iOnMessageWithServer';
import { iExperienceIDMessage, iExperienceFilesMessage } from './Services/DB/iOnMessageWithServer';
import { iMyHtmlInfo, cTools } from './infra/cTools';
import cUIUtils from './Services/cUIUtils';
import cMyUI from './cMyUI';




export default class cMyUI_MainTab_consultation extends cMyUI {
    private readonly _idOKChercheButton: string = 'OKChercheButton';
    private readonly id_experience_select : string = 'SelectParExperienceID';
    private readonly id_territoire_select: string = 'consultation_id_territoire_select';
    private readonly id_selectchromosome: string = 'consultationid_selectchromosome';
    private readonly _idSComparatif: string = 'consultationid__idSComparatif';
    private readonly _idOKVoirOneExpButton: string = 'consultationid__idOKVoirOneExpButton';

    constructor () {
        super('cMyUI_MainTab_consultation');
    }


    public addCallBackOnMyDialog(): void {
        let me: cMyUI_MainTab_consultation = this;
        $(`#${this._idOKChercheButton}`).on('click', function (event: JQuery.ClickEvent) {

            // ---------------------------------------------------
            // afiicher dans <div id="${this._idResultatDB}"></div>
            // ---------------------------------------------------
            $(`#${me._idResultatDB}`).empty();


            // ---------------------------------------------------
            // La requete a faire passer
            // ---------------------------------------------------
            let sql: string = '';


            // ---------------------------------------------------
            // Estce qu'une experience ID a ete saisie ?
            // ---------------------------------------------------
            let ExperienceIDSelect: string = $(`#${me.id_experience_select}`).val() as string;
            if ((ExperienceIDSelect != null) && (ExperienceIDSelect.length > 0)) {
                sql = 'SELECT exp.uid FROM experience exp ';
                sql += ` where (lower(exp.experiencestringid) like lower('${ExperienceIDSelect}%'))`;
            }
            else {


                // ---------------------------------------------------
                // recup des infos demandee
                // ---------------------------------------------------
                let territoire: string  = $(`#${me.id_territoire_select}`).val() as string;
                let chromos: number[] = [];
                for (let i : number = 0; i < 4; i++) {
                    chromos[i] = $(`#${me.id_selectchromosome}_${i}`).val() as number;
                }
                let SComparatif: number = $(`#${me._idSComparatif}`).val() as number;

                // ---------------------------------------------------
                // build de la requette sql
                // ---------------------------------------------------
                let hasprevious: boolean = false;
                let hasgenotypeInFiltre: boolean = false;
                let hasresultatInFiltre: boolean = false;
                let sqlSelect: string = 'SELECT exp.uid FROM experience exp ';
                let sqlJointForGenotype: string = ' INNER JOIN experience_listegenotype    geno ON (geno.idexperience = exp.uid) ';
                let sqlJointForResultat: string = ' INNER JOIN experience_resultatdestests res  ON (res.idexperience = exp.uid) ';
                let sqlWhere : string = '';

                if (cUIUtils.isValidNumberInput(SComparatif, 0)) {
                    sqlWhere = ` (res.SComparatif < ${SComparatif}) `;
                    hasprevious = true;
                    hasresultatInFiltre = true;
                }

                if (cUIUtils.isValidNumberInput(territoire, 1)) {
                    if (hasprevious) sqlWhere += ' and ';
                    sqlWhere += ` (res.territoire = '${territoire}') `;
                    hasprevious = true;
                    hasresultatInFiltre = true;
                }

                for (let i: number = 0; i < 4; i++) {
                    if (cUIUtils.isValidNumberInput(chromos[i], 1)) {
                        if (hasprevious) sqlWhere += ' and ';
                        sqlWhere += ` (geno.chromosome${i + 1} = '${chromos[i]}') `;
                        hasprevious = true;
                        hasgenotypeInFiltre = true;
                    }
                }

                sql += sqlSelect;
                if (hasgenotypeInFiltre)
                    sql += sqlJointForGenotype;
                if (hasresultatInFiltre)
                    sql += sqlJointForResultat;
                sql +=  ' where (';

                // si pas de filtre mettre tout le monde ...
                if (sqlWhere.length < 1) {
                    sqlWhere = 'true';
                }

                sql += sqlWhere;
                sql += ')';
            }

            // mettre dans l'ordre des noms d'experiences
            // sql += '  order by exp.experiencestringid';
            sql += " order by cast(substring(exp.experiencestringid, 2, INSTR(exp.experiencestringid, '-')-2) as signed integer) asc";
            sql += ", (substring(exp.experiencestringid, 1, 2)) asc";

            // ---------------------------------------------------
            // recup des info
            // ---------------------------------------------------
            let allUIDExp: number[] = cExperience.launchSQLListUIDExperience(sql);


            // ---------------------------------------------------
            // Affichage
            // ---------------------------------------------------
            $(`#${me._idResultatDB}`).empty();
            cUIUtils.drawAllExpSumUp(allUIDExp, me._idResultatDB);

            event.stopImmediatePropagation();
            return false;
        });
    }

    public draw (): string {
        let retour : string;

        let infosForHTML: object = {'id': `${this.id_territoire_select}` };
        let selectTerritoire: string = cTools.BuildSelectFromTab(cExperience.getAllTerritoire(), infosForHTML);
        let selectchromosome: string[] = [];
        for (let i : number = 0; i < 4; i++) {
            let infosForHTML: object = { 'id': `${this.id_selectchromosome}_${i}` };
            if (i == 0) selectchromosome.push(cTools.BuildSelectFromTab(cExperience.getAllchromosome1(), infosForHTML));
            if (i == 1) selectchromosome.push(cTools.BuildSelectFromTab(cExperience.getAllchromosome2(), infosForHTML));
            if (i == 2) selectchromosome.push(cTools.BuildSelectFromTab(cExperience.getAllchromosome3(), infosForHTML));
            if (i == 3) selectchromosome.push(cTools.BuildSelectFromTab(cExperience.getAllchromosome4(), infosForHTML));
        }


        retour = `
           <form class="pure-form">
                <div>
                    <fieldset class="pure-group pure-input" style="border-color: red;">
                        <legend>selection par l'ID de l'experience (pas de filtrage)</legend>
                        <label for="${this.id_experience_select}">Selection de l'ID d'experience</label>
                        <input type="te" placeholder="[lettre][chiffre]-[lettre][chiffre]" value="" id="${this.id_experience_select}"/>
                    </fieldset>
                </div>
                <div style="text-align: right;">
                    <button class="ui button primary voir" type="submit" id="${this._idOKChercheButton}" style="margin-top: 5px !important;">Cherche ...</button></td>
                </div>

                <div>
                    <fieldset class="pure-group pure-input" style="border-color: red;">
                        <legend>selection par filtrage</legend>
                        <fieldset class="pure-group pure-input-1-4" style="border-style: none;">
                            <label for="${this.id_territoire_select}">Territoire</label>
                            ${selectTerritoire}
                        </fieldset>
                        <fieldset>
                            <legend>selection genotype</legend>`;
        for (let i: number = 0; i < 4; i++) {
            retour += `
                            <label for="${this.id_selectchromosome}_${i}">chromosome${i + 1}</label>
                            ${selectchromosome[i]}
                            `;
        }
        retour += `
                        </fieldset>
                        <fieldset class="pure-group pure-input-1-4"  style="border-style: none;">
                            <label for="Scomparatif_input">S comparatif (&lt; 0.05)</label>
                            <input type="number" placeholder="1.0e-2" min="0" max="0.05" step="any" value="0" id="${this._idSComparatif}"/>
                        </fieldset>
                    </fieldset>
                </div>
        </form>
            <div id="${this._idResultatDB}" style="margin-top: 5px;">Resultats</div>
        `;

        return retour;
    }
}

