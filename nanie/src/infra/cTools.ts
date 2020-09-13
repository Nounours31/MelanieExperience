import { iStringNumberMessage } from '../Services/DB/iOnMessageWithServer';

export interface iMyHtmlInfo {
    class?: string;
    id?: string;
    type?: string;
    indiceselected?: number;
    placeholder?: string;
    style?:string;
}

export class cTools {
    static BuildSelectFromTab(vals: iStringNumberMessage[], info: iMyHtmlInfo, isValAndOptionEqual? : boolean) : string {
        let retour = '';
        if (isValAndOptionEqual === undefined) {
            isValAndOptionEqual = false;
        }
        retour = `<select `;
        if (info['class'] !== undefined) {
            retour += `class="${info['class']}" `;
        }
        if (info['style'] !== undefined) {
            retour += `style="${info['style']}" `;
        }
        if (info['id'] !== undefined) {
            retour += `id="${info['id']}" `;
        }
        retour += `>`;

        for (let i : number = 0; i < vals.length; i++) {
            if ((info['indiceselected'] !== undefined) && (i === info['indiceselected'])) {
                if (isValAndOptionEqual) {
                    retour += `<option selected value="${vals[i].nom}">${vals[i].nom}</option>`;
                }
                else {
                    retour += `<option selected value="${vals[i].uid}">${vals[i].nom}</option>`;
                }
            }
            else {
                if (isValAndOptionEqual) {
                    retour += `<option value="${vals[i].nom}">${vals[i].nom}</option>`;
                }
                else {
                    retour += `<option value="${vals[i].uid}">${vals[i].nom}</option>`;
                }
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

    static isImageFileFromName (fileName : string) : boolean {
        let localname: string = fileName;
        localname = localname.toLowerCase();
        let i: number = localname.lastIndexOf ('.');
        if (i < 0) {
            return false;
        }

        let extens : string = localname.substring (i + 1);
        let rc : boolean = false;

        switch (extens) {
            case 'png':
            case 'jpg':
            case 'jpeg':
            case 'tiff':
                    rc = true;
                break;
        
            default:
                    rc = false;
                break;
        }
        return rc;
    }
}