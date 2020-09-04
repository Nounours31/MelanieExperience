import { eLoggerLevel } from './cLogger';
import { cConfigs } from './cConfigs';

export default class cEnvt {
    private static _debugLevel : eLoggerLevel = eLoggerLevel.Debug;
    private static readonly _ajaxWSURL: string = cConfigs.ajaxWSURL();

    public static getDebugLevel(): eLoggerLevel {
        return cEnvt._debugLevel;
    }

    public static getAjaxURLWS(): string {
        let x : string = window.location.origin;
        return (x + cEnvt._ajaxWSURL);
    }
}
