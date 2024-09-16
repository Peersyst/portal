/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TrustSetTxRequest = {
    properties: {
        LimitAmount: {
            type: 'all-of',
            contains: [{
                type: 'TrustSetTxLimitAmountRequest',
            }],
            isRequired: true,
        },
    },
} as const;
