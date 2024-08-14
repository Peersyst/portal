import { AnyObject } from "@swisstype/essential";
import { LocaleErrorResource } from "@frontend/locale";
import { toCamelCase } from "@shared/string";

export type UIErrorMessage = LocaleErrorResource | string;
export type UIErrorSeverity = "error" | "warning";

export default class UIError extends Error {
    message: UIErrorMessage;
    severity: UIErrorSeverity;
    data?: AnyObject;

    constructor(message: UIErrorMessage, severity: UIErrorSeverity = "error", data?: AnyObject) {
        super(message);

        this.name = "UIError";
        this.message = toCamelCase(message);
        this.severity = severity;
        this.data = data;
    }
}
