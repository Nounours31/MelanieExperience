import '../sass/myApps.scss';
import $ from 'jquery';
import cMyUI_MainTab from './cMyUI_MainTab';

class NanieApps {

    constructor() {
     }

    main(): void {
        let rootDiv: JQuery<HTMLElement> = $('.root');
        let dialog: cMyUI_MainTab = new cMyUI_MainTab();
        let newHTML: string = dialog.draw();

        if ((rootDiv != null) && (newHTML != null)) {
            rootDiv.append(newHTML);
        }
        dialog.addCallBackOnMyDialog();
    }
}

let a: NanieApps = new NanieApps();
a.main();