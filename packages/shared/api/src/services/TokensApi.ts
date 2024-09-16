/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VerifiedERC20Dto } from "../models/VerifiedERC20Dto";
import type { VerifiedIOUDto } from "../models/VerifiedIOUDto";
import type { VerifiedNativeTokenDto } from "../models/VerifiedNativeTokenDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class TokensApi {
    /**
     * Gets all verified tokens with the given chain pair
     * @param chains
     * @returns any
     * @throws ApiError
     */
    public static findVerifiedTokens(chains: any[]): CancelablePromise<Array<VerifiedERC20Dto | VerifiedIOUDto | VerifiedNativeTokenDto>> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/tokens/verified",
            query: {
                chains: chains,
            },
        });
    }
}
