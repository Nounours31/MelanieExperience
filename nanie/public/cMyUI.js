import cEnvt from './infra/cEnvt';
import { cLogger } from './infra/cLogger';
import $ from 'jquery';
var cMyUI = /** @class */ (function () {
    function cMyUI(id) {
        this._logger = null;
        if (id == null)
            id = 'cMyUI';
        this._logger = new cLogger(cEnvt._debugLevel, id);
    }
    cMyUI.prototype.addCallBackOnMessage = function (messageId) {
        if (messageId == null) {
            $('.message .close')
                .on('click', function () {
                $(this)
                    .closest('.message')
                    .transition('fade');
            });
        }
        else {
            $(messageId)
                .on('click', function () {
                $(this)
                    .closest('.message')
                    .transition('fade');
            });
        }
    };
    return cMyUI;
}());
export default cMyUI;
//# sourceMappingURL=cMyUI.js.map