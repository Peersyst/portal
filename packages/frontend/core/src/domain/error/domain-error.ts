import { AnyObject } from "@swisstype/essential";
import { isApiError } from "../../data-access/api/error/is-api-error";

export type DomainErrorSeverity = "error" | "warning";

export class DomainError extends Error {
    message: string;
    severity: DomainErrorSeverity;
    data?: AnyObject;

    constructor(code: string, severity: DomainErrorSeverity = "error", data?: AnyObject) {
        super(code);

        this.name = "DomainError";
        this.message = code;
        this.severity = severity;
        this.data = data;
    }

    /**
     * Creates a DomainError from an ApiError
     * @param error Any error
     * @param handlers Handlers for especific ApiError codes coming from the backend. If no handler is provided for a code, the error will be UNKNOWN_ERROR
     * @returns The corresponding DomainError
     */
    static fromApiError(error: any, handlers: Record<string, string | [string, DomainErrorSeverity]> = {}): DomainError {
        if (isApiError(error)) {
            const errorBodyMessage = handlers[error.body.message];
            const [errorMessage, errorSeverity] = Array.isArray(errorBodyMessage) ? errorBodyMessage : [errorBodyMessage, "error" as const];
            return new DomainError(errorMessage || "unknownError", errorSeverity);
        }
        return new DomainError("unknownError");
    }
}
