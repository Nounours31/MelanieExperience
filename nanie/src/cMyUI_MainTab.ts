import { cExperience } from './Services/DB/cExperience';
import cMyUI from './cMyUI';
import cMyUI_MainTab_create from './cMyUI_MainTab_create';
import cMyUI_MainTab_consultation from './cMyUI_MainTab_consultation';
import cMyUI_MainTab_aucasou from './cMyUI_MainTab_aucasou';
import cMyUI_logout from './cMyUI_logout';
import cMyUI_MainTab_update from './cMyUI_MainTab_update';

export default class cMyUI_MainTab extends cMyUI {
    // -------------------------------------
    // les element constitant du dialogue principal
    // -------------------------------------
    private  _createDialog: cMyUI_MainTab_create;
    private  _consultDialog: cMyUI_MainTab_consultation;
    private  _consultUpdate: cMyUI_MainTab_update;
    private  _AuCasOuDialog: cMyUI_MainTab_aucasou;
    private  _logout: cMyUI_logout;

    // -------------------------------------
    // les tag de mon dialog pour les tab (le menu)
    // -------------------------------------
    private readonly _idTabPrefix: string = '_id_cMyUI_MainTab_TAB_';
    private _idTabCreation: string;
    private _idTabConsultation: string;
    private _idTabAuCasOuTab: string;
    private _idTabLogout: string;
    private _idTabUpdate: string;

    // -------------------------------------
    // les tag de mon dialog pour les CONTENU des tab (le content)
    // -------------------------------------
    private readonly _idContainerPrefix: string = '_id_cMyUI_MainTab_CONTAINER_';
    private _idContainerCreation: string;
    private _idContainerConsultation: string;
    private _idContainerAuCasOuTab: string;
    private _idContainerLogout: string;
    private _idContainerUpdate: string;


    constructor () {
        super('cMyUI_MainTab');
        this._createDialog = new cMyUI_MainTab_create();
        this._consultDialog = new cMyUI_MainTab_consultation();
        this._consultUpdate = new cMyUI_MainTab_update();
        this._AuCasOuDialog = new cMyUI_MainTab_aucasou();
        this._logout = new cMyUI_logout();

        this._idTabCreation = this._idTabPrefix + "Creation";
        this._idTabConsultation = this._idTabPrefix + "Cconsultation";
        this._idTabAuCasOuTab = this._idTabPrefix + "AuCasOu";
        this._idTabLogout = this._idTabPrefix + "LogOut";
        this._idTabUpdate = this._idTabPrefix + "Update";

        this._idContainerCreation = this._idContainerPrefix + "Creation";
        this._idContainerConsultation = this._idContainerPrefix + "Cconsultation";
        this._idContainerAuCasOuTab = this._idContainerPrefix + "AuCasOu";
        this._idContainerLogout = this._idContainerPrefix + "LogOut";
        this._idContainerUpdate = this._idContainerPrefix + "Update";
    }

    public addCallBackOnMyDialog(): void {
        let me: cMyUI_MainTab = this;

        // activation des menus semantic UI
        $('#infotabs .menu .item').tab('change tab', 'Creation');

        // On click des tabs affichages des menu des tabs 
        $(`#${me._idTabCreation}`).on('click', function (event: JQuery.ClickEvent) {
            // nettoyage des container
            $(`.myDialogTopContainer`).empty();
            // affichage du contenu de mon container
            $(`#${me._idContainerCreation}`).append(me._createDialog.draw());
            // armement des callbacks de mon container
            me._createDialog.addCallBackOnMyDialog();
        });
        $(`#${me._idTabConsultation}`).on('click', function (event: JQuery.ClickEvent) {
            $(`.myDialogTopContainer`).empty();
            $(`#${me._idContainerConsultation}`).append(me._consultDialog.draw());
            me._consultDialog.addCallBackOnMyDialog();
        });
        $(`#${me._idTabUpdate}`).on('click', function (event: JQuery.ClickEvent) {
            $(`.myDialogTopContainer`).empty();
            $(`#${me._idContainerUpdate}`).append(me._consultUpdate.draw());
            me._consultUpdate.addCallBackOnMyDialog();
        });
        $(`#${me._idTabAuCasOuTab}`).on('click', function (event: JQuery.ClickEvent) {
            $(`.myDialogTopContainer`).empty();
            $(`#${me._idContainerAuCasOuTab}`).append(me._AuCasOuDialog.draw());
            me._AuCasOuDialog.addCallBackOnMyDialog();
        });
        $(`#${me._idTabLogout}`).on('click', function (event: JQuery.ClickEvent) {
            $(`.myDialogTopContainer`).empty();
            $(`#${me._idContainerLogout}`).append(me._logout.draw());
            me._logout.addCallBackOnMyDialog();
        });

        $(`#${me._idTabConsultation}`).trigger('click');
    }

    public draw (): string {
        // -----------------------------------------------------
        // je n'affiche que ma page (le menu)
        // -----------------------------------------------------
        let retour : string = `
            <div id="infotabs">
                <div class="ui menu">
                    <div class="container">
                        <a class="item active"  data-tab="Consultation" id="${this._idTabConsultation}">
                            <span class="mobile hidden">Consultation</span>
                        </a>
                        <a class="item" data-tab="Creation" id="${this._idTabCreation}">
                            <span class="mobile hidden">Cr&eacute;ation</span>
                        </a>
                        <a class="item"  data-tab="Update" id="${this._idTabUpdate}">
                            <span class="mobile hidden">Update</span>
                        </a>
                        <a class="item"  data-tab="Aucasou" id="${this._idTabAuCasOuTab}">
                            <span class="mobile hidden">Au cas o&ugrave; ...</span>
                        </a>
                    </div>
                    <div class="ui menu right">
                        <a class="item" data-tab="Logout" id="${this._idTabLogout}">
                            <span class="mobile hidden">Logout</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="ui tab basic segment myDialogTopContainer"        data-tab="Creation" id="${this._idContainerCreation}">Creation</div>
            <div class="ui tab basic segment myDialogTopContainer"        data-tab="Update" id="${this._idContainerUpdate}">Update</div>
            <div class="ui tab basic segment myDialogTopContainer active" data-tab="Consultation" id="${this._idContainerConsultation}">Consultation</div>
            <div class="ui tab basic segment myDialogTopContainer"        data-tab="Aucasou" id="${this._idContainerAuCasOuTab}">Aucasou</div>
            <div class="ui tab basic segment myDialogTopContainer"        data-tab="Logout" id="${this._idContainerLogout}">Logout</div>
            <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>
            `;
        return retour;
    }
}

