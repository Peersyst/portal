/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssuedCurrencyRequest } from './IssuedCurrencyRequest';
import type { XChainBridgeRequest } from './XChainBridgeRequest';

export type ClaimTxRequest = {
    XChainBridge: XChainBridgeRequest;
    XChainClaimID: string;
    Destination: string;
    Amount: string;
    Issue?: IssuedCurrencyRequest;
};

