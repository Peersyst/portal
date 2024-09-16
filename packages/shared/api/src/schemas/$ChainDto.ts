/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ChainDto = {
    properties: {
        name: {
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
        nativeToken: {
            type: 'string',
            isRequired: true,
        },
        nativeDecimals: {
            type: 'number',
            isRequired: true,
        },
        nodeUrl: {
            type: 'string',
            isRequired: true,
        },
        explorerUrl: {
            type: 'string',
            isRequired: true,
        },
        faucetUrl: {
            type: 'string',
        },
        rpcUrl: {
            type: 'string',
            isRequired: true,
        },
        chainId: {
            type: 'number',
        },
    },
} as const;
