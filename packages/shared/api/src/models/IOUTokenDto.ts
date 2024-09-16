/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IOUTokenDto = {
    id: number;
    type: 'erc20' | 'iou' | 'native';
    currency: string;
    verified: boolean;
    chainName: string;
    decimals: number;
    imageUrl?: string;
    issuer?: string;
};

