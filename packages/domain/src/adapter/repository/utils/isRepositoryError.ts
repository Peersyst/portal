import { IRepositoryError } from "../IRepositoryError";

export function isRepositoryError(error: any): error is IRepositoryError {
    return error instanceof Error && error.name === "RepositoryError";
}
