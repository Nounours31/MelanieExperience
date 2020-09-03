export interface iAjaxSendMessageArgs {
    nom: string;
    val: string;
}
export declare class cAjaxSendMessage {
    private _classe;
    private _requete;
    private _args;
    constructor();
    static buildFromString(classe: string, requete: string, args: iAjaxSendMessageArgs[] | null): cAjaxSendMessage;
    static buildArgsFromString(nom: string, val: string): iAjaxSendMessageArgs;
}
export declare class cAjax {
    private _internalStatus;
    private _returnedData;
    private _uid;
    constructor();
    reset(): void;
    getStatus(): number;
    getData(): string;
    postData(url: string, data: cAjaxSendMessage): void;
    postData(url: string, data: string): void;
    postFiles(serverURL: string, data: FormData): void;
    private getAjaxConf;
    private beforeSend_function;
    private error_function;
    private success_function;
    private complete_function;
}
