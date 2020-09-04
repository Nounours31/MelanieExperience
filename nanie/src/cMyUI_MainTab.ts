import { cExperience } from './Services/DB/cExperience';
import cMyUI from './cMyUI';
import cMyUI_MainTab_create from './cMyUI_MainTab_create';
import cMyUI_MainTab_ajout from './cMyUI_MainTab_ajout';
import cMyUI_MainTab_consultation from './cMyUI_MainTab_consultation';


export default class cMyUI_MainTab extends cMyUI {
    private readonly _idTabSaisie: string = 'tab-saisie';
    private readonly _idAccordeonCompleterExperience: string = 'idAccordeonCompleterExperience';
    private _creationUI: cMyUI_MainTab_create;
    private _ajoutUI: cMyUI_MainTab_ajout;
    private _ConsultationUI: cMyUI_MainTab_consultation;

    constructor () {
        super ('MainTab');
        this._creationUI = new cMyUI_MainTab_create();
        this._ajoutUI = new cMyUI_MainTab_ajout();
        this._ConsultationUI = new cMyUI_MainTab_consultation();
    }

    public addCallBackOnMyDialog(): void {
        // activer les sementicUI du dialog
        $('.ui.accordion').accordion();
        $('.tabular.menu .item').tab();

        let me: cMyUI_MainTab = this;
        me._creationUI.addCallBackOnMyDialog();
        me._ajoutUI.addCallBackOnMyDialog();
        me._ConsultationUI.addCallBackOnMyDialog();

        // propagation de l'evenement de mise  ajour de 'id d'experience
        $(`#${this._idAccordeonCompleterExperience}`).on ('click', function() {
            me._ajoutUI.UpdateMyDialog(me._ctrl.lastExp, me._ctrl.iLastExp);
        });
    }

    public draw (): string {
        let retour : string;
        let experienceCreationAccordeonInfo: string = this.experienceCreationAccordeonInfo();
        let experienceConsultationInfo: string = this.experienceConsultationInfo();


        retour = `
        <div class="ui fluid container">
            <div class="ui top attached tabular menu">
                <div class="active item" data-tab="${this._idTabSaisie}" id="${this._idTabSaisie}">Saisie Experience</div>
                <div class="item" data-tab="tab-consultation">Consultation</div>
            </div>
            <div class="ui bottom attached active tab segment" data-tab="${this._idTabSaisie}">
                <!-- Tab Content !-->
                ${experienceCreationAccordeonInfo}
            </div>
            <div class="ui bottom attached tab segment" data-tab="tab-consultation">
                <!-- Tab Content !-->
                ${experienceConsultationInfo}
            </div>
        </div>
        <div id="${this._idResultatDB}"></div>
        `;
        return retour;
    }

    private experienceCreationAccordeonInfo(): string {
        let experienceCreationInfo: string = this._creationUI.draw();
        let experienceAjoutInfo: string = this._ajoutUI.draw();

        let retour : string;
        retour = `
            <div class="ui grid container">
                <div class="ui styled accordion">
                    <div class="title active">
                        <i class="dropdown icon"></i>
                        Creation d'une experience
                    </div>
                    <div class="content active">
                        ${experienceCreationInfo}
                    </div>

                    <div class="title" id="${this._idAccordeonCompleterExperience}">
                        <i class="dropdown icon"></i>
                        Completer une experience
                    </div>
                    <div class="content">
                        ${experienceAjoutInfo}
                    </div>
                </div>
            </div>
            `;
        return retour;
    }


    private experienceConsultationInfo(): string {
        let experienceConsultationInfo: string = this._ConsultationUI.draw();
        return `<div>${experienceConsultationInfo}</div>`;
    }
}

