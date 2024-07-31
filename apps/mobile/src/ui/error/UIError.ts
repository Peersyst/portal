import { TFuncKey } from "i18next";

export type UIErrorMesage = TFuncKey<"error"> | string;
export type UIErrorSeverity = "error" | "warning";

export default class UIError extends Error {
    message: UIErrorMesage;
    severity: UIErrorSeverity;

    constructor(message: UIErrorMesage, severity: UIErrorSeverity = "error") {
        super(message);

        this.name = "UIError";
        this.message = message.toCamelCase();
        this.severity = severity;
    }
}
