export interface iAllGenotypeInfoForUpdateExperience {
    Chromo1: string;
    Chromo2: string;
    Chromo3: string;
    Chromo4: string;
    NbEchantillon: number;
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
export interface iExperienceInfoGenerale {
    ExperienceID: string;
    Qui: string;
    date: string;
    dateEnreg: string;
}
export interface iExperienceInfoFiles {
    files: iExperienceInfoOneFile[];
}
export interface iExperienceInfoOneFile {
    fileName: string;
    fileURL: string;
}
