export declare class cControler {
    private _lastExp;
    private _iLastExp;
    private static _singleton;
    private constructor();
    static getIntance(): cControler;
    get lastExp(): string;
    get iLastExp(): number;
    setLastExp(lastExp: string, iLastExp: number): void;
}
