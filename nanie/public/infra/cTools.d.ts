export interface iMyHtmlInfo {
    class?: string;
    id?: string;
    type?: string;
    indiceselected?: number;
    placeholder?: string;
    style?: string;
}
export declare class cTools {
    static BuildSelectFromTab(vals: string[], info: iMyHtmlInfo): string;
    static BuildInputInt(val: string, info: iMyHtmlInfo): string;
}
