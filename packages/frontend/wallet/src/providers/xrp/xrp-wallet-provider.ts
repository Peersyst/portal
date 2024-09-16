import { ChainType, FormattedBridge, TrustClaimTransaction, Unconfirmed } from "xchain-sdk";
import { XrpWalletProviderErrors } from "./xrp-wallet-provider.errors";
import { IXrpWalletProviderProvider } from "@frontend/blockchain/providers/xrp/interfaces";
import { IXrpWalletProviderSigner } from "@frontend/blockchain/signers/xrp/interfaces";
import { WalletProvider } from "../core";
import { ITrustClaimWalletProvider } from "../core/interfaces/i-wallet-provider";
import { WalletProviderError } from "../core/error";

export abstract class XrpWalletProvider<
        Provider extends IXrpWalletProviderProvider = IXrpWalletProviderProvider,
        Signer extends IXrpWalletProviderSigner = IXrpWalletProviderSigner,
        Error extends string = string,
        RequestSignerResult = any,
    >
    extends WalletProvider<ChainType.XRP, Provider, Signer, Error, RequestSignerResult>
    implements ITrustClaimWalletProvider
{
    /**
     * @inheritdoc
     */
    isTrustClaimRequired(bridge: FormattedBridge<ChainType.XRP>): boolean {
        return !bridge.isNativeDestinationIssue;
    }

    /**
     * @inheritdoc
     */
    trustClaim(bridge: FormattedBridge<ChainType.XRP>): Promise<Unconfirmed<TrustClaimTransaction>> {
        if (bridge.isNativeDestinationIssue) throw new WalletProviderError(XrpWalletProviderErrors.CANNOT_TRUST_CLAIM_WITH_NATIVE_CURRENCY);

        return this.signer.setTrustLine(
            bridge.destinationXChainBridgeChain.issue.issuer!,
            bridge.destinationXChainBridgeChain.issue.currency,
        );
    }

    /**
     * @inheritdoc
     */
    async isClaimTrusted(bridge: FormattedBridge<ChainType.XRP>): Promise<boolean> {
        if (bridge.isNativeDestinationIssue)
            throw new WalletProviderError(XrpWalletProviderErrors.CANNOT_CHECK_CLAIM_TRUST_WITH_NATIVE_CURRENCY);

        return this.provider.accountHasTrustLine(
            this.address,
            bridge.destinationXChainBridgeChain.issue.issuer!,
            bridge.destinationXChainBridgeChain.issue.currency,
        );
    }
}
