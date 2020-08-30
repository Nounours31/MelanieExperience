import { cLogger } from './infra/cLogger';
export default abstract class cMyUI {
    protected _logger: cLogger | null;
    constructor(id: string | null);
    abstract draw(): string;
    abstract addCallBackOnMyDialog(): void;
    addCallBackOnMessage(messageId: string | null): void;
}
