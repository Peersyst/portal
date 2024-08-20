import { DomainError } from "./domain-error";

export function isDomainError(error: any): error is DomainError {
    return error instanceof Error && error.name === "DomainError";
}
