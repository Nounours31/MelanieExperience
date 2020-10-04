import cMyUI from './cMyUI';
export default class cMyUI_MainTab extends cMyUI {
    private _createDialog;
    private _consultDialog;
    private _consultUpdate;
    private _AuCasOuDialog;
    private _logout;
    private readonly _idTabPrefix;
    private _idTabCreation;
    private _idTabConsultation;
    private _idTabAuCasOuTab;
    private _idTabLogout;
    private _idTabUpdate;
    private readonly _idContainerPrefix;
    private _idContainerCreation;
    private _idContainerConsultation;
    private _idContainerAuCasOuTab;
    private _idContainerLogout;
    private _idContainerUpdate;
    constructor();
    addCallBackOnMyDialog(): void;
    draw(): string;
}
