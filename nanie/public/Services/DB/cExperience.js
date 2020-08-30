import cAjax from './cAjax';
var cExperience = /** @class */ (function () {
    function cExperience() {
    }
    cExperience.getAllPersone = function () {
        var retour = [];
        retour.push('Nanie');
        retour.push('Pap\'s');
        var c = new cAjax();
        var data = "{'class': 'experience', 'requete': 'Update', 'args': [{'ExperienceId': 'ss' }, {'date': 'date' }]}";
        c.postData('http://localhost:88/nanie/server/WS/BRIWS.php', data);
        return retour;
    };
    cExperience.getAllExperienceInitiale = function () {
        var retour = [];
        retour.push('A');
        retour.push('B');
        retour.push('C');
        return retour;
    };
    cExperience.createDBExperience = function (experienceId, date, qui, files) {
        return 1234;
    };
    cExperience.updateDBExperience = function (experience) {
        return 1234;
    };
    cExperience.dumpFromDB = function (id, _idResultatDB) {
        throw new Error('Method not implemented.');
    };
    cExperience.getAllTestType = function () {
        var retour = [];
        retour.push('Wallis');
        retour.push('Student');
        return retour;
    };
    cExperience.getAllMarquage = function () {
        var retour = [];
        retour.push('Dcp-1');
        retour.push('Kema');
        return retour;
    };
    cExperience.getAllChromo1 = function () {
        return cExperience.getAllChromoXX();
    };
    cExperience.getAllChromo2 = function () {
        return cExperience.getAllChromoXX();
    };
    cExperience.getAllChromo3 = function () {
        return cExperience.getAllChromoXX();
    };
    cExperience.getAllChromo4 = function () {
        return cExperience.getAllChromoXX();
    };
    cExperience.getAllChromoXX = function () {
        var retour = [];
        retour.push('-');
        retour.push('Pink[5]');
        retour.push('Vg');
        retour.push('LacZ');
        retour.push('White');
        retour.push('Debcl');
        retour.push('Pink');
        return retour;
    };
    cExperience.create_iAllInfoForUpdateExperience = function () {
        var retour = {
            'ExpId': '',
            'Genotype': [],
            'Marquage': '',
            'NbGenotype': 0,
            'SComparatif': 0,
            'SGeneral': 0,
            'TypeTest': ''
        };
        return retour;
    };
    cExperience.create_iAllGenotypeInfoForUpdateExperience = function () {
        var retour = {
            'Chromo1': '',
            'Chromo2': '',
            'Chromo3': '',
            'Chromo4': ''
        };
        return retour;
    };
    return cExperience;
}());
export { cExperience };
//# sourceMappingURL=cExperience.js.map