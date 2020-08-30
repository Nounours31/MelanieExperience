import cExperience from './Services/DB/cExperience';
import cMyUI from './cMyUI';


export default class cMyUI_MainTab_create extends cMyUI {
    private readonly _idOKButton: string = 'SaisieExperience_OKButton';
    private readonly _idDateExp: string = 'SaisieExperience_DateExp';
    private readonly _idQui: string = 'SaisieExperience_Qui';
    private readonly _idFiles: string = 'SaisieExperience_Files';
    private readonly _idDivForMessageInfo: string = 'MainTab_DivForForm_Info';
    private readonly _idMessageInfo: string = 'MainTab_UI_Info_MessageID';

    constructor () {
        super ('MainTab');
    }

    public addCallBackOnMyDialog(): void {
        let me: cMyUI_MainTab_create = this;

        $(`#${this._idOKButton}`).click(function () {
            let date : string = <string> $(`#${me._idDateExp}`).val();
            let qui: string = <string> $(`#${me._idQui}`).val();
            let files: FileList = $(`#${me._idFiles}`).prop('files');

            let onError: boolean = false;
            let onErrorMessage: string = `<div class="ui negative message" id="${me._idMessageInfo}"><i class="close icon"></i>`;
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

            if (onError) {
                $(`#${me._idDivForMessageInfo}`).append(onErrorMessage);
                $(`#${me._idDivForMessageInfo}`).on('click', function () {
                    $(`#${me._idMessageInfo}`).remove();
                });
                return false;
            }
            return true;
        });
    }

    public draw (): string {
        let allPersonnesOption: string = '';
        let allPersonnes: string[] = cExperience.getAllPersone();
        for (let i = 0; i < allPersonnes.length; i++) {
            allPersonnesOption += `<option value="${allPersonnes[i]}">${allPersonnes[i]}</option>`;
        }

        let retour : string = `
            <form class="ui form">
                <div class="field">
                    <label>Date de l'experience</label>
                    <input type="date" name="date-exp" placeholder="2020-10-01" min="2020-10-01" id="${this._idDateExp}"/>
                </div>

                <div class="field">
                    <label>Qui a realise l'experience?</label>
                    <select class="ui compact selection dropdown" id="${this._idQui}">
                        <option selected value="Nanie">Nanie</option>
                        ${allPersonnesOption}
                        <option value="autre">Autres</option>
                    </select>
                </div>

                <div class="field">
                    <label>Lien vers les images</label>
                    <input type="file" name="expImage" accept="image/png, image/jpeg" multiple id="${this._idFiles}">
                </div>

                <div id="${this._idDivForMessageInfo}"></div>

                <button class="ui button" type="submit" id="${this._idOKButton}">OK !</button>
            </form>`;

        return retour;
    }
}

