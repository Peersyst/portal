import { AnyObject } from "@swisstype/essential";
import { camelCase } from "@shared/string";

export type UIErrorSeverity = "error" | "warning";

export class UIError extends Error {
    message: string;
    severity: UIErrorSeverity;
    data?: AnyObject;

    constructor(message: string, severity: UIErrorSeverity = "error", data?: AnyObject) {
        super(message);

        this.name = "UIError";
        this.message = camelCase(message);
        this.severity = severity;
        this.data = data;
    }
}
