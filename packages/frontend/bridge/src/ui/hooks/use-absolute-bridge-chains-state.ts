import { Chain } from "@frontend/chain";
import { useBridgeChainsState } from "../state/use-bridge-chains-state";
import { useMemo, useRef } from "react";

/**
 * Gets the absolute bridge chains state.
 * This means the origin and destination chains are always in the same order.
 * @param assert Whether to assert that the bridge chains are set.
 * @returns The absolute bridge chains state.
 */
export function useAbsoluteBridgeChainsState<A extends boolean = false>(
    assert: A = false as A,
): A extends false ? [Chain | undefined, Chain | undefined] : [Chain, Chain] {
    const { originChain, destinationChain } = useBridgeChainsState();

    const absoluteBridgeChainsRef = useRef<[Chain | undefined, Chain | undefined]>([originChain, destinationChain]);

    if (assert && (!originChain || !destinationChain)) {
        throw new Error("Both bridge chains are not set");
    }

    return useMemo(() => {
        if (
            (originChain !== absoluteBridgeChainsRef.current[0] && originChain !== absoluteBridgeChainsRef.current[1]) ||
            (destinationChain !== absoluteBridgeChainsRef.current[0] && destinationChain !== absoluteBridgeChainsRef.current[1])
        ) {
            absoluteBridgeChainsRef.current = [originChain, destinationChain];
        }

        return absoluteBridgeChainsRef.current as A extends false ? [Chain | undefined, Chain | undefined] : [Chain, Chain];
    }, [originChain, destinationChain]);
}
