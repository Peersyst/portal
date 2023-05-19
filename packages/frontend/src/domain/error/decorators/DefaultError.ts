import DomainError from "domain/error/DomainError";
import { DomainErrorCode } from "../DomainErrorCodes";
import createErrorHandlerDecorator from "common/decorators/createErrorHandlerDecorator";

function handleDefaultError(error: any, errorCode: DomainErrorCode) {
    if (!(error instanceof DomainError)) throw new DomainError(errorCode);
    else throw error;
}

const DefaultError = createErrorHandlerDecorator(handleDefaultError);

export default DefaultError;
