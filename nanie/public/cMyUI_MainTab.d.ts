import cMyUI from './cMyUI';
export default class cMyUI_MainTab extends cMyUI {
    private readonly _createDialog;
    private readonly _consultDialog;
    private readonly _AuCasOuDialog;
    private readonly _logout;
    private readonly _idTabPrefix;
    private _idTabCreation;
    private _idTabConsultation;
    private _idTabAuCasOuTab;
    private _idTabLogout;
    private readonly _idContainerPrefix;
    private _idContainerCreation;
    private _idContainerConsultation;
    private _idContainerAuCasOuTab;
    private _idContainerLogout;
    constructor();
    addCallBackOnMyDialog(): void;
    draw(): string;
}
