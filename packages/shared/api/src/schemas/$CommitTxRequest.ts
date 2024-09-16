/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CommitTxRequest = {
    properties: {
        XChainBridge: {
            type: 'all-of',
            contains: [{
                type: 'XChainBridgeRequest',
            }],
            isRequired: true,
        },
        XChainClaimID: {
            type: 'string',
            isRequired: true,
            maxLength: 255,
            minLength: 1,
        },
        OtherChainDestination: {
            type: 'string',
            isRequired: true,
            maxLength: 35,
            minLength: 25,
        },
        Amount: {
            type: 'string',
            isRequired: true,
            maxLength: 255,
            minLength: 1,
        },
        Issue: {
            type: 'all-of',
            contains: [{
                type: 'IssuedCurrencyRequest',
            }],
        },
    },
} as const;
