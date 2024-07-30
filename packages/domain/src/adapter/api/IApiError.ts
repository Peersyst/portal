export interface IApiError extends Error {
    url: string;
    status: number;
    statusText: string;
    body: {
        statusCode: number;
        message: string;
    };
}
