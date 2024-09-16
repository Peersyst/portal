/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CurrencyRequest = {
    properties: {
        currency: {
            type: 'string',
            isRequired: true,
            maxLength: 256,
            minLength: 1,
        },
        issuer: {
            type: 'string',
            maxLength: 35,
            minLength: 25,
        },
    },
} as const;
