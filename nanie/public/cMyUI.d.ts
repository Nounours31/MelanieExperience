import { cControler } from './infra/cControler';
import { cLogger } from './infra/cLogger';
export default abstract class cMyUI {
    protected readonly _idResultatDB: string;
    protected _logger: cLogger;
    protected _ctrl: cControler;
    constructor(id: string | null);
    abstract draw(): string;
    abstract addCallBackOnMyDialog(): void;
    addCallBackOnMessage(messageId: string | null): void;
}
