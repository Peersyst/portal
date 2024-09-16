/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChainDto } from './ChainDto';
import type { ERC20TokenDto } from './ERC20TokenDto';
import type { IOUTokenDto } from './IOUTokenDto';
import type { NativeTokenDto } from './NativeTokenDto';

export type TransferDto = {
    /**
     * The token of the locking chain.
     */
    lockingChainToken: (ERC20TokenDto | IOUTokenDto | NativeTokenDto);
    /**
     * The token of the issuing chain.
     */
    issuingChainToken: (ERC20TokenDto | IOUTokenDto | NativeTokenDto);
    /**
     * The status of the transfer.
     */
    status: 'claim-done' | 'commit-done' | 'completed';
    /**
     * The address of the sender (event_commit.sender)
     */
    from: string;
    /**
     * The address of the receiver (event_create_claim.creator)
     */
    to: string;
    /**
     * The value of the transfer (event_credit.value)
     */
    value: string;
    /**
     * The id of the mainchain bridge door.
     */
    sourceChain: ChainDto;
    /**
     * The id of the mainchain bridge door.
     */
    destinationChain: ChainDto;
    /**
     * The timestamp of the claim transfer
     */
    createdAt: number;
    /**
     * The locking chain of the transfer bridge door pair.
     */
    lockingChain: ChainDto;
    /**
     * The issuing chain of the transfer bridge door pair.
     */
    issuingChain: ChainDto;
    /**
     * The direction of the transfer.
     */
    direction: 'locking-issuing' | 'issuing-locking';
};

