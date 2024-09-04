import RepositoryError from "./repository-error";

export function isRepositoryError(error: any): error is RepositoryError {
    return error instanceof Error && error.name === "RepositoryError";
}
