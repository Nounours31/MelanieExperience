export interface iStringNumberMessage {
    uid: number;
    nom: string;
}
export interface iGenotypeMessage {
    uid?: number;
    chromosome1: number;
    chromosome2: number;
    chromosome3: number;
    chromosome4: number;
    nbechantillon: number;
    idexperience?: number;
    sChromosome1?: string;
    sChromosome2?: string;
    sChromosome3?: string;
    sChromosome4?: string;
}
export interface iResultatMessage {
    uid?: number;
    experiencestringid?: string;
    idexperience: number;
    territoire: number;
    sTerritoire?: string;
    marquage: number;
    sMarquage?: string;
    SGeneral: number;
    SComparatif: number;
    typedetest: number;
    sTypedetest?: string;
    NbGenotype?: number;
    dateinsert?: string;
    Genotype?: iGenotypeMessage[];
}
export interface iExperienceIDMessage {
    uid?: number;
    experiencestringid: string;
    daterealisationexperience: string;
    dateinsert: string;
    faiteparqui: number;
    sFaiteparqui?: string;
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
