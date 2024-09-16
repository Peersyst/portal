/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { XummPayloadDto } from "../models/XummPayloadDto";
import type { XummSignInResponseDto } from "../models/XummSignInResponseDto";
import type { XummTransactionStatusDto } from "../models/XummTransactionStatusDto";
import type { XummVerifiedSignInResponseDto } from "../models/XummVerifiedSignInResponseDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class XummApi {
    /**
     * Get XUMM payload by uuid
     * @param uuid
     * @returns XummPayloadDto
     * @throws ApiError
     */
    public static getPayload(uuid: string): CancelablePromise<XummPayloadDto> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/xumm/{uuid}",
            path: {
                uuid: uuid,
            },
        });
    }

    /**
     * Get XUMM transaction status by uuid
     * @param uuid
     * @returns XummTransactionStatusDto
     * @throws ApiError
     */
    public static getStatusByUuid(uuid: string): CancelablePromise<XummTransactionStatusDto> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/xumm/status/{uuid}",
            path: {
                uuid: uuid,
            },
        });
    }

    /**
     * Sign in with XUMM
     * @returns XummSignInResponseDto
     * @throws ApiError
     */
    public static signIn(): CancelablePromise<XummSignInResponseDto> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/xumm/auth/sign-in",
        });
    }

    /**
     * Verify sign in with XUMM
     * @returns XummVerifiedSignInResponseDto
     * @throws ApiError
     */
    public static verifySignIn(): CancelablePromise<XummVerifiedSignInResponseDto> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/xumm/auth/verify-sign-in",
        });
    }
}
