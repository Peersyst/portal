import {
    ChainType,
    Unconfirmed,
    TrustClaimTransaction,
    FormattedBridge,
    TrustCommitTransaction,
    XChainWallet,
    CreateBridgeRequestTransaction,
} from "xchain-sdk";
import { WalletProviderConnectionError, WalletProviderId } from "../../types";
import { EventEmitter } from "@frontend/events";
import { ChainDto } from "@shared/api";

export type WalletProviderEvents = {
    setChain: (chain: ChainDto | undefined) => void;
    // TODO: Delete isChainValid on double metamask refactor
    connect: (address: string, isChainValid: boolean) => void;
    disconnect: () => void;
    connectionError: (error: WalletProviderConnectionError, message: string) => void;
    // TODO: Delete on double metamask refactor
    invalidChain: () => void;
    validChain: () => void;
};

export interface IWalletProvider extends XChainWallet {
    providerId: WalletProviderId;
    type: ChainType;
    address: string;
    /**
     * Adds a listener for the specified event.
     * @param event The event to listen to.
     * @param listener The listener to add.
     * @returns The listener function.
     */
    on: EventEmitter<WalletProviderEvents>["on"];
    /**
     * Checks if the wallet provider is a multiple chain wallet provider.
     * @returns If the wallet provider is a multiple chain wallet provider.
     */
    isMultipleChain(): this is IMultipleChainWalletProvider;
}

export interface ITrustClaimWalletProvider extends IWalletProvider {
    /**
     * Checks if a trust claim is required for the bridge.
     * @param bridge The bridge to check.
     * @returns If a trust claim is required.
     */
    isTrustClaimRequired(bridge: FormattedBridge): boolean;
    /**
     * Trusts a claim for the bridge.
     * @param bridge The bridge to trust.
     * @returns The unconfirmed trust claim transaction.
     */
    trustClaim(bridge: FormattedBridge): Promise<Unconfirmed<TrustClaimTransaction>>;
    /**
     * Checks if a claim is trusted.
     * @param bridge The bridge to check.
     * @returns If the claim is trusted.
     */
    isClaimTrusted(bridge: FormattedBridge): Promise<boolean>;
}

export interface ITrustCommitWalletProvider extends IWalletProvider {
    /**
     * Checks if a trust commit is required for the bridge.
     * @param bridge The bridge to check.
     * @returns If a trust commit is required.
     */
    isTrustCommitRequired(bridge: FormattedBridge): boolean;
    /**
     * Trusts a commit for the bridge.
     * @param bridge The bridge to trust.
     * @returns The unconfirmed trust commit transaction.
     */
    trustCommit(bridge: FormattedBridge): Promise<Unconfirmed<TrustCommitTransaction>>;
    /**
     * Checks if a commit is trusted.
     * @param bridge The bridge to check.
     * @returns If the commit is trusted.
     */
    isCommitTrusted(bridge: FormattedBridge): Promise<boolean>;
}

export interface IMultipleChainWalletProvider extends IWalletProvider {
    /**
     * Adds a chain to the wallet provider.
     * @returns If the chain was added.
     */
    addChain(): Promise<void>;
    /**
     * Switches to a chain.
     * @returns If the chain was switched.
     */
    switchToChain(): Promise<void>;
}

export interface ICreateBridgeRequestWalletProvider extends IWalletProvider {
    /**
     * Creates a bridge request.
     * @param doorAddress The door address.
     * @param tokenAddress The token address.
     * @param issuingDoorAddress The issuing door address.
     * @returns The unconfirmed bridge request transaction.
     */
    createBridgeRequest(
        doorAddress: string,
        tokenAddress: string,
        issuingDoorAddress: string,
    ): Promise<Unconfirmed<CreateBridgeRequestTransaction>>;
}
