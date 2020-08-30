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
export declare class cExperience {
    constructor();
    static getAllPersone(): string[];
    static getAllExperienceInitiale(): string[];
    static createDBExperience(experienceId: string, date: string, qui: string, files: FileList): number;
    static updateDBExperience(experience: iAllInfoForUpdateExperience): number;
    static dumpFromDB(id: number, _idResultatDB: string): void;
    static getAllTestType(): string[];
    static getAllMarquage(): string[];
    static getAllChromo1(): string[];
    static getAllChromo2(): string[];
    static getAllChromo3(): string[];
    static getAllChromo4(): string[];
    private static getAllChromoXX;
    static create_iAllInfoForUpdateExperience(): iAllInfoForUpdateExperience;
    static create_iAllGenotypeInfoForUpdateExperience(): iAllGenotypeInfoForUpdateExperience;
}
