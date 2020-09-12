import cEnvt from './infra/cEnvt';
import { cControler }  from './infra/cControler';
import { cLogger, eLoggerLevel } from './infra/cLogger';
import $, { isEmptyObject } from 'jquery';

interface iMyUIArg {
    nom: string;
    val: string;
}

export default abstract class cMyUI {
    protected readonly _idResultatDB: string = 'idResultatDB';
    protected _logger: cLogger;
    protected _ctrl: cControler;
    protected _args: iMyUIArg[];

    constructor (id : string | null) {
        if (id == null)
            id = 'cMyUI';
        
        this._args = [];
        this._logger = new cLogger(cEnvt.getDebugLevel(), id);
        this._ctrl = cControler.getIntance();
    }
    
    public abstract draw(): string;
    public abstract addCallBackOnMyDialog(): void;

    public parseURI (nom : string) : void {
        let fin : boolean = false;
        let iPrev : number = 0;
        let iNext : number = 0;
        let iEqIndex : number = 0;
        while (!fin) {
            iNext = nom.indexOf ('&', iPrev);
            if (iNext == -1) {
                iNext = nom.length
                fin = true;
            }
            let suburi = nom.substring (iPrev, iNext);

            iEqIndex = suburi.indexOf ('=', 0);
            if (iEqIndex > 0) {
                this.addArg (suburi.substring(0, iEqIndex), suburi.substring(iEqIndex+1));
            }
            iPrev = iNext + 1;
        }
    }
    public getArgsKeys () : string[] {
        let retour : string[] = [];
        this._args.forEach(element => {
            retour.push (element.nom)
        });
        return retour;
    }

    public getArg (nom : string) : string {
        let retour : string = '';
        this._args.forEach(element => {
            if (element.nom == nom)
                retour = element.val;
        });
        return retour;
    }


    public addArg (nom : string, val : string) : void {
        let x : iMyUIArg = {
            'nom': nom,
            'val': val
        }
        this._args.push (x);
    }

    public addCallBackOnMessage(messageId : string | null) : void {
        if (messageId == null) {
            $('.message .close')
            .on('click', function () {
                $(this)
                    .closest('.message')
                    .transition('fade')
                    ;
            });
        }
        else {
            $(`#${messageId}`)
                .on('click', function () {
                    $(this).empty();
                });
        }
    }
}