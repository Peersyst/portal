import { ChainType, XrpXChainWalletProvider as IXrpXChainWalletProvider } from "xchain-sdk";
import { IWalletProviderProvider } from "../../core/interfaces/i-wallet-provider.provider";

export interface IXrpWalletProviderProvider extends IWalletProviderProvider<ChainType.XRP>, IXrpXChainWalletProvider {}
