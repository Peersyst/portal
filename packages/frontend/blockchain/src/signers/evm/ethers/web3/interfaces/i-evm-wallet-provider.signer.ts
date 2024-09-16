import { ChainType, EvmXChainWalletSigner as IEvmXChainWalletSigner } from "xchain-sdk";
import { IWalletProviderSigner } from "../../../../core/interfaces/i-wallet-provider.signer";

export interface IEvmWalletProviderSigner extends IWalletProviderSigner<ChainType.EVM>, IEvmXChainWalletSigner {}
