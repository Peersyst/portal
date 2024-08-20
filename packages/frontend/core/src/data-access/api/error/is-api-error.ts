import { ApiError } from "./api-error";

export function isApiError(error: any): error is ApiError {
    return (
        error instanceof Error &&
        !!(error as any).body &&
        typeof (error as any).body.statusCode === "number" &&
        typeof (error as any).body.message === "string"
    );
}
