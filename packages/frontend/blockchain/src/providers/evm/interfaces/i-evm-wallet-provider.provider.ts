import { ChainType, EvmXChainWalletProvider as IEvmXChainWalletProvider } from "xchain-sdk";
import { IWalletProviderProvider } from "../../core/interfaces/i-wallet-provider.provider";

export interface IEvmWalletProviderProvider extends IWalletProviderProvider<ChainType.EVM>, IEvmXChainWalletProvider {}
