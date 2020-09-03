import { cAjax, cAjaxSendMessage, iAjaxSendMessageArgs } from './cAjax';
import cEnvt from '../../infra/cEnvt';
import cMyUI_MainTab_create from '../../cMyUI_MainTab_create';

export interface iAllGenotypeInfoForUpdateExperience {
    Chromo1: string;
    Chromo2: string;
    Chromo3: string;
    Chromo4: string;
}

export interface iAllInfoForUpdateExperience {
    ExpId: string;
    NbGenotype: number;
    Genotype: iAllGenotypeInfoForUpdateExperience[];
    Marquage: string;
    TypeTest: string;
    SGeneral: number;
    SComparatif: number;
}

export class cExperience {
    private _ajax: cAjax = new cAjax();
    private static _singleton: cExperience | null = null;

    private constructor () {
        this._ajax = new cAjax();
    }

    private static getInstance(): cExperience {
        if (cExperience._singleton == null)
            cExperience._singleton = new cExperience();

        return cExperience._singleton;
    }

    static getAllPersone() : string[] {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour : string[] = [];

        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString ('personnes', 'getAllPersonnes', null);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response : string = me._ajax.getData();
            let jsonObject : JSON = JSON.parse (response);
            if (Array.isArray(jsonObject)) {
                jsonObject.forEach(element => {
                    retour.push (element);
                });
            }
        }
        return retour;
    }

    static getAllExperienceInitiale(): string[] {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour: string[] = [];

        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'getAllExperienceInitiale', null);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response: string = me._ajax.getData();
            let jsonObject: JSON = JSON.parse(response);
            if (Array.isArray(jsonObject)) {
                jsonObject.forEach(element => {
                    retour.push(element);
                });
            }
        }
        return retour;
    }

    static createDBExperience(experienceId: string, date: string, qui: string, files: FileList): number {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour: string[] = [];

        let args: iAjaxSendMessageArgs[] = [];
        let arg1: iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromString('ExperienceId', experienceId);
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromString('date', date);
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromString('qui', qui);
        args.push(arg1);
        if (files.length > 0) {
            arg1 = cAjaxSendMessage.buildArgsFromString('files', (files.item(0) as File).name);
            args.push(arg1);
        }

        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'create', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response: string = me._ajax.getData();
            let jsonObject: JSON = JSON.parse(response);
            if ('uid' in jsonObject)
                return jsonObject['uid'];
        }

        return 0;
    }

    static uploadFiles(id: number, files: FileList) {
        let data : FormData = new FormData();
        for (let i = 0; i < files.length; i++) {
            let f : File | null = files.item(i);
            if (f == null)
                continue;
            data.append ('file-' + i, f, f.name);
        }

        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();

        data.append('experienceId', id.toString());
        data.append('_classe', 'experience');
        data.append('_requete', 'uploadFile');
        me._ajax.postFiles(cEnvt.getAjaxURLWS(), data);
    }




    
    static updateDBExperience(experience: iAllInfoForUpdateExperience): number {
        let retour: string[] = [];
        retour.push('Nanie');
        retour.push('Pap\'s');

        let c = new cAjax();
        let args: iAjaxSendMessageArgs[] = [];
        let arg1: iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromString('ExperienceId', 'SS');
        args.push(arg1);

        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'update', args);
        c.postData('http://localhost:88/nanie/server/WS/BRIWS.php', msg);

        //return retour;
                return 1234;
    }

    static dumpFromDB(id: number, _idResultatDB: string) {
        throw new Error('Method not implemented.');
    }

    static getAllTestType(): string[] {
        let retour: string[] = [];
        retour.push('Wallis');
        retour.push('Student');
        return retour;
    }

    static getAllMarquage(): string[] {
        let retour: string[] = [];
        retour.push('Dcp-1');
        retour.push('Kema');
        return retour;
    }

    static getAllChromo1(): string[] {
        return cExperience.getAllChromoXX();
    }
    static getAllChromo2(): string[] {
        return cExperience.getAllChromoXX();
    }
    static getAllChromo3(): string[] {
        return cExperience.getAllChromoXX();
    }
    static getAllChromo4(): string[] {
        return cExperience.getAllChromoXX();
    }

    private static getAllChromoXX(): string[] {
        let retour: string[] = [];
        retour.push('-');
        retour.push('Pink[5]');
        retour.push('Vg');
        retour.push('LacZ');
        retour.push('White');
        retour.push('Debcl');
        retour.push('Pink');
        return retour;
    }

    static create_iAllInfoForUpdateExperience(): iAllInfoForUpdateExperience {
        let retour: iAllInfoForUpdateExperience = {
            'ExpId': '',
            'Genotype' : [],
            'Marquage' : '',
            'NbGenotype' : 0,
            'SComparatif' : 0,
            'SGeneral' : 0,
            'TypeTest' : ''
        };
        return retour;
    }

    static create_iAllGenotypeInfoForUpdateExperience(): iAllGenotypeInfoForUpdateExperience {
        let retour: iAllGenotypeInfoForUpdateExperience = {
            'Chromo1': '',
            'Chromo2': '',
            'Chromo3': '',
            'Chromo4': ''
        };
        return retour;
    }

}