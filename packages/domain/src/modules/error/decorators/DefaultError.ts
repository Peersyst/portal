import { createErrorHandlerDecorator } from "../../../decorators/createErrorHandlerDecorator";
import { DomainError } from "../DomainError";
import { DomainErrorCode } from "../DomainErrorCodes";

function handleDefaultError(error: any, errorCode: DomainErrorCode) {
    if (!(error instanceof DomainError)) throw new DomainError(errorCode);
    else throw error;
}

/**
 * Decorator to throw a default error when an unhandled error is thrown
 * @param errorCode The domain error code to throw
 */
export const DefaultError = createErrorHandlerDecorator(handleDefaultError);
