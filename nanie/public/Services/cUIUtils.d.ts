export default class cUIUtils {
    private static readonly _idOfAllExperienceIDFind;
    private static readonly _idOfOneExperienceDetails;
    private static readonly _idForGenotypeToDelete;
    private static readonly _idForFileToDelete;
    constructor();
    static drawOnExperience(ExpUid: number, deleteOn?: boolean): string;
    static isValidStringInput(StringInput: any, neutralValue?: string): boolean;
    static isValidNumberInput(NumberInput: any, neutralValue?: number): boolean;
    static drawAllExpSumUp(allExperienceuid: number[], idDiv: string): string;
    static addcallbackFordrawOnExperience(idOfButtonUpdate: string): void;
    static drawOneExpSumUp(iExpUid: number, deleteOn?: boolean): string;
}
