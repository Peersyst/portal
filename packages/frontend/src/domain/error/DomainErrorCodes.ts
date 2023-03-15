import CounterErrorCodes from "domain/counter/CounterErrorCodes";

enum GenericErrorCodes {
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

// Merge all module error codes here
const DomainErrorCodes = { ...GenericErrorCodes, ...CounterErrorCodes };

export type DomainErrorCode = keyof typeof DomainErrorCodes;

export default DomainErrorCodes;
