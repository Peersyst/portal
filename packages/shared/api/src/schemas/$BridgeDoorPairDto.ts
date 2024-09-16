/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BridgeDoorPairDto = {
    properties: {
        mainchainBridgeDoorId: {
            type: 'number',
            isRequired: true,
        },
        mainchainDoorAddress: {
            type: 'string',
            isRequired: true,
        },
        mainchainName: {
            type: 'string',
            isRequired: true,
        },
        sidechainBridgeDoorId: {
            type: 'number',
            isRequired: true,
        },
        sidechainDoorAddress: {
            type: 'string',
            isRequired: true,
        },
        sidechainName: {
            type: 'string',
            isRequired: true,
        },
        mainchain: {
            type: 'ChainDto',
            isRequired: true,
        },
        sidechain: {
            type: 'ChainDto',
            isRequired: true,
        },
    },
} as const;
