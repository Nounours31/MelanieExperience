import $, { data } from 'jquery';


export default class cAjax {
    constructor () {}

    postData(url: string, data: string) : void;
    postData(url: string, data: JSON) : void;
    postData(url: string, data: JSON | string) : void {
        let sData : string = '';
        if (typeof data === 'string' ) {
            sData = data;
        }
        else {
            sData = JSON.stringify (data);
        }
        let ajaxConfObj: Object = this.getAjaxConf(this.complete_function, url, sData);
        $.ajax(ajaxConfObj);
    }

    private getAjaxConf(completefunction: (xhr: any, status: any) => void, myUrl : string, data : string) : Object {
        let retour : Object = {
            'async' : false,
            'cache': false,
            'contentType': 'application/json',
            'data' : data,
            'dataType' : 'json',    // The data type expected of the server response.
            'global' : true,        // A Boolean value specifying whether or not to trigger global AJAX event handles for the request.Default is true
            'timeout' : 1000 * 60,  // The local timeout(in milliseconds) for the request
            'type' : 'POST',
            'url': myUrl,
            'beforeSend': this.beforeSend_function, // (xhr)	A function to run before the request is sent
            'error': this.error_function,           // (xhr, status, error)	A function to run if the request fails.
            'success':  this.sucess_function,       // (result, status, xhr)	A function to be run when the request succeeds
            'complete': completefunction            // (xhr, status)	A function to run when the request is finished(after success and error functions)
        }
        return retour;
    }

    private beforeSend_function(xhr: any): void { }

    private error_function(xhr: any, status: any, error: any): void { 
        alert ('ajax error');
    }
    private sucess_function(data: any, status: any, xhr: any): void { 
        alert('ajax success');
    }
    private complete_function(xhr: any, status: any): void { 
        alert('ajax completed');
    }
} 