/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NativeTokenDto = {
    properties: {
        id: {
            type: 'number',
            isRequired: true,
        },
        type: {
            type: 'Enum',
            isRequired: true,
        },
        currency: {
            type: 'string',
            isRequired: true,
        },
        verified: {
            type: 'boolean',
            isRequired: true,
        },
        chainName: {
            type: 'string',
            isRequired: true,
        },
        decimals: {
            type: 'number',
            isRequired: true,
        },
        imageUrl: {
            type: 'string',
        },
        issuer: {
            type: 'string',
        },
    },
} as const;
