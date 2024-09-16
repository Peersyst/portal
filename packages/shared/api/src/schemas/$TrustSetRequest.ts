/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TrustSetRequest = {
    properties: {
        transaction: {
            type: 'all-of',
            contains: [{
                type: 'TrustSetTxRequest',
            }],
            isRequired: true,
        },
        chain: {
            type: 'string',
            isRequired: true,
            maxLength: 255,
            minLength: 1,
        },
    },
} as const;
