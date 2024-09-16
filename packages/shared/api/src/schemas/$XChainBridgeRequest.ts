/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $XChainBridgeRequest = {
    properties: {
        LockingChainDoor: {
            type: 'string',
            isRequired: true,
            maxLength: 35,
            minLength: 25,
        },
        LockingChainIssue: {
            type: 'all-of',
            contains: [{
                type: 'CurrencyRequest',
            }],
            isRequired: true,
        },
        IssuingChainDoor: {
            type: 'string',
            isRequired: true,
            maxLength: 35,
            minLength: 25,
        },
        IssuingChainIssue: {
            type: 'all-of',
            contains: [{
                type: 'CurrencyRequest',
            }],
            isRequired: true,
        },
    },
} as const;
