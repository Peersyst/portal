/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrencyRequest } from './CurrencyRequest';

export type XChainBridgeRequest = {
    LockingChainDoor: string;
    LockingChainIssue: CurrencyRequest;
    IssuingChainDoor: string;
    IssuingChainIssue: CurrencyRequest;
};

