/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HealthCheckResultDto } from "../models/HealthCheckResultDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class HealthApi {
    /**
     * @returns HealthCheckResultDto
     * @throws ApiError
     */
    public static check(): CancelablePromise<HealthCheckResultDto> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/health",
        });
    }
}
