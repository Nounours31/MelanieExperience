import { eLoggerLevel } from './cLogger';
export default class cEnvt {
    private static _debugLevel;
    private static readonly _ajaxWSURL;
    static readonly _tokenName: string;
    static getDebugLevel(): eLoggerLevel;
    static getAjaxURLWS(): string;
}
