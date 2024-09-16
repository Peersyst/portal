/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateClaimTxRequest = {
    properties: {
        XChainBridge: {
            type: 'all-of',
            contains: [{
                type: 'XChainBridgeRequest',
            }],
            isRequired: true,
        },
        OtherChainSource: {
            type: 'string',
            isRequired: true,
            maxLength: 35,
            minLength: 25,
        },
        SignatureReward: {
            type: 'string',
            isRequired: true,
            maxLength: 255,
            minLength: 1,
        },
    },
} as const;
