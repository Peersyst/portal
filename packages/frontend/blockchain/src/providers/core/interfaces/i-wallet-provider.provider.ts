import { ChainType, XChainWalletProvider as IXChainWalletProvider } from "xchain-sdk";

export interface IWalletProviderProvider<T extends ChainType> extends IXChainWalletProvider<T> {}
