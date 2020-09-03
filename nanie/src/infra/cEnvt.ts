import { eLoggerLevel } from './cLogger';

export default class cEnvt {
    private static _debugLevel : eLoggerLevel = eLoggerLevel.Debug;
    private static readonly _ajaxWSURL: string = 'http://localhost:88/nanie/server/WS/BRIWS.php';

    public static getDebugLevel(): eLoggerLevel {
        return cEnvt._debugLevel;
    }

    public static getAjaxURLWS(): string {
        return cEnvt._ajaxWSURL;
    }


}
