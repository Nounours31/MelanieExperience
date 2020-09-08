export default class cUIUtils {
    constructor();
    static drawOnExperience(ExpUid: number): string;
    static isValidStringInput(StringInput: any, neutralValue?: string): boolean;
    static isValidNumberInput(NumberInput: any, neutralValue?: number): boolean;
    static drawAllExpSumUp(allExperienceuid: number[], idDiv: string): string;
}
