/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssuedCurrencyRequest } from './IssuedCurrencyRequest';
import type { XChainBridgeRequest } from './XChainBridgeRequest';

export type CommitTxRequest = {
    XChainBridge: XChainBridgeRequest;
    XChainClaimID: string;
    OtherChainDestination: string;
    Amount: string;
    Issue?: IssuedCurrencyRequest;
};

