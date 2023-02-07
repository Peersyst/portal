import { DomainErrorCode } from "./DomainErrorCodes";

export default class DomainError extends Error {
    code: DomainErrorCode;

    constructor(code: DomainErrorCode) {
        super(code);

        this.name = "DomainError";
        this.code = code;
    }
}
