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
    cExperience.isUserExistInDB = function (alias, email) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var args = [];
        var arg = cAjaxSendMessage.buildArgsFromString('emailOralias', emailOralias);
        args.push(arg);
        arg = cAjaxSendMessage.buildArgsFromString('type', type);
        args.push(arg);
        var msg = cAjaxSendMessage.buildFromString('personnes', 'setLogin', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            if (response.length > 0) {
                me._ajax.setToken(response);
                return true;
            }
        }
        return false;
    };
    cExperience.createUserInDB = function (alias, email, pwd) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var args = [];
        var arg = cAjaxSendMessage.buildArgsFromString('emailOralias', emailOralias);
        args.push(arg);
        arg = cAjaxSendMessage.buildArgsFromString('type', type);
        args.push(arg);
        var msg = cAjaxSendMessage.buildFromString('personnes', 'setLogin', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            if (response.length > 0) {
                me._ajax.setToken(response);
                return true;
            }
        }
        return false;
    };
    cExperience.getMd5PasswdFromMailorAlias = function (emailOralias, type) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var args = [];
        var arg = cAjaxSendMessage.buildArgsFromString('emailOralias', emailOralias);
        args.push(arg);
        arg = cAjaxSendMessage.buildArgsFromString('type', type);
        args.push(arg);
        var msg = cAjaxSendMessage.buildFromString('personnes', 'getMd5PasswdFromMailorAlias', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            return response;
        }
        return null;
    };
    cExperience.setLogin = function (emailOralias, type) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var args = [];
        var arg = cAjaxSendMessage.buildArgsFromString('emailOralias', emailOralias);
        args.push(arg);
        arg = cAjaxSendMessage.buildArgsFromString('type', type);
        args.push(arg);
        var msg = cAjaxSendMessage.buildFromString('personnes', 'setLogin', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            if (response.length > 0) {
                me._ajax.setToken(response);
                return true;
            }
        }
        return false;
    };
    cExperience.checkToken = function (token) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var args = [];
        var arg = cAjaxSendMessage.buildArgsFromString('token', token);
        args.push(arg);
        var msg = cAjaxSendMessage.buildFromString('personnes', 'checkToken', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            if (response.length > 0) {
                if (response.toLowerCase() == 'true') {
                    return true;
                }
            }
        }
        return false;
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
    cExperience.createDBExperience = function (experienceId, date, qui) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var args = [];
        var arg1 = cAjaxSendMessage.buildArgsFromString('experiencestringid', experienceId);
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromString('daterealisationexperience', date);
        args.push(arg1);
        arg1 = cAjaxSendMessage.buildArgsFromString('faiteparqui', qui);
        args.push(arg1);
        var msg = cAjaxSendMessage.buildFromString('experience', 'create', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            return Number.parseInt(response);
        }
        return 0;
    };
    cExperience.getExperienceUidFromExperienceStringid = function (experiencestringid) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var args = [];
        var arg1 = cAjaxSendMessage.buildArgsFromString('experiencestringid', experiencestringid);
        args.push(arg1);
        var msg = cAjaxSendMessage.buildFromString('experience', 'getExperienceUidFromExperienceStringid', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            return Number.parseInt(response);
        }
        return 0;
    };
    cExperience.getAllExperienceUid = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = cAjaxSendMessage.buildFromString('experience', 'getAllExperienceUid', null);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var resp = JSON.parse(response);
            resp.forEach(function (element) {
                retour.push(element);
            });
        }
        return retour;
    };
    cExperience.getExperience_InfoGenerale = function (iExpUid) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var args = [];
        var arg1 = cAjaxSendMessage.buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        var msg = cAjaxSendMessage.buildFromString('experience', 'getExperience_InfoGenerale', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var resp = JSON.parse(response);
            return resp[0];
        }
        return null;
    };
    cExperience.getExperience_ResultatGenotype = function (iExpUid) {
        var me = cExperience.getInstance();
        var args = [];
        var arg1 = cAjaxSendMessage.buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        var msg = cAjaxSendMessage.buildFromString('experience', 'getExperience_ResultatGenotype', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var resp = JSON.parse(response);
            return resp;
        }
        return null;
    };
    cExperience.getExperience_ResultatTest = function (iExpUid) {
        var me = cExperience.getInstance();
        var args = [];
        var arg1 = cAjaxSendMessage.buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        var msg = cAjaxSendMessage.buildFromString('experience', 'getExperience_ResultatTest', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var resp = JSON.parse(response);
            return resp;
        }
        return null;
    };
    cExperience.getExperience_ResultatImage = function (iExpUid) {
        var me = cExperience.getInstance();
        var args = [];
        var arg1 = cAjaxSendMessage.buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        var msg = cAjaxSendMessage.buildFromString('experience', 'getExperience_ResultatImage', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var resp = JSON.parse(response);
            return resp;
        }
        return null;
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
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = -1;
        var args = [];
        var arg1 = cAjaxSendMessage.buildArgsFromNum('idexperience', experience.idexperience);
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
        var msg = cAjaxSendMessage.buildFromString('experience', 'update', args);
        me._ajax.postData(cEnvt.getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            console.log(response);
        }
        return retour;
    };
    cExperience.dumpFromDB = function (id, _idResultatDB) {
        throw new Error('Method not implemented.');
    };
    cExperience.getAllTestType = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = cAjaxSendMessage.buildFromString('experience', 'getAllTestTypes', null);
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
    cExperience.getAllMarquage = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = cAjaxSendMessage.buildFromString('experience', 'getAllMarquage', null);
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
    cExperience.getAllTerritoire = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = cAjaxSendMessage.buildFromString('experience', 'getAllTerritoire', null);
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
    cExperience.getAllchromosome1 = function () {
        return cExperience.getAllchromosomeXX();
    };
    cExperience.getAllchromosome2 = function () {
        return cExperience.getAllchromosomeXX();
    };
    cExperience.getAllchromosome3 = function () {
        return cExperience.getAllchromosomeXX();
    };
    cExperience.getAllchromosome4 = function () {
        return cExperience.getAllchromosomeXX();
    };
    cExperience.getAllchromosomeXX = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = cAjaxSendMessage.buildFromString('experience', 'getAllChromosomes', null);
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
    cExperience.create_iResultatMessage = function () {
        var retour = {
            'idexperience': 0,
            'experiencestringid': '',
            'Genotype': [],
            'marquage': '',
            'territoire': '',
            'NbGenotype': 0,
            'SComparatif': 0,
            'SGeneral': 0,
            'typedetest': ''
        };
        return retour;
    };
    cExperience.create_iGenotypeMessage = function () {
        var retour = {
            'chromosome1': '',
            'chromosome2': '',
            'chromosome3': '',
            'chromosome4': '',
            'nbechantillon': 0
        };
        return retour;
    };
    cExperience._singleton = null;
    return cExperience;
}());
export { cExperience };
//# sourceMappingURL=cExperience.js.map