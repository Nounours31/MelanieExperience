import { cExperience } from './Services/DB/cExperience';
import cMyUI from './cMyUI';


export default class cMyUI_MainTab_create extends cMyUI {
    private readonly _DefaultPersonneNom: string = 'Fages';
    private readonly _DefaultPersonneNomInitiale: string = this._DefaultPersonneNom.charAt(0);
    private readonly _idOKButton: string = 'SaisieExperience_OKButton';
    private readonly _idDateExp: string = 'SaisieExperience_DateExp';
    private readonly _idQui: string = 'SaisieExperience_Qui';
    private readonly _idFiles: string = 'SaisieExperience_Files';
    private readonly _idDivForMessageInfo: string = 'MainTab_DivForForm_Info';
    private readonly _idMessageInfo: string = 'MainTab_UI_Info_MessageID';
    private readonly _idExperienceNomPrefixe: string = 'MainTab_UI_Info_ExperienceAsLettre';
    private readonly _idExperienceNumero: string = 'MainTab_UI_Info_idExperienceNumero';
    private readonly _idExperienceExperiencetype: string = 'MainTab_UI_Info__idExperienceExperiencetype';
    private readonly _idExperienceClef: string = 'MainTab_UI_Info_idExperienceClef';

    private readonly _My_Message_Classe : string = 'ClasseDesMessagesInfo';


    constructor () {
        super ('MainTab');
    }

    public addCallBackOnMyDialog(): void {
        this.checkFormContenu();
        this.lienExprienceId_NomManip();
    }
    private lienExprienceId_NomManip(): void {
        let me: cMyUI_MainTab_create = this;
        $(`#${this._idQui}`).on ('change', function (event) {
            let val: string = <string> $(`#${me._idQui}`).val();
            let valEntete = val.charAt(0);
            $(`#${me._idExperienceNomPrefixe}`).val(valEntete);
        });
    }

    // ---------------------------------------------------------------------------
    // Callback du OK
    //      1. check du contenu du formulaire
    //      2. envoie en DB si OK
    // ---------------------------------------------------------------------------
    private checkFormContenu(): void {
        let me: cMyUI_MainTab_create = this;
        $(`#${this._idOKButton}`).on ('click', function (event) {

            // les 3 champs a controler
            let date : string = <string> $(`#${me._idDateExp}`).val();
            let qui: string = <string> $(`#${me._idQui}`).val();
            let files: FileList = $(`#${me._idFiles}`).prop('files');

            // errurs si 1 manque
            let onError: boolean = false;
            let onErrorMessage: string = `<div class="ui negative message ${me._My_Message_Classe}"><i class="close icon"></i>`;
            if (date.length < 1) {
                onErrorMessage += `
                        <div class="header">
                            Pb de date
                        </div>
                        <p> Il faut choisir une date </p>`;
                onError = true;
            }
            if (files.length < 1) {
                onErrorMessage += `
                        <div class="header">
                            Image
                        </div>
                        <p> Il faut choisir au moins une image </p>`;
                onError = true;
            }
            onErrorMessage += '</div>';

            // affiche de l'erreur
            if (onError) {
                $(`#${me._idDivForMessageInfo}`).append(onErrorMessage);
                $(`#${me._idDivForMessageInfo}`).on('click', function () {
                    $(`.${me._My_Message_Classe}`).remove();
                });
            }
            else {
                // envoie en DB
                let experienceId : string = '';
                experienceId += $(`#${me._idExperienceNomPrefixe}`).val();
                experienceId += $(`#${me._idExperienceNumero}`).val();
                experienceId += '-' + $(`#${me._idExperienceExperiencetype}`).val();
                experienceId += $(`#${me._idExperienceClef}`).val();

                let id: number = cExperience.createDBExperience(experienceId, date, qui, files);
                if (id > 0) {
                    cExperience.uploadFiles(id, files);

                    let onOKMessage: string = `<div class="ui positive message ${me._My_Message_Classe}"><i class="close icon"></i>`;
                    onOKMessage += `
                                <div class="header">
                                    Creation experience en DB -- OK
                                </div>
                                <p> ${experienceId}, ${date}, ${qui}, ${files} </p>`;
                    onOKMessage += '</div>';
                    $(`#${me._idDivForMessageInfo}`).append(onOKMessage);
                    $(`#${me._idDivForMessageInfo}`).on('click', function () {
                        $(`.${me._My_Message_Classe}`).remove();
                    });
                    me._ctrl.setLastExp(experienceId, id);
                }
                else {
                    alert ('Impossible de mettre en base cette demande');
                }
            }
            event.stopPropagation ();
            return false;

        });
    }

    public draw (): string {
        let allPersonnesOption: string = '';
        let allPersonnes: string[] = cExperience.getAllPersone();
        for (let i = 0; i < allPersonnes.length; i++) {
            allPersonnesOption += `<option value="${allPersonnes[i]}">${allPersonnes[i]}</option>`;
        }

        let AllExperienceInitialeOption: string = '';
        let AllExperienceInitiale: string[] = cExperience.getAllExperienceInitiale();
        for (let i = 0; i < AllExperienceInitiale.length; i++) {
            AllExperienceInitialeOption += `<option value="${AllExperienceInitiale[i]}">${AllExperienceInitiale[i]}</option>`;
        }


        let retour : string = `
            <form class="ui form">
                <div class="field">
                    <label>Experience Id</label>
                    <div class="ui left labeled input">
                        <input type="text" value="${this._DefaultPersonneNomInitiale}" id="${this._idExperienceNomPrefixe}">
                        <input type="number" value="0" id="${this._idExperienceNumero}">
                        <p style="font-size: x-large; margin:auto;">-</p>
                        <select class="ui compact selection dropdown" id="${this._idExperienceExperiencetype}">
                            <option selected value="A">A</option>
                            ${AllExperienceInitialeOption}
                            <option value="autre">Autres</option>
                        </select>
                        <input type="number" value="0" id="${this._idExperienceClef}">
                    </div>
                </div>

                <div class="field">
                    <label>Date de l'experience</label>
                    <input type="date" name="date-exp" value="2020-10-01" min="2020-10-01" id="${this._idDateExp}"/>
                </div>

                <div class="field">
                    <label>Qui a realise l'experience?</label>
                    <select class="ui compact selection dropdown" id="${this._idQui}">
                        <option selected value="${this._DefaultPersonneNom}">${this._DefaultPersonneNom}</option>
                        ${allPersonnesOption}
                        <option value="autre">Autres</option>
                    </select>
                </div>

                <div class="field">
                    <label>Lien vers les images</label>
                    <input type="file" name="expImage" accept="image/png, image/jpeg" multiple id="${this._idFiles}">
                </div>

                <div id="${this._idDivForMessageInfo}"></div>

                <button class="ui button pink" type="submit" id="${this._idOKButton}">OK !</button>
            </form>`;

        return retour;
    }
}

