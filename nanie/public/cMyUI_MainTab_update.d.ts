import cMyUI from './cMyUI';
export default class cMyUI_MainTab_update extends cMyUI {
    private readonly _idCreationOKButton;
    private readonly _idCreationExperienceGroupOfInfo;
    private readonly _idCreationDateExp;
    private readonly _idCreationQui;
    private readonly _idCreationDivForMessageInfo;
    private readonly _idCreationExperienceNomPrefixe;
    private readonly _idCreationExperienceExperiencetype;
    private readonly _idCreationExperienceClef;
    private readonly _idCreationExperienceNumero;
    private readonly _My_Message_Classe;
    private readonly _idUpdateOKButton;
    private readonly _idUpdateSelectOnchromosome1;
    private readonly _idUpdateSelectOnchromosome2;
    private readonly _idUpdateSelectOnchromosome3;
    private readonly _idUpdateSelectOnchromosome4;
    private readonly _idUpdateSelectOnTestType;
    private readonly _idUpdateSelectOnMarquage;
    private readonly _idUpdateSelectOnTerritoire;
    private readonly _idUpdateInputNbEchantillon;
    private readonly _idUpdateInputSGeneral;
    private readonly _idUpdateInputSComparatif;
    private readonly _idCreationExperience_drawInfoApresCreation;
    private readonly _idInputUpdateFile_ExpIDVal;
    private readonly _idInputUpdateFile_SelectFiles;
    private readonly _idInputUpdateFile_DivMessage;
    private readonly _idInputUpdateFile_okButton;
    private readonly _idInputUpdate_CheckExpButton;
    private readonly _idInputUpdate_ChangeExperienceName;
    private readonly _idInputUpdate_DivToHiddeDialogIfExpUnValide;
    private readonly _nbGenotype;
    private _isExperienceChecked;
    constructor();
    draw(): string;
    private drawUpdateFichier;
    private drawUpdateDialog;
    drawInfoExperienceDialog(): string;
    addCallBackOnMyDialog(): void;
    private addCallBackOnMyDialog_CheckIdExp;
    private addCallBackOnMyDialog_ajoutFiles;
    private addCallBackOnMyDialog_ajout;
    private UpdateDeLaZONEBilanViSuDBApresupdateOuAjout;
}