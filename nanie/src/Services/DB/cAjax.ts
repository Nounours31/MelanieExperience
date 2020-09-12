import $, { data } from 'jquery';
import Uuid from '../../infra/Uuid';
import cEnvt from '../../infra/cEnvt';


export interface iAjaxSendMessageArgs {
    nom: string;
    val: string;
}
export class cAjaxSendMessage {
    private _classe: string;
    private _requete: string;
    private _args: iAjaxSendMessageArgs[];

    constructor() {
        this._args = [];
        this._classe = '';
        this._requete = '';
    }

    public static buildFromString(classe: string, requete: string, args: iAjaxSendMessageArgs[] | null): cAjaxSendMessage {
        let r: cAjaxSendMessage = new cAjaxSendMessage();
        r._classe = classe;
        r._requete = requete;
        r._args = [];
        if (args != null)
            r._args = args;
        return r;
    }

    public static buildArgsFromString(nom: string, val: string): iAjaxSendMessageArgs {
        let r: iAjaxSendMessageArgs = {
            'nom': nom,
            'val': val
        };
        return r;
    }

    public static buildArgsFromNum(nom: string, val: number): iAjaxSendMessageArgs {
        let r: iAjaxSendMessageArgs = {
            'nom': nom,
            'val': val.toString()
        };
        return r;
    }

    public static buildArgsFromArray(nom: string, val: object[]): iAjaxSendMessageArgs {
        let r: iAjaxSendMessageArgs = {
            'nom': nom,
            'val': JSON.stringify(val)
        };
        return r;
    }
}

interface iAjaxResponseMessage {
    type: string;
    data: string;
}

interface iAjaxConfig {
    'async': boolean;
    'cache': boolean;
    'contentType': string;
    'data': string;
    'dataType': string;    // The data type expected of the server response.
    'global': boolean;        // A Boolean value specifying whether or not to trigger global AJAX event handles for the request.Default is true
    'timeout': number;  // The local timeout(in milliseconds) for the request
    'type' : string;
    'url': string;
    'beforeSend': (xhr: XMLHttpRequest) => void;  // (xhr)	A function to run before the request is sent
    'error': (xhr: XMLHttpRequest, status: string, error: any) => void;           // (xhr, status, error)	A function to run if the request fails.
    'success': (data: any, status: string, xhr: XMLHttpRequest) => void;       // (result, status, xhr)	A function to be run when the request succeeds
    'complete': (xhr: XMLHttpRequest, status: string) => void;            // (xhr, status)	A function to run when the request is finished(after success and error functions)
    'myAjaxClass' : cAjax;
}

export class cAjax {
    private _internalStatus: number = 1;
    private _returnedData: string = '';
    private _uid: string = '';

    constructor () {
        this._uid = (new Uuid()).uuid();
    }

    public reset(): void { this._internalStatus = 1; this._returnedData = '';}
    public getStatus(): number { return this._internalStatus; }
    public getData(): string { return this._returnedData; }

    public setToken( token : string) : void {
        localStorage.setItem (cEnvt._tokenName, token);
    }
    public postData(url: string, data: cAjaxSendMessage): void;
    public postData(url: string, data: string): void;
    public postData(url: string, data: string | cAjaxSendMessage) : void {
        let sData : JSON;
        if (typeof data  === 'string' ) {
            sData = JSON.parse(data as string);
        }
        else if ((data as cAjaxSendMessage) !== undefined) {
            sData = ((data as unknown) as JSON);
        }
        else
            throw new Error('Invalid type as input');

        let ajaxConfObj: Object = this.getAjaxConf(this.complete_function, url, sData);
        $.ajax(ajaxConfObj);
        console.log ('apres ajax');
    }

    public postFiles(serverURL: string, data: FormData) {
        if (localStorage.hasOwnProperty(cEnvt._tokenName)) {
            data.set (cEnvt._tokenName, localStorage.getItem(cEnvt._tokenName) as string);
        }
        jQuery.ajax({
            'url': serverURL,
            'data': data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: function (data) {
                // alert (data);
            }
        });
    }



