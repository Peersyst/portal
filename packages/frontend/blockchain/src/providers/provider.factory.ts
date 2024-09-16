import { ChainDto } from "@shared/api";
import { ChainType } from "@shared/modules/chain";
import { EthersProvider } from "./evm/ethers";
import { providers } from "ethers";
import { XrplProvider } from "./xrp/xrpl";
import { Client } from "xrpl";
import { IProvider } from "./core/interfaces";

/**
 * ProviderFactory is a function that returns a provider based on the chain type.
 * @param chain The chain to get the provider for.
 * @returns The provider for the chain.
 */
export function ProviderFactory(chain: ChainDto): IProvider {
    switch (chain.type) {
        case ChainType.EVM:
            return new EthersProvider(new providers.JsonRpcProvider(chain.rpcUrl));
        case ChainType.XRP:
            return new XrplProvider(new Client(chain.nodeUrl));
        default:
            throw new Error(`Chain ${chain.type} not supported`);
    }
}
