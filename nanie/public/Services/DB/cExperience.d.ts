import { iGenotypeMessage, iResultatMessage } from './iOnMessageWithServer';
import { iExperienceIDMessage, iExperienceFilesMessage, iStringNumberMessage } from './iOnMessageWithServer';
export declare class cExperience {
    private _ajax;
    private static _singleton;
    private constructor();
    private static getInstance;
    static getAllPersone(): iStringNumberMessage[];
    static isUserExistInDB(nom: string, alias: string, email: string): boolean;
    static createUserInDB(nom: string, alias: string, email: string, pwd: string): boolean;
    static getPersonneMd5PasswdFromMailorAlias(emailOralias: string, type: string): string | null;
    static getPersonneFromUid(uid: number): object | null;
    static setLogin(emailOralias: string, type: string): boolean;
    static sendTokenForPasswordLost(nom: string | null, alias: string | null, email: string | null): boolean;
    static updatePwd(token: string, pwd: string): boolean;
    static deleteGenotypeFromuid(uid: number): boolean;
    static deleteFileFronuid(uid: number): boolean;
    static checkToken(token: string): boolean;
    static launchSQLListUIDExperience(sql: string): number[];
    static getAllExperienceInitiale(): iStringNumberMessage[];
    static createDBExperience(experienceId: string, date: string, qui: string): number;
    static getExperienceUidFromExperienceStringid(experiencestringid: string): number;
    static getAllExperienceUid(): number[];
    static getExperience_InfoGenerale(iExpUid: number): iExperienceIDMessage | null;
    static getExperience_ResultatGenotype(iExpUid: number): iGenotypeMessage[] | null;
    static getExperience_ResultatTest(iExpUid: number): iResultatMessage[] | null;
    static getExperience_ResultatImage(iExpUid: number): iExperienceFilesMessage[] | null;
    static uploadFiles(id: number, files: FileList): void;
    static updateDBExperience(experience: iResultatMessage): number;
    static dumpFromDB(id: number, _idResultatDB: string): void;
    static getAllTestType(): iStringNumberMessage[];
    static getAllMarquage(): iStringNumberMessage[];
    static getAllTerritoire(): iStringNumberMessage[];
    static getAllchromosome1(): iStringNumberMessage[];
    static getAllchromosome2(): iStringNumberMessage[];
    static getAllchromosome3(): iStringNumberMessage[];
    static getAllchromosome4(): iStringNumberMessage[];
    private static getAllchromosomeXX;
    static create_iResultatMessage(): iResultatMessage;
    static create_iGenotypeMessage(): iGenotypeMessage;
}
