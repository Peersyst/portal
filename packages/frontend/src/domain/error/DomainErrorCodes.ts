import CounterErrorCodes from "domain/counter/CounterErrorCodes";

// Merge all module error codes here
const DomainErrorCodes = { ...CounterErrorCodes };

export type DomainErrorCode = keyof typeof DomainErrorCodes;

export default DomainErrorCodes;
