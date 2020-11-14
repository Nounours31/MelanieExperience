import { cExperience } from './Services/DB/cExperience';
import { iResultatMessage, iGenotypeMessage } from './Services/DB/iOnMessageWithServer';
import { iExperienceIDMessage, iExperienceFilesMessage } from './Services/DB/iOnMessageWithServer';
import { iMyHtmlInfo, cTools } from './infra/cTools';
import cMyUI from './cMyUI';
import cEnvt from './infra/cEnvt';


interface iCodeInfo {
    Code?: string;
    experiencestringid?: string;
}

interface iCSVInfo {
    Code: string;
    CodeBase?: string;
    Concluante?: string;
    Experimentateur?: string;
    MaxIter?: string;
    Objectif?: string;
    ObjectifAsInt?: string;
    Test?: string;
    TestAsLetter?: string;
}

export default class cMyUI_CSV extends cMyUI {
    constructor () {
        super('cMyUI_CSV');
    }

    public generateCSVData () : string {
        let retour : string = '';
        retour += 'Code;Experimentateur;Identification;Objectif;typetest;Test; Nb de rept;Concluante;Code Base MAX \r\n';
        
        // -------------------------------------------------
        // les SQL de decortiquange des info
        // -------------------------------------------------
        const sCodeInSQL: string = "substring(exp.experiencestringid, 1, INSTR(exp.experiencestringid, '-')+1) as Code";
        const sExperimentateurInSQL: string = 'p.nom as Experimentateur';
        const sObjectifInSQL: string = '\"manque objectif\" as Objectif';
        const sTestInSQL: string = '\"manque test\" as Test';

        // -------------------------------------------------
        // recup de toute les exp triees sans les iterations
        // -------------------------------------------------
        let sqlOnCode = `select distinct ${sCodeInSQL}`;
        sqlOnCode += ' from experience exp ';
        sqlOnCode += " order by cast(substring(exp.experiencestringid, 2, INSTR(exp.experiencestringid, '-')-2) as signed integer) asc";
        sqlOnCode += ", (substring(exp.experiencestringid, 1, 2)) asc";
        console.log(sqlOnCode);

        let allCode: object[] = cExperience.launchSQL(sqlOnCode);
        allCode.forEach(element => {
            let oneCodeExpValue = element as iCodeInfo;
            let iAllCSVValues: iCSVInfo = element as iCSVInfo;
            iAllCSVValues.Code = oneCodeExpValue.Code as string;
            iAllCSVValues.ObjectifAsInt = iAllCSVValues.Code.substring(1, iAllCSVValues.Code.indexOf('-'));
            iAllCSVValues.TestAsLetter = iAllCSVValues.Code.substring(iAllCSVValues.Code.indexOf('-') + 1, iAllCSVValues.Code.length);


            // ----------------------
            // Recup du max d'iteration
            // ----------------------
            let iMaxIte: number = 0;
            let sqlMaxIte = `select exp.experiencestringid`;
            sqlMaxIte += ' from experience exp ';
            sqlMaxIte += ` where (exp.experiencestringid like \'${oneCodeExpValue.Code}%\')`;
            console.log(sqlMaxIte);
            
            let allIteration: object[] = cExperience.launchSQL(sqlMaxIte);
            allIteration.forEach(element2 => {
                let oneIterationValue = element2 as iCodeInfo;
                let s : string = oneIterationValue.experiencestringid as string;
                let i: number = parseInt (s.substring(s.indexOf('-') + 2, s.length));
                if (i > iMaxIte)
                    iMaxIte = i;
            });
            iAllCSVValues.MaxIter = iMaxIte.toString ();

            // ----------------------
            // Recup du Concluant ?
            // ----------------------
            let sConcluante: string = '-';
            let sqlConcluante = `select exp.experiencestringid`;
            sqlConcluante += ' from experience exp ';
            sqlConcluante += ' inner join experience_resultatdestests res on (exp.uid = res.idexperience)';
            sqlConcluante += ` where ((exp.experiencestringid like \'${oneCodeExpValue.Code}%\') and (res.sComparatif < 0.05))`;
            console.log(sqlConcluante);

            let iLoop : number = 0;
            let allConcluante: object[] = cExperience.launchSQL(sqlConcluante);
            allConcluante.forEach(element3 => {
                console.log('element3 :');
                console.log(element3);

                let oneCoeOfAConcluanteExp = element3 as iCodeInfo;
                let s: string = oneCoeOfAConcluanteExp.experiencestringid as string;
                let i: number = parseInt(s.substring(s.indexOf('-') + 2, s.length));
                iLoop++;
                if (iLoop > 1)
                    sConcluante = sConcluante + ', ' + i.toString();
                else
                    sConcluante = i.toString();
            });
            iAllCSVValues.Concluante = sConcluante;
            iAllCSVValues.CodeBase = iAllCSVValues.Code + iAllCSVValues.MaxIter;
            // ----------------------
            // pour chaqun des codes recup des info
            // ----------------------
            let sql = `select ${sExperimentateurInSQL}, ${sObjectifInSQL}, ${sTestInSQL}`;
            sql += ' from experience exp ';
            sql += ' inner join personnes p on (p.uid = exp.faiteparqui)';
            sql += ` where(exp.experiencestringid like \'${oneCodeExpValue.Code}%\')`;
            console.log(sql);

            let allInfoForCSV: object[] = cExperience.launchSQL(sql);
            let y = allInfoForCSV[0] as iCSVInfo;
            iAllCSVValues.Experimentateur = y.Experimentateur as string;
            iAllCSVValues.Objectif = y.Objectif as string;
            iAllCSVValues.Test = y.Test as string;
            retour += y.Code + ';' + iAllCSVValues.Experimentateur + ';' + iAllCSVValues.ObjectifAsInt + ';' + iAllCSVValues.Objectif + ';';
            retour += iAllCSVValues.TestAsLetter + ';' + iAllCSVValues.Test + ';' + iAllCSVValues.MaxIter + ';' + iAllCSVValues.Concluante + ';' + iAllCSVValues.CodeBase + '\r\n' ;
        });
        return retour;
    }

    public addCallBackOnMyDialog(): void {
        let mime_type = 'text/plain';
        let me: cMyUI_CSV = this;
        $(`#totototo`).on('click', function (event: JQuery.ClickEvent) : boolean {
            let CSVFile: string = me.generateCSVData();
            me.download_file('Nanie.csv', CSVFile, mime_type);
            event.stopImmediatePropagation;
            return false;
        });
    }

    private download_file (fileName:string, content : string, mime_type : string) : void {
        let blob : Blob = new Blob([content], { type: mime_type });

        // --------------------------------------------
        // Creation d'un lien ANCRE temporaire a detruire apres le download
        // --------------------------------------------
        let dlink = document.createElement('a');
        dlink.download = fileName;
        dlink.href = window.URL.createObjectURL(blob);
        dlink.onclick = function (eventx : Event) {
            // revokeObjectURL needs a delay to work properly
            setTimeout(function (eventy: Event) {
                window.URL.revokeObjectURL(dlink.href);
            }, 1500);
        };
        dlink.click();
        dlink.remove();
    }

    public draw (): string {
        let retour : string = `<button id="totototo">ClicktoDownload</button>`;
        return retour;
    }
}

