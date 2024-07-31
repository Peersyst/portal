import { DomainErrorCode } from "../DomainErrorCodes";
import { DomainError, DomainErrorSeverity } from "../DomainError";
import { DomainErrorCodes } from "../DomainErrorCodes";
import { isApiError } from "../../../adapter";
import { createErrorHandlerDecorator } from "../../../decorators/createErrorHandlerDecorator";

function handleApiError(error: any, errors: Record<string, DomainErrorCode | [DomainErrorCode, DomainErrorSeverity]>) {
    if (isApiError(error)) {
        const errorBodyMessage = errors[error.body.message] || errors[error.body.statusCode];
        const [errorCode, errorSeverity] = Array.isArray(errorBodyMessage) ? errorBodyMessage : [errorBodyMessage, "error" as const];
        throw new DomainError(DomainErrorCodes[errorCode] || DomainErrorCodes.UNKNOWN_ERROR, errorSeverity);
    } else throw error;
}

/**
 * Decorator to handle API errors
 * @param errors A map of error messages to domain error codes `{ USER_NOT_FOUND: UserErrorCodes.USER_NOT_FOUND }`
 */
export const ApiErrors = createErrorHandlerDecorator(handleApiError);
