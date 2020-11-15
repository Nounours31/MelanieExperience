import { iStringNumberMessage } from '../Services/DB/iOnMessageWithServer';
export interface iMyHtmlInfo {
    class?: string;
    id?: string;
    type?: string;
    indiceselected?: number;
    placeholder?: string;
    style?: string;
}
export declare class cTools {
    static BuildSelectFromTab(vals: iStringNumberMessage[], info: iMyHtmlInfo, isValAndOptionEqual?: boolean): string;
    static BuildInputInt(val: string, info: iMyHtmlInfo): string;
    static isImageFileFromName(fileName: string): boolean;
    static mysql_real_escape_string(str: string): string;
}
