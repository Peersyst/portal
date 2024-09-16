/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChainDto } from './ChainDto';

export type VerifiedERC20Dto = {
    address?: string;
    name?: string;
    id: number;
    verified: boolean;
    chainName: string;
    chain: ChainDto;
    decimals: number;
    currency: string;
    imageUrl?: string;
    type: 'erc20' | 'iou' | 'native';
    issuer?: string;
};

