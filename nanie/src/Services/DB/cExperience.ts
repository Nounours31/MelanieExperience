import cAjax from './cAjax';

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

export  class cExperience {
    constructor () {}

    static getAllPersone() : string[] {
        let retour : string[] = [];
        retour.push('Nanie');
        retour.push('Pap\'s');

        let c = new cAjax();
        let data: string = "{'class': 'experience', 'requete': 'Update', 'args': [{'ExperienceId': 'ss' }, {'date': 'date' }]}";
        c.postData('http://localhost:88/nanie/server/WS/BRIWS.php', data);

        return retour;
    }

    static getAllExperienceInitiale(): string[] {
        let retour: string[] = [];
        retour.push('A');
        retour.push('B');
        retour.push('C');
        return retour;
    }

    static createDBExperience(experienceId: string, date: string, qui: string, files: FileList): number {
        return 1234;
    }

    static updateDBExperience(experience: iAllInfoForUpdateExperience): number {
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