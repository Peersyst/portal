import { IProvider } from "../../core/interfaces/i-provider";
import { ITokenProvider } from "../../core/interfaces/i-token.provider";
import { IEvmWalletProviderProvider } from "./i-evm-wallet-provider.provider";

export interface IEvmProvider extends IEvmWalletProviderProvider, IProvider, ITokenProvider {}