    private getAjaxConf(completefunction: (xhr: XMLHttpRequest, status: string) => void, myUrl : string, data : JSON) : object;
    private getAjaxConf(completefunction: (xhr: XMLHttpRequest, status: string) => void, myUrl : string, data : any) : object {
        if (localStorage.hasOwnProperty(cEnvt._tokenName)) {
            data[cEnvt._tokenName] = localStorage.getItem(cEnvt._tokenName) as string;
        }
        let retour: iAjaxConfig = {
            'async' : false,
            'cache': false,
            'contentType': 'application/json',
            'data' : JSON.stringify(data),
            'dataType' : 'json',    // The data type expected of the server response.
            'global' : true,        // A Boolean value specifying whether or not to trigger global AJAX event handles for the request.Default is true
            'timeout' : 1000 * 60,  // The local timeout(in milliseconds) for the request
            'type' : 'POST',
            'url': myUrl,
            'beforeSend': this.beforeSend_function, // (xhr)	A function to run before the request is sent
            'error': this.error_function,           // (xhr, status, error)	A function to run if the request fails.
            'success':  this.success_function,       // (result, status, xhr)	A function to be run when the request succeeds
            'complete': completefunction,            // (xhr, status)	A function to run when the request is finished(after success and error functions)
            'myAjaxClass' : this
        };
        return retour;
    }

    /*
    XHR :
    {
        readyState: 4
        responseJSON: {"type" : "error","data": [{"errno": 9000000}, {"data":"iBRIWSApi##_decodeJSONInput # unable to parse-- invalid json format test it first ...Tr
        responseText: \n\n\n\n{\"type\" : \"error\",\"data\": [{\"errno\": 9000000}, {\"data\":\"iBRIWSApi##_decodeJSONInput # unable to parse -- invalid json format test it
        status: 200
        statuxText: "OK"

        abort: ƒ ( statusText )
        always: ƒ ()
        catch: ƒ ( fn )
        done: ƒ ()
        fail: ƒ ()
        getAllResponseHeaders: ƒ ()
        getResponseHeader: ƒ ( key )
        overrideMimeType: ƒ ( type )
        pipe: ƒ ( )
        progress: ƒ ()
        promise: ƒ(obj)

        setRequestHeader: f()
        statusCode: f (map)
        then  : f(...)
    */
    private beforeSend_function(xhr: XMLHttpRequest): void {
        return;
    }

    private error_function(xhr: XMLHttpRequest, status: string, error: any): void {
        console.log('ajax fail ' + xhr.responseText);
        console.log('ajax fail ' + error);
        // alert  ('ajax fails: See Console.Log');
        let myAjaxClass: cAjax;
        if ('myAjaxClass' in this) {
            myAjaxClass = (this as iAjaxConfig).myAjaxClass;
            myAjaxClass._internalStatus = 1;
        }
    }
    private success_function(data: any, status: string, xhr: XMLHttpRequest): void {
        console.log('ajax sucess');
        let myAjaxClass: cAjax;
        if ('myAjaxClass' in this) {
            myAjaxClass = (this as iAjaxConfig).myAjaxClass;
            myAjaxClass._internalStatus = 2;
        }
    }
    private complete_function(xhr: XMLHttpRequest, status: string): void {
        console.log ('ajax completed');
        let myAjaxClass : cAjax ;
        if ('myAjaxClass' in this) {
            myAjaxClass = (this as iAjaxConfig).myAjaxClass;
            if (myAjaxClass._internalStatus != 1) { // pas en erreur
                myAjaxClass._internalStatus = 3;
                let ajaxReponse: iAjaxResponseMessage = (JSON.parse(xhr.responseText) as iAjaxResponseMessage);

                if (ajaxReponse.type !== undefined) {
                    if (ajaxReponse.type === 'error') {
                        myAjaxClass._internalStatus = 1;
                        myAjaxClass._returnedData = ajaxReponse.data;
                        // alert  ('WS fails: error see inlog !');
                        console.log(myAjaxClass._returnedData);
                    }
                    else {
                        myAjaxClass._internalStatus = 0;
                        myAjaxClass._returnedData = ajaxReponse.data;
                        console.log(myAjaxClass._returnedData);
                    }
                }
                else {
                    myAjaxClass._internalStatus = 1; // retour inconnu en erreur !
                }
            }
        }
    }
}