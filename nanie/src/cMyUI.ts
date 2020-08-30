import cEnvt from './infra/cEnvt';
import { cLogger, eLoggerLevel } from './infra/cLogger';
import $ from 'jquery';


export default abstract class cMyUI {
    protected _logger: cLogger | null = null;

    constructor (id : string | null) {
        if (id == null)
            id = 'cMyUI';

        this._logger = new cLogger(cEnvt._debugLevel, id);
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