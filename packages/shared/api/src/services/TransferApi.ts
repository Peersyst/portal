/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTransfersDto } from "../models/PaginatedTransfersDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class TransferApi {
    /**
     * Get all transfers paginated
     * @param mainchainChainName
     * @param sidechainChainName
     * @param mainchainAddress
     * @param sidechainAddress
     * @param page
     * @param pageSize
     * @returns PaginatedTransfersDto
     * @throws ApiError
     */
    public static getTransfers(
        mainchainChainName: string,
        sidechainChainName: string,
        mainchainAddress: string,
        sidechainAddress: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<PaginatedTransfersDto> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/transfer",
            query: {
                page: page,
                pageSize: pageSize,
                mainchainChainName: mainchainChainName,
                sidechainChainName: sidechainChainName,
                mainchainAddress: mainchainAddress,
                sidechainAddress: sidechainAddress,
            },
        });
    }
}
