import { isApiError } from "../../../data-access/api/error";
import { createErrorHandlerDecorator } from "../../decorator";
import { DomainError, DomainErrorOptions } from "../domain-error";

function handleApiError(error: any, errors: Record<string, string | DomainErrorOptions>): void {
    if (isApiError(error)) {
        const domainError = errors[error.body.message] || errors[error.body.statusCode];
        throw typeof domainError === "string" ? new DomainError(domainError) : DomainError.fromOptions(domainError);
    } else throw error;
}

/**
 * Decorator to handle API errors
 * @param errors A map of error messages to domain errors `{ USER_NOT_FOUND: UserErrors.USER_NOT_FOUND }`
 */
export const ApiErrors = createErrorHandlerDecorator(handleApiError);
