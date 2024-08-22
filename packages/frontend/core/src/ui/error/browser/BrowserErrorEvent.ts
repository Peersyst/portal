import { AnyObject } from "@swisstype/essential";
import { UIError, UIErrorSeverity } from "../UIError";

export class BrowserErrorEvent extends Event {
    static type = `ui-error`;

    error: UIError;

    constructor(error: UIError) {
        super(BrowserErrorEvent.type);
        this.error = error;
    }

    static addListener(callback: (event: BrowserErrorEvent) => void): void {
        window.addEventListener(BrowserErrorEvent.type, callback as EventListener);
    }

    static removeListener(callback: (event: BrowserErrorEvent) => void): void {
        window.removeEventListener(BrowserErrorEvent.type, callback as EventListener);
    }

    static dispatch(message: string, severity: UIErrorSeverity = "error", data?: AnyObject): void {
        window.dispatchEvent(new BrowserErrorEvent(new UIError(message, severity, data)));
    }
}
