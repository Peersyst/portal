/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedXrpClaimDto } from "../models/PaginatedXrpClaimDto";
import type { XrpClaimDto } from "../models/XrpClaimDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ClaimApi {
    /**
     * Get xrp created claims
     * @param filterAccount
     * @param filterOtherChainSource
     * @param filterClaimId
     * @returns XrpClaimDto
     * @throws ApiError
     */
    public static findAll(
        filterAccount?: string,
        filterOtherChainSource?: string,
        filterClaimId?: string,
    ): CancelablePromise<Array<XrpClaimDto>> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/claim",
            query: {
                "filter[account]": filterAccount,
                "filter[otherChainSource]": filterOtherChainSource,
                "filter[claimId]": filterClaimId,
            },
        });
    }

    /**
     * Get xrp created claim
     * @param id
     * @returns XrpClaimDto
     * @throws ApiError
     */
    public static findOne(id: string): CancelablePromise<XrpClaimDto> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/claim/{id}",
            path: {
                id: id,
            },
        });
    }

    /**
     * Get xrp created claims paginated
     * @param page
     * @param pageSize
     * @param filterAccount
     * @param filterOtherChainSource
     * @param filterClaimId
     * @returns PaginatedXrpClaimDto
     * @throws ApiError
     */
    public static findAllPaginated(
        page: number,
        pageSize: number,
        filterAccount?: string,
        filterOtherChainSource?: string,
        filterClaimId?: string,
    ): CancelablePromise<PaginatedXrpClaimDto> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/claim/paginated",
            query: {
                page: page,
                pageSize: pageSize,
                "filter[account]": filterAccount,
                "filter[otherChainSource]": filterOtherChainSource,
                "filter[claimId]": filterClaimId,
            },
        });
    }
}
