import { iGenotypeMessage, iResultatMessage } from './iOnMessageWithServer';
import { iExperienceIDMessage, iExperienceFilesMessage } from './iOnMessageWithServer';
export declare class cExperience {
    private _ajax;
    private static _singleton;
    private constructor();
    private static getInstance;
    static getAllPersone(): string[];
    static getAllExperienceInitiale(): string[];
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
    static getAllTestType(): string[];
    static getAllMarquage(): string[];
    static getAllchromosome1(): string[];
    static getAllchromosome2(): string[];
    static getAllchromosome3(): string[];
    static getAllchromosome4(): string[];
    private static getAllchromosomeXX;
    static create_iResultatMessage(): iResultatMessage;
    static create_iGenotypeMessage(): iGenotypeMessage;
}
