import cMyUI from './cMyUI';
export default class cMyUI_MainTab_ajout extends cMyUI {
    private readonly _idOKButton;
    private readonly _idInputExp;
    private readonly _idSelectOnChromo1;
    private readonly _idSelectOnChromo2;
    private readonly _idSelectOnChromo3;
    private readonly _idSelectOnChromo4;
    private readonly _idSelectOnTestType;
    private readonly _idSelectOnMarquage;
    private readonly _idInputNbEchantillon;
    private readonly _idInputSGeneral;
    private readonly _idInputSComparatif;
    private readonly _nbGenotype;
    constructor();
    addCallBackOnMyDialog(): void;
    UpdateMyDialog(lastExp: string, ilastExp: number): void;
    draw(): string;
}
