import { cAjax, cAjaxSendMessage, iAjaxSendMessageArgs } from './cAjax';
import cEnvt from '../../infra/cEnvt';
import { iGenotypeMessage, iResultatMessage } from './iOnMessageWithServer';
import { iExperienceIDMessage, iExperienceFilesMessage, iInternalExperienceOneFileMessage } from './iOnMessageWithServer';

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

        static isUserExistInDB(nom:string, alias:string, email:string) : boolean {
            let me: cExperience = cExperience.getInstance();
            me._ajax.reset();
            let retour : string[] = [];
    
            let args: iAjaxSendMessageArgs[] = [];
            let arg : iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromString('alias', alias);
            args.push(arg);
            arg = cAjaxSendMessage.buildArgsFromString('email', email);
            args.push(arg);
            arg = cAjaxSendMessage.buildArgsFromString('nom', nom);
            args.push(arg);
            let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString ('personnes', 'isUserExistInDB', args);
            me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
            if (me._ajax.getStatus() == 0) {
                let response : string = me._ajax.getData();
                if (response.length > 0) {
                    if (response === 'false') 
                        return false;
                    if (response === 'true') 
                        return true;
                }
            }
            return false;
        }

        static createUserInDB(nom:string, alias:string, email:string, pwd:string) : boolean {
            let me: cExperience = cExperience.getInstance();
            me._ajax.reset();
            let retour : string[] = [];
    
            let args: iAjaxSendMessageArgs[] = [];
            let arg : iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromString('alias', alias);
            args.push(arg);
            arg = cAjaxSendMessage.buildArgsFromString('email', email);
            args.push(arg);

            arg = cAjaxSendMessage.buildArgsFromString('nom', nom);
            args.push(arg);
            arg = cAjaxSendMessage.buildArgsFromString('pwd', pwd);
            args.push(arg);

            let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString ('personnes', 'createUserInDB', args);
            me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
            if (me._ajax.getStatus() == 0) {
                let response : string = me._ajax.getData();
                if (response.length > 0) {
                    if (response.length > 0) {
                        if (response === 'false') 
                            return false;
                        if (response === 'true') 
                            return true;
                    }
                }
            }
            return false;
        }

        

    static getMd5PasswdFromMailorAlias(emailOralias:string, type:string) : string | null {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour : string[] = [];

        let args: iAjaxSendMessageArgs[] = [];
        let arg : iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromString('emailOralias', emailOralias);
        args.push(arg);
        arg = cAjaxSendMessage.buildArgsFromString('type', type);
        args.push(arg);
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString ('personnes', 'getMd5PasswdFromMailorAlias', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response : string = me._ajax.getData();
            return response;
        }
        return null;
    }

    static setLogin(emailOralias:string, type:string) : boolean {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour : string[] = [];

        let args: iAjaxSendMessageArgs[] = [];
        let arg : iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromString('emailOralias', emailOralias);
        args.push(arg);
        arg = cAjaxSendMessage.buildArgsFromString('type', type);
        args.push(arg);
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString ('personnes', 'setLogin', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response : string = me._ajax.getData();
            if (response.length > 0) {
                me._ajax.setToken(response);
                return true;
            }
        }
        return false;
    }

    static sendTokenForPasswordLost(nom : string | null, alias: string | null, email: string| null) : boolean {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour : string[] = [];

        let args: iAjaxSendMessageArgs[] = [];
        let arg : iAjaxSendMessageArgs;
        if (nom != null) {
            arg = cAjaxSendMessage.buildArgsFromString('nom', nom);
            args.push(arg);
        }
        if (alias != null) {
            arg = cAjaxSendMessage.buildArgsFromString('alias', alias);
            args.push(arg);
        }
        if (email != null) {
            arg = cAjaxSendMessage.buildArgsFromString('email', email);
            args.push(arg);
        }
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString ('personnes', 'sendTokenForPasswordLost', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response : string = me._ajax.getData();
            if (response.length > 0) {
                me._ajax.setToken(response);
                return true;
            }
        }
        return false;
    }
    static updatePwd(token : string, pwd: string) : boolean {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour : string[] = [];

        let args: iAjaxSendMessageArgs[] = [];
        let arg : iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromString('tokenPwd', token);
        args.push(arg);
        arg = cAjaxSendMessage.buildArgsFromString('pwd', pwd);
        args.push(arg);
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString ('personnes', 'updatePwd', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response : string = me._ajax.getData();
            if (response.length > 0) {
                me._ajax.setToken(response);
                return true;
            }
        }
        return false;
    }




    static checkToken(token:string) : boolean {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour : string[] = [];

        let args: iAjaxSendMessageArgs[] = [];
        let arg : iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromString('token', token);
        args.push(arg);
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString ('personnes', 'checkToken', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response : string = me._ajax.getData();
            if (response.length > 0) {
                if (response.toLowerCase() == 'true') {
                    return true;
                }
            }
        }
        return false;
    }

    
    

    static launchSQLListUIDExperience(sql: string): number[] {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour: number[] = [];

        let args: iAjaxSendMessageArgs[] = [];
        let arg: iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromString('sql', sql);
        args.push(arg);
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'launchSQLListUIDExperience', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response: string = me._ajax.getData();
            let jsonObject: JSON = JSON.parse(response);
            if (Array.isArray(jsonObject)) {
                jsonObject.forEach(element => {
                    retour.push(element.uid);
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

    static createDBExperience(experienceId: string, date: string, qui: string): number {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour: string[] = [];

        let args: iAjaxSendMessageArgs[] = [];
        let arg1: iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromString('experiencestringid', experienceId);
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromString('daterealisationexperience', date);
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromString('faiteparqui', qui);
        args.push(arg1);

        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'create', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response: string = me._ajax.getData();
            return Number.parseInt (response);
        }

        return 0;
    }



    static getExperienceUidFromExperienceStringid(experiencestringid : string): number {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour: number[] = [];

        let args: iAjaxSendMessageArgs[] = [];
        let arg1: iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromString('experiencestringid', experiencestringid);
        args.push(arg1);
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'getExperienceUidFromExperienceStringid', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response: string = me._ajax.getData();
            return Number.parseInt (response);
        }
        return 0;
    }

    static getAllExperienceUid(): number[] {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour: number[] = [];

        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'getAllExperienceUid', null);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response: string = me._ajax.getData();
            let resp: Array<number> = (JSON.parse(response) as Array<number>);
            resp.forEach(element => {
                retour.push(element);
            });
        }
        return retour;
    }

    static getExperience_InfoGenerale(iExpUid: number): iExperienceIDMessage | null {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();

        let args: iAjaxSendMessageArgs[] = [];
        let arg1: iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'getExperience_InfoGenerale', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response: string = me._ajax.getData();
            let resp: Array<iExperienceIDMessage> = (JSON.parse(response) as Array<iExperienceIDMessage>);
            return resp[0];
        }
        return null;
    }


    static getExperience_ResultatGenotype(iExpUid: number): iGenotypeMessage[]|null {
        let me: cExperience = cExperience.getInstance();
        let args: iAjaxSendMessageArgs[] = [];
        let arg1: iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'getExperience_ResultatGenotype', args);
        
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response: string = me._ajax.getData();
            let resp: Array<iGenotypeMessage> = (JSON.parse(response) as Array<iGenotypeMessage>);
            return resp;
        }
        return null;
    }
    static getExperience_ResultatTest(iExpUid: number): iResultatMessage[] | null {
        let me: cExperience = cExperience.getInstance();
        let args: iAjaxSendMessageArgs[] = [];
        let arg1: iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'getExperience_ResultatTest', args);

        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response: string = me._ajax.getData();
            let resp: Array<iResultatMessage> = (JSON.parse(response) as Array<iResultatMessage>);
            return resp;
        }
        return null;
    }

    static getExperience_ResultatImage(iExpUid: number): iExperienceFilesMessage[] | null {
        let me: cExperience = cExperience.getInstance();
        let args: iAjaxSendMessageArgs[] = [];
        let arg1: iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'getExperience_ResultatImage', args);

        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response: string = me._ajax.getData();
            let resp: Array<iExperienceFilesMessage> = (JSON.parse(response) as Array<iExperienceFilesMessage>);
            return resp;
        }
        return null;
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





    static updateDBExperience(experience: iResultatMessage): number {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour: number = -1;
        
        let args: iAjaxSendMessageArgs[] = [];
        let arg1: iAjaxSendMessageArgs = cAjaxSendMessage.buildArgsFromNum('idexperience', (experience.idexperience as number));
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromString('marquage', experience.marquage);
        args.push(arg1);
        if (experience.NbGenotype != null) {
            arg1 = cAjaxSendMessage.buildArgsFromNum('NbGenotype', experience.NbGenotype);
            args.push(arg1);
        }
        arg1 = cAjaxSendMessage.buildArgsFromNum('SComparatif', experience.SComparatif);
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromNum('SGeneral', experience.SGeneral);
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromString('typedetest', experience.typedetest);
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromString('territoire', experience.territoire);
        args.push(arg1);
        if (experience.Genotype != null) {
            arg1 = cAjaxSendMessage.buildArgsFromArray('Genotype', experience.Genotype);
            args.push(arg1);
        }
        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'update', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            let response: string = me._ajax.getData();
            console.log(response);
        }
        return retour;
    }




    static dumpFromDB(id: number, _idResultatDB: string) {
        throw new Error('Method not implemented.');
    }

    static getAllTestType(): string[] {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour: string[] = [];

        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'getAllTestTypes', null);
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

    static getAllMarquage(): string[] {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour: string[] = [];

        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'getAllMarquage', null);
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

    
    static getAllTerritoire(): string[] {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour: string[] = [];

        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'getAllTerritoire', null);
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

    static getAllchromosome1(): string[] {
        return cExperience.getAllchromosomeXX();
    }
    static getAllchromosome2(): string[] {
        return cExperience.getAllchromosomeXX();
    }
    static getAllchromosome3(): string[] {
        return cExperience.getAllchromosomeXX();
    }
    static getAllchromosome4(): string[] {
        return cExperience.getAllchromosomeXX();
    }

    private static getAllchromosomeXX(): string[] {
        let me: cExperience = cExperience.getInstance();
        me._ajax.reset();
        let retour: string[] = [];

        let msg: cAjaxSendMessage = cAjaxSendMessage.buildFromString('experience', 'getAllChromosomes', null);
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

    static create_iResultatMessage(): iResultatMessage {
        let retour: iResultatMessage = {
            'idexperience': 0,
            'experiencestringid': '',
            'Genotype' : [],
            'marquage': '',
            'territoire': '',
            'NbGenotype' : 0,
            'SComparatif' : 0,
            'SGeneral' : 0,
            'typedetest' : ''
        };
        return retour;
    }

    static create_iGenotypeMessage(): iGenotypeMessage {
        let retour: iGenotypeMessage = {
            'chromosome1': '',
            'chromosome2': '',
            'chromosome3': '',
            'chromosome4': '',
            'nbechantillon': 0
        };
        return retour;
    }

}