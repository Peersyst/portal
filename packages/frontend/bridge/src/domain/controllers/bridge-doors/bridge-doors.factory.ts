import { BridgeDoor, ChainType, EvmBridgeDoor, XrpBridgeDoor } from "xchain-sdk";
import { ProviderFactory } from "@frontend/blockchain/providers";
import { ChainDto } from "@shared/api";

/**
 * BridgeDoorFactory is a function that returns a bridge door based on the chain type.
 * @param doorAddress The address of the bridge door.
 * @param chain The chain to get the bridge door for.
 * @returns The bridge door for the chain.
 */
export function BridgeDoorFactory(doorAddress: string, chain: ChainDto): BridgeDoor {
    const provider = ProviderFactory(chain);

    switch (chain.type) {
        case ChainType.EVM:
            return new EvmBridgeDoor(provider, doorAddress, chain.name);
        case ChainType.XRP:
            return new XrpBridgeDoor(provider, doorAddress, chain.name);
        default:
            throw new Error(`Chain ${chain.type} not supported`);
    }
}
