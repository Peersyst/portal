import { ChainType, XChainWalletSigner as IXChainWalletSigner } from "xchain-sdk";

export interface IWalletProviderSigner<T extends ChainType> extends IXChainWalletSigner<T> {}
