import $ from 'jquery';
var cAjax = /** @class */ (function () {
    function cAjax() {
    }
    cAjax.prototype.postData = function (url, data) {
        var sData = '';
        if (typeof data === 'string') {
            sData = data;
        }
        else {
            sData = JSON.stringify(data);
        }
        var ajaxConfObj = this.getAjaxConf(this.complete_function, url, sData);
        $.ajax(ajaxConfObj);
    };
    cAjax.prototype.getAjaxConf = function (completefunction, myUrl, data) {
        var retour = {
            'async': false,
            'cache': false,
            'contentType': 'application/json',
            'data': data,
            'dataType': 'json',
            'global': true,
            'timeout': 1000 * 60,
            'type': 'POST',
            'url': myUrl,
            'beforeSend': this.beforeSend_function,
            'error': this.error_function,
            'success': this.sucess_function,
            'complete': completefunction // (xhr, status)	A function to run when the request is finished(after success and error functions)
        };
        return retour;
    };
    cAjax.prototype.beforeSend_function = function (xhr) { };
    cAjax.prototype.error_function = function (xhr, status, error) {
        alert('ajax error');
    };
    cAjax.prototype.sucess_function = function (data, status, xhr) {
        alert('ajax success');
    };
    cAjax.prototype.complete_function = function (xhr, status) {
        alert('ajax completed');
    };
    return cAjax;
}());
export default cAjax;
//# sourceMappingURL=cAjax.js.map