import cEnvt from './infra/cEnvt';
import { cControler }  from './infra/cControler';
import { cLogger, eLoggerLevel } from './infra/cLogger';
import $ from 'jquery';


export default abstract class cMyUI {
    protected readonly _idResultatDB: string = 'idResultatDB';
    protected _logger: cLogger;
    protected _ctrl: cControler;

    constructor (id : string | null) {
        if (id == null)
            id = 'cMyUI';

        this._logger = new cLogger(cEnvt.getDebugLevel(), id);
        this._ctrl = cControler.getIntance();
    }
    public abstract draw(): string;
    public abstract addCallBackOnMyDialog(): void;

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
            $(messageId)
                .on('click', function () {
                    $(this)
                        .closest('.message')
                        .transition('fade')
                        ;
                });
        }
    }
}