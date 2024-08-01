import { IApiError } from "@/domain/adapter/api/IApiError";
import { ApiRequestOptions } from "../../../src/data-access/api/service/core/ApiRequestOptions";

export default class ApiErrorMock extends Error implements IApiError {
    message: string;
    name: string;
    url: string;
    status: number;
    statusText: string;
    body: {
        statusCode: number;
        message: string;
    };
    request: ApiRequestOptions;

    constructor({
        message = "message",
        name = "ApiError",
        url = "url",
        status = 200,
        statusText = "statusText",
        body = { statusCode: 500, message: "INTERNAL_SERVER_ERROR" },
        request = { method: "POST", url: "http://localhost:3000" },
    }: Partial<IApiError>) {
        super();
        this.message = message;
        this.name = name;
        this.url = url;
        this.status = status;
        this.statusText = statusText;
        this.body = body;
        this.request = request;
    }
}
