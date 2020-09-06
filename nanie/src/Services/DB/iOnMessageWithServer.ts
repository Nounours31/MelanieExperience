export interface iGenotypeMessage {
    uid?: number;
    chromosome1: string;
    chromosome2: string;
    chromosome3: string;
    chromosome4: string;
    nbechantillon: number;
    idexperience?: number;
}

export interface iResultatMessage {
    uid?: number;
    experiencestringid?: string;
    idexperience: number;
    territoire:string;
    marquage: string;
    SGeneral: number;
    SComparatif: number;
    typedetest: string;
    NbGenotype?: number;
    dateinsert?: string;
    Genotype?: iGenotypeMessage[];
}

export interface iExperienceIDMessage {
    uid?: number;
    experiencestringid: string;
    faiteparqui: string;
    daterealisationexperience: string;
    dateinsert: string;
}
export interface iExperienceFilesMessage {
    uid?: number;
    files: iInternalExperienceOneFileMessage[];
    path?: string;
    url?: string;
    nom?: string;
}

export interface iInternalExperienceOneFileMessage {
    fileName: string;
    fileURL: string;
}
