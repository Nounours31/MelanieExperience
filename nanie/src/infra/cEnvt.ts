import { eLoggerLevel } from './cLogger';

export default class cEnvt {
    private static _debugLevel : eLoggerLevel = eLoggerLevel.Debug;

    public static getDebugLevel(): eLoggerLevel {
        return this._debugLevel;
    }

}
