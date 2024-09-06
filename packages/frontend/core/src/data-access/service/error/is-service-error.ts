import { ServiceError } from "./service-error";

export function isServiceError(error: any): error is ServiceError {
    return error instanceof Error && error.name === "ServiceError";
}
