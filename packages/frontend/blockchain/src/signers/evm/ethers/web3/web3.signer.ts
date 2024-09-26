import {
    ChainType,
    ClaimId,
    CommitTransaction,
    CreateAccountCommitTransaction,
    CreateBridgeRequestTransaction,
    CreateClaimTransaction,
    EthersXChainSigner,
    FormattedBridge,
    TrustCommitTransaction,
    Unconfirmed,
} from "xchain-sdk";
import { ethers } from "ethers";
import { Web3SignerErrors } from "./web3.signer.errors";
import { SignerError } from "../../../core/error";
import { SubProvider } from "../../../../providers/evm/ethers/ethers.provider.types";
import { AddWeb3ChainPayload } from "./web3.signer.types";
import { IWeb3Signer } from "./interfaces/i-web3.signer";

export class Web3Signer<Provider> extends EthersXChainSigner<any> implements IWeb3Signer {
    protected get web3Provider(): ethers.providers.Web3Provider {
        return this.signer.provider as ethers.providers.Web3Provider;
    }

    protected get web3SubProvider(): SubProvider {
        return this.web3Provider.provider as SubProvider;
    }

    constructor(signer: ethers.Signer, provider: Provider) {
        if (!signer.provider || !(signer.provider instanceof ethers.providers.Web3Provider)) {
            throw new SignerError(Web3SignerErrors.SIGNER_PROVIDER_MUST_BE_WEB3);
        }

        super(signer, provider);
    }

    /**
     * Handles service errors.
     * @param e Error.
     * @param handlers Error handlers.
     */
    private handleError(e: any, handlers?: Partial<Record<number | "default", Web3SignerErrors | (() => void)>>): any {
        if (handlers?.[e.code]) {
            const handler = handlers[e.code];
            if (typeof handler === "function") handler();
            else throw new SignerError(handler!);
        } else if (e.code === 4001 || e.code === "ACTION_REJECTED") throw new SignerError(Web3SignerErrors.WEB3_REQUEST_REJECTED);
        else if (handlers?.["default"]) {
            const handler = handlers["default"];
            if (typeof handler === "function") handler();
            else throw new SignerError(handler!);
        } else throw e;
    }

    /**
     * @inheritdoc
     */
    onAccountsChange(handler: (address: string[]) => void): () => void {
        this.web3SubProvider.on("accountsChanged", handler);
        return () => this.web3SubProvider.removeListener("accountsChanged", handler);
    }

    /**
     * @inheritdoc
     */
    onChainChange(handler: (chainId: string) => void): () => void {
        this.web3SubProvider.on("chainChanged", handler);
        return () => this.web3SubProvider.removeListener("chainChanged", handler);
    }

    /**
     * @inheritdoc
     */
    async getChain(): Promise<number> {
        const network = await this.web3Provider.getNetwork();
        return network.chainId;
    }

    /**
     * @inheritdoc
     */
    async addChain({ chainId, ...restChain }: AddWeb3ChainPayload): Promise<void> {
        try {
            return await this.web3SubProvider.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        chainId: "0x" + chainId.toString(16),
                        ...restChain,
                    },
                ],
            });
        } catch (e) {
            return this.handleError(e);
        }
    }

    /**
     * @inheritdoc
     */
    async switchToChain(chainId: number): Promise<void> {
        try {
            await this.web3SubProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x" + chainId.toString(16) }],
            });
        } catch (e) {
            return this.handleError(e, { 4902: Web3SignerErrors.WEB3_CHAIN_NOT_FOUND });
        }
    }

    /**
     * @inheritdoc
     */
    async approveBridgeTokenContract(bridge: FormattedBridge<ChainType.EVM>): Promise<Unconfirmed<TrustCommitTransaction>> {
        try {
            return await super.approveBridgeTokenContract(bridge);
        } catch (e) {
            return this.handleError(e);
        }
    }

    /**
     * @inheritdoc
     */
    async createClaim(originAddress: string, bridge: FormattedBridge<ChainType.EVM>): Promise<Unconfirmed<CreateClaimTransaction>> {
        try {
            return await super.createClaim(originAddress, bridge);
        } catch (e) {
            return this.handleError(e);
        }
    }

    /**
     * @inheritdoc
     */
    async commit(
        claimId: ClaimId,
        destinationAddress: string,
        bridge: FormattedBridge<ChainType.EVM>,
        amount: string,
    ): Promise<Unconfirmed<CommitTransaction>> {
        try {
            return await super.commit(claimId, destinationAddress, bridge, amount);
        } catch (e) {
            return this.handleError(e);
        }
    }

    /**
     * @inheritdoc
     */
    async createAccountCommit(
        destinationAddress: string,
        bridge: FormattedBridge<ChainType.EVM>,
        amount: string,
    ): Promise<Unconfirmed<CreateAccountCommitTransaction>> {
        try {
            return await super.createAccountCommit(destinationAddress, bridge, amount);
        } catch (e) {
            return this.handleError(e);
        }
    }

    /**
     * @inheritdoc
     */
    async createBridgeRequest(
        doorAddress: string,
        token: string,
        issuingDoorAddress: string,
    ): Promise<Unconfirmed<CreateBridgeRequestTransaction>> {
        try {
            return await super.createBridgeRequest(doorAddress, token, issuingDoorAddress);
        } catch (e) {
            return this.handleError(e);
        }
    }
}
