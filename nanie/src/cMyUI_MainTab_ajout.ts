import cExperience from './Services/DB/cExperience';
import cMyUI from './cMyUI';


export default class cMyUI_MainTab_ajout extends cMyUI {
    private readonly _idOKButton: string = "idOKButton";

    constructor () {
        super ('MainTab');
    }

    public addCallBackOnMyDialog(): void {
        // activer les sementicUI du dialog

        // choisir la tab par defaut
        // $('.ui .item').removeClass('active');
        // $(`#${this._idTabSaisie}`).addClass('active');

        let me: cMyUI_MainTab_ajout = this;
    }

    public draw (): string {
        let retour : string;

        retour = `
            <form class="ui form">
                <div class="ui labeled input">
                    <div class="ui label">
                        Experience Id
                    </div>
                    <input type="text" placeholder="125"/>
                </div>
                <table class="ui celled table">
                <thead>
                    <tr><th>Chromosome 1</th>
                    <th>Chromosome 2</th>
                    <th>Nb Echantillon</th>
                    <th>Type test</th>
                    <th><button class="ui button" type="submit" id="${this._idOKButton}">Ajouter une ligne</button></th>
                </tr></thead>
                <tbody>
                    <tr>
                    <td>James</td>
                    <td>toto</td>
                    <td>24</td>
                    <td>Engineer</td>
                    <td>x</td>
                    </tr>
                </tbody>
                </table>
                <button class="ui button" type="submit" id="${this._idOKButton}">OK !</button>
            </form>
        `;

        return retour;
    }

}

