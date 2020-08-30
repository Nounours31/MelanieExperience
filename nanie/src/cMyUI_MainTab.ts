import cExperience from './Services/DB/cExperience';
import cMyUI from './cMyUI';
import cMyUI_MainTab_create from './cMyUI_MainTab_create';
import cMyUI_MainTab_ajout from './cMyUI_MainTab_ajout';


export default class cMyUI_MainTab extends cMyUI {
    private readonly _idTabSaisie: string = 'tab-saisie';
    private _creationUI: cMyUI_MainTab_create;
    private _ajoutUI: cMyUI_MainTab_ajout;

    constructor () {
        super ('MainTab');
        this._creationUI = new cMyUI_MainTab_create();
        this._ajoutUI = new cMyUI_MainTab_ajout();
    }

    public addCallBackOnMyDialog(): void {
        // activer les sementicUI du dialog
        $('.ui.accordion').accordion();
        $('.tabular.menu .item').tab();

        this._creationUI.addCallBackOnMyDialog();
        this._ajoutUI.addCallBackOnMyDialog();
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
                        Info pour la creation:
                        ${experienceCreationInfo}
                    </div>

                    <div class="title">
                        <i class="dropdown icon"></i>
                        Completer une experience
                    </div>
                    <div class="content">
                        Ajout des infos:
                        ${experienceAjoutInfo}
                    </div>
                </div>
            </div>
            `;
        return retour;
    }


    private experienceConsultationInfo(): string {
        return '<div>Consultation div</div>';
    }
}

