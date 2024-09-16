/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateClaimRequest = {
    properties: {
        transaction: {
            type: 'all-of',
            contains: [{
                type: 'CreateClaimTxRequest',
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
