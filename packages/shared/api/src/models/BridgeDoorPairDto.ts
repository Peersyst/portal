/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChainDto } from './ChainDto';

export type BridgeDoorPairDto = {
    mainchainBridgeDoorId: number;
    mainchainDoorAddress: string;
    mainchainName: string;
    sidechainBridgeDoorId: number;
    sidechainDoorAddress: string;
    sidechainName: string;
    mainchain: ChainDto;
    sidechain: ChainDto;
};

