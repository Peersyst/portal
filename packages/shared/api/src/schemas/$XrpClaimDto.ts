/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $XrpClaimDto = {
    properties: {
        id: {
            type: 'number',
        },
        account: {
            type: 'string',
            isRequired: true,
        },
        otherChainSource: {
            type: 'string',
            isRequired: true,
        },
        signaturesReward: {
            type: 'string',
            isRequired: true,
        },
        claimId: {
            type: 'string',
            isRequired: true,
        },
        txHash: {
            type: 'string',
            isRequired: true,
        },
        timestamp: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
