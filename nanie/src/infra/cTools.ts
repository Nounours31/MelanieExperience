export interface iMyHtmlInfo {
    class?: string;
    id?: string;
    type?: string;
    indiceselected?: number;
    placeholder?: string;
}

export class cTools {
    static BuildSelectFromTab(vals: string[], info: iMyHtmlInfo) : string {
        let retour = '';
        let allKeys : string [] = Object.keys(info);

        retour = `<select `;
        if (info['class'] !== undefined) {
            retour += `class="${info['class']}" `;
        }
        if (info['id'] !== undefined) {
            retour += `id="${info['id']}" `;
        }
        retour += `>`;

        for (let i : number = 0; i < vals.length; i++) {
            if ((info['indiceselected'] !== undefined) && (i === info['indiceselected'])) {
                retour += `<option selected value="${vals[i]}">${vals[i]}</option>`;
            }
            else {
                retour += `<option value="${vals[i]}">${vals[i]}</option>`;
            }
        }
        retour += `</select>`;
        return retour;
    }

    static BuildInputInt(val: string, info: iMyHtmlInfo): string {
        let retour = `<input type="${info['type']}" name="${info['id']}" id="${info['id']}" value="${val}" step="any" `;
        if (info['class'] !== undefined) {
            retour += `class="${info['class']}" `;
        }
        if (info['placeholder'] !== undefined) {
            retour += `placeholder="${info['placeholder']}" `;
        }
        retour += `/>`;
        return retour;
    }
}