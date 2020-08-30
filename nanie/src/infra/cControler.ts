export class cControler {
    private _lastExp: string = '';
    private _iLastExp: number = 0;
    private static _singleton: cControler | null = null;

    private constructor () {
        cControler._singleton = null;
        this._lastExp = '';
        this._iLastExp = 0;
    }

    public static getIntance() : cControler {
        if (cControler._singleton == null)
            cControler._singleton = new cControler();
        return cControler._singleton;
    }

    get lastExp(): string {
        return this._lastExp;
    }
    get iLastExp(): number {
        return this._iLastExp;
    }
    
    /*
    set lastExp(lastExp: string) {
        this._lastExp = lastExp;
    }
    */

    public setLastExp(lastExp: string, iLastExp: number) {
        this._lastExp = lastExp;
        this._iLastExp = iLastExp;
    }
}

