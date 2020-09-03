import { cAjax, cAjaxSendMessage } from './cAjax';
import cEnvt from '../../infra/cEnvt';
var cExperience = /** @class */ (function () {
    function cExperience() {
        this._ajax = new cAjax();
        this._ajax = new cAjax();
    }
    cExperience.getInstance = function () {
        if (cExperience._singleton == null)
            cExperience._singleton = new cExperience();
        return cExperience._singleton;
    };
    cExperience.getAllPersone = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = cAjaxSendMessage.buildFromString('personnes', 'getAllPersonnes', null);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var jsonObject = JSON.parse(response);
            if (Array.isArray(jsonObject)) {
                jsonObject.forEach(function (element) {
                    retour.push(element);
                });
            }
        }
        return retour;
    };
    cExperience.getAllExperienceInitiale = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = cAjaxSendMessage.buildFromString('experience', 'getAllExperienceInitiale', null);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var jsonObject = JSON.parse(response);
            if (Array.isArray(jsonObject)) {
                jsonObject.forEach(function (element) {
                    retour.push(element);
                });
            }
        }
        return retour;
    };
    cExperience.createDBExperience = function (experienceId, date, qui, files) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var args = [];
        var arg1 = cAjaxSendMessage.buildArgsFromString('ExperienceId', experienceId);
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromString('date', date);
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromString('qui', qui);
        args.push(arg1);
        if (files.length > 0) {
            arg1 = cAjaxSendMessage.buildArgsFromString('files', files.item(0).name);
            args.push(arg1);
        }
        var msg = cAjaxSendMessage.buildFromString('experience', 'create', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var jsonObject = JSON.parse(response);
            if ('uid' in jsonObject)
                return jsonObject['uid'];
        }
        return 0;
    };
    cExperience.uploadFiles = function (id, files) {
        var data = new FormData();
        for (var i = 0; i < files.length; i++) {
            var f = files.item(i);
            if (f == null)
                continue;
            data.append('file-' + i, f, f.name);
        }
        var me = cExperience.getInstance();
        me._ajax.reset();
        data.append('experienceId', id.toString());
        data.append('_classe', 'experience');
        data.append('_requete', 'uploadFile');
        me._ajax.postFiles(cEnvt.getAjaxURLWS(), data);
    };
    cExperience.updateDBExperience = function (experience) {
        var retour = [];
        retour.push('Nanie');
        retour.push('Pap\'s');
        var c = new cAjax();
        var args = [];
        var arg1 = cAjaxSendMessage.buildArgsFromString('ExperienceId', 'SS');
        args.push(arg1);
        var msg = cAjaxSendMessage.buildFromString('experience', 'update', args);
        c.postData('http://localhost:88/nanie/server/WS/BRIWS.php', msg);
        //return retour;
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
    cExperience._singleton = null;
    return cExperience;
}());
export { cExperience };
//# sourceMappingURL=cExperience.js.map