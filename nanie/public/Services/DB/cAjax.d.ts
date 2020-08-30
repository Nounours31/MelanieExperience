export default class cAjax {
    constructor();
    postData(url: string, data: string): void;
    postData(url: string, data: JSON): void;
    private getAjaxConf;
    private beforeSend_function;
    private error_function;
    private sucess_function;
    private complete_function;
}
