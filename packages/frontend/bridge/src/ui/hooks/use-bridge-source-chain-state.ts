import { ChainDto } from "@shared/api";
import { BridgeSource } from "xchain-sdk";
import { useBridgeChainsState } from "../state/use-bridge-chains-state";

/**
 * Gets the chain state for the given bridge source.
 * @param source The bridge source.
 * @param assert Whether to assert that the chain is set.
 * @returns The chain state for the given bridge source.
 */
export function useBridgeSourceChainState<A extends boolean = false>(
    source: BridgeSource,
    assert: A = false as A,
): A extends true ? ChainDto : ChainDto | undefined {
    const { originChain, destinationChain } = useBridgeChainsState();

    const chain = source === BridgeSource.ORIGIN ? originChain : destinationChain;

    if (assert && !chain) throw new Error(`Chain ${source} is not set`);

    return chain as A extends true ? ChainDto : ChainDto | undefined;
}
