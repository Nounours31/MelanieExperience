export declare enum eLoggerLevel {
    All = 0,
    Debug = 50,
    Warning = 100,
    Error = 150,
    Fatal = 200
}
export declare class cLogger {
    private _level;
    constructor(level: eLoggerLevel, id?: string);
    All(msg: string): void;
    Debug(msg: string): void;
    Warning(msg: string): void;
    Error(msg: string): void;
    Fatal(msg: string): void;
    private _log;
}
