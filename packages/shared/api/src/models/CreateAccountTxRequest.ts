/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssuedCurrencyRequest } from './IssuedCurrencyRequest';
import type { XChainBridgeRequest } from './XChainBridgeRequest';

export type CreateAccountTxRequest = {
    XChainBridge: XChainBridgeRequest;
    Destination: string;
    SignatureReward: string;
    Amount: string;
    Issue?: IssuedCurrencyRequest;
};

