import { ChainType, XrpXChainWalletSigner as IXrpXChainWalletSigner } from "xchain-sdk";
import { IWalletProviderSigner } from "../../core/interfaces/i-wallet-provider.signer";

export interface IXrpWalletProviderSigner extends IWalletProviderSigner<ChainType.XRP>, IXrpXChainWalletSigner {}
