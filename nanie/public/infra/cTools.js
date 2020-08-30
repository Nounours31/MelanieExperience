var cTools = /** @class */ (function () {
    function cTools() {
    }
    cTools.BuildSelectFromTab = function (vals, info) {
        var retour = '';
        var allKeys = Object.keys(info);
        retour = "<select ";
        if (info['class'] !== undefined) {
            retour += "class=\"" + info['class'] + "\" ";
        }
        if (info['id'] !== undefined) {
            retour += "id=\"" + info['id'] + "\" ";
        }
        retour += ">";
        for (var i = 0; i < vals.length; i++) {
            if ((info['indiceselected'] !== undefined) && (i === info['indiceselected'])) {
                retour += "<option selected value=\"" + vals[i] + "\">" + vals[i] + "</option>";
            }
            else {
                retour += "<option value=\"" + vals[i] + "\">" + vals[i] + "</option>";
            }
        }
        retour += "</select>";
        return retour;
    };
    cTools.BuildInputInt = function (val, info) {
        var retour = "<input type=\"" + info['type'] + "\" name=\"" + info['id'] + "\" id=\"" + info['id'] + "\" value=\"" + val + "\" step=\"any\" ";
        if (info['class'] !== undefined) {
            retour += "class=\"" + info['class'] + "\" ";
        }
        if (info['placeholder'] !== undefined) {
            retour += "placeholder=\"" + info['placeholder'] + "\" ";
        }
        retour += "/>";
        return retour;
    };
    return cTools;
}());
export { cTools };
//# sourceMappingURL=cTools.js.map