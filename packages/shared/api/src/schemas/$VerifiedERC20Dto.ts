/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $VerifiedERC20Dto = {
    properties: {
        address: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        id: {
            type: 'number',
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
        chain: {
            type: 'ChainDto',
            isRequired: true,
        },
        decimals: {
            type: 'number',
            isRequired: true,
        },
        currency: {
            type: 'string',
            isRequired: true,
        },
        imageUrl: {
            type: 'string',
        },
        type: {
            type: 'Enum',
            isRequired: true,
        },
        issuer: {
            type: 'string',
        },
    },
} as const;
