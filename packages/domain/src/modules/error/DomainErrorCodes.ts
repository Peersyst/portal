export enum GenericErrorCodes {
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

// Merge all module error codes here
export const DomainErrorCodes = {
    ...GenericErrorCodes,
};

export type DomainErrorCode = keyof typeof DomainErrorCodes;
