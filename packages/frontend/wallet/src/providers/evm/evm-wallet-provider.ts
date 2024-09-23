import { IEvmWalletProviderProvider } from "@frontend/blockchain/providers/evm/interfaces";
import { IEvmWalletProviderSigner } from "@frontend/blockchain/signers/evm/ethers/web3/interfaces";
import { ChainType, FormattedBridge, TrustCommitTransaction, Unconfirmed, CreateBridgeRequestTransaction } from "xchain-sdk";
import { WalletProvider } from "../core/wallet-provider";
import { ICreateBridgeRequestWalletProvider, ITrustCommitWalletProvider } from "../core/interfaces/i-wallet-provider";
import { WalletProviderError } from "../core/error";
import { EvmWalletProviderErrors } from "./evm-wallet-provider.errors";

export abstract class EvmWalletProvider<
        Provider extends IEvmWalletProviderProvider = IEvmWalletProviderProvider,
        Signer extends IEvmWalletProviderSigner = IEvmWalletProviderSigner,
        Error extends string = string,
        RequestSignerResult = any,
    >
    extends WalletProvider<ChainType.EVM, Provider, Signer, Error, RequestSignerResult>
    implements ITrustCommitWalletProvider, ICreateBridgeRequestWalletProvider
{
    /**
     * @inheritdoc
     */
    isTrustCommitRequired(bridge: FormattedBridge<ChainType.EVM>): boolean {
        return !bridge.isNativeOriginIssue;
    }

    /**
     * @inheritdoc
     */
    async trustCommit(bridge: FormattedBridge<ChainType.EVM>): Promise<Unconfirmed<TrustCommitTransaction>> {
        if (bridge.isNativeOriginIssue) throw new WalletProviderError(EvmWalletProviderErrors.CANNOT_TRUST_COMMIT_WITH_NATIVE_TOKEN);

        try {
            return await this.signer.approveBridgeTokenContract(bridge);
        } catch (e) {
            return this.handleError(e);
        }
    }

    /**
     * @inheritdoc
     */
    async isCommitTrusted(bridge: FormattedBridge<ChainType.EVM>): Promise<boolean> {
        if (bridge.isNativeOriginIssue) throw new WalletProviderError(EvmWalletProviderErrors.CANNOT_CHECK_COMMIT_TRUST_WITH_NATIVE_TOKEN);

        return true;
    }

    /**
     * @inheritdoc
     */
    async createBridgeRequest(
        doorAddress: string,
        tokenAddress: string,
        issuingDoorAddress: string,
    ): Promise<Unconfirmed<CreateBridgeRequestTransaction>> {
        return await this.signer.createBridgeRequest(doorAddress, tokenAddress, issuingDoorAddress);
    }
}
