/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TrustSetTxLimitAmountRequest = {
    properties: {
        currency: {
            type: 'string',
            isRequired: true,
            maxLength: 256,
            minLength: 1,
        },
        issuer: {
            type: 'string',
            isRequired: true,
            maxLength: 35,
            minLength: 25,
        },
        value: {
            type: 'string',
            isRequired: true,
            maxLength: 255,
            minLength: 1,
        },
    },
} as const;
