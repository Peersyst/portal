/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BridgeDoorPairDto } from "../models/BridgeDoorPairDto";
import type { ChainDto } from "../models/ChainDto";
import type { ClaimRequest } from "../models/ClaimRequest";
import type { CommitRequest } from "../models/CommitRequest";
import type { CreateAccountRequest } from "../models/CreateAccountRequest";
import type { CreateClaimRequest } from "../models/CreateClaimRequest";
import type { TrustSetRequest } from "../models/TrustSetRequest";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class BridgeApi {
    /**
     * Creates a claim in XRP chain to start a EXRP -> XRP transfer
     * @param requestBody
     * @returns string
     * @throws ApiError
     */
    public static xrplCreateClaimTransaction(requestBody: CreateClaimRequest): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/api/bridge/create-claim",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * Commits a claim in XRP chain to finish a XRP -> EXRP transfer
     * @param requestBody
     * @returns string
     * @throws ApiError
     */
    public static xrplCommitTransaction(requestBody: CommitRequest): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/api/bridge/commit",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * Commits a claim in XRP chain to finish a XRP -> EXRP transfer
     * @param requestBody
     * @returns string
     * @throws ApiError
     */
    public static xrplClaimTransaction(requestBody: ClaimRequest): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/api/bridge/claim",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * Creates a cross chain transaction to create a EXRP account with funds
     * @param requestBody
     * @returns string
     * @throws ApiError
     */
    public static xrplCreateAccountTransaction(requestBody: CreateAccountRequest): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/api/bridge/create-account",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * Creates a trust line with the given xrpl token
     * @param requestBody
     * @returns string
     * @throws ApiError
     */
    public static xrplTrustSetTransaction(requestBody: TrustSetRequest): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/api/bridge/trust-set",
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * Gets all chains
     * @returns ChainDto
     * @throws ApiError
     */
    public static findAllChains(): CancelablePromise<Array<ChainDto>> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/bridge/chains",
        });
    }

    /**
     * Gets all bridge door pairs
     * @returns BridgeDoorPairDto
     * @throws ApiError
     */
    public static findAllBridgeDoorPairs(): CancelablePromise<Array<BridgeDoorPairDto>> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/bridge/bridge-door-pairs",
        });
    }

    /**
     * Gets a bridge door pair
     * @param chains
     * @returns BridgeDoorPairDto
     * @throws ApiError
     */
    public static findBridgeDoorPair(chains: any[]): CancelablePromise<BridgeDoorPairDto> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/api/bridge/bridge-door-pair",
            query: {
                chains: chains,
            },
        });
    }
}
