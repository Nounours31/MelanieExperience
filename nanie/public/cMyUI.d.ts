import { cControler } from './infra/cControler';
import { cLogger } from './infra/cLogger';
interface iMyUIArg {
    nom: string;
    val: string;
}
export default abstract class cMyUI {
    protected readonly _idResultatDB: string;
    protected _logger: cLogger;
    protected _ctrl: cControler;
    protected _args: iMyUIArg[];
    constructor(id: string | null);
    abstract draw(): string;
    abstract addCallBackOnMyDialog(): void;
    parseURI(nom: string): void;
    getArgsKeys(): string[];
    getArg(nom: string): string;
    addArg(nom: string, val: string): void;
    addCallBackOnMessage(messageId: string | null): void;
}
export {};
