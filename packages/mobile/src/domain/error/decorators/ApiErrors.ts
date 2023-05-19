import DomainError from "domain/error/DomainError";
import isApiError from "domain/adapter/api/utils/isApiError";
import { DomainErrorCode } from "../DomainErrorCodes";
import { DomainErrorSeverity } from "../DomainError";
import DomainErrorCodes from "../DomainErrorCodes";
import createErrorHandlerDecorator from "common/decorators/createErrorHandlerDecorator";

function handleApiError(error: any, errors: Record<string, DomainErrorCode | [DomainErrorCode, DomainErrorSeverity]>) {
    if (isApiError(error)) {
        const errorBodyMessage = errors[error.body.message];
        const [errorCode, errorSeverity] = Array.isArray(errorBodyMessage) ? errorBodyMessage : [errorBodyMessage, "error" as const];
        throw new DomainError(DomainErrorCodes[errorCode] || DomainErrorCodes.UNKNOWN_ERROR, errorSeverity);
    } else throw error;
}

const ApiErrors = createErrorHandlerDecorator(handleApiError);

export default ApiErrors;
