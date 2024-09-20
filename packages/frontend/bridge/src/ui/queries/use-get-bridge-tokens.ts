import { Chain } from "@frontend/chain";
import { UseExternalQueryOptions } from "@frontend/query/react";
import { useQuery } from "@tanstack/react-query";
import { BridgeToken } from "../../common/bridge-token";
import { getInstance } from "@frontend/core/common/utils/singleton";
import { BridgeTokenController } from "../../domain/controllers";

/**
 * Returns the query key for the bridge tokens query.
 * @param chain The chain to get the bridge tokens for.
 * @param otherChain The other chain to get the bridge tokens for.
 * @param query The query to get the bridge tokens for.
 * @returns The query key.
 */
export function getBridgeTokensQueryKey(chain: Chain, otherChain: Chain, query: string | undefined) {
    return ["bridge-tokens", chain, otherChain, query];
}

/**
 * Gets the bridge tokens for the given chain and other chain.
 * @param chain The chain to get the bridge tokens for.
 * @param otherChain The other chain to get the bridge tokens for.
 * @param query The query to get the bridge tokens for.
 * @param options The options for the query.
 * @returns The query result.
 */
export function useGetBridgeTokens<T>(
    chain: Chain,
    otherChain: Chain,
    query: string | undefined,
    options?: UseExternalQueryOptions<BridgeToken[], Error, T>,
) {
    const queryKey = getBridgeTokensQueryKey(chain, otherChain, query);

    return useQuery({
        queryKey,
        queryFn: () => getInstance(BridgeTokenController).getBridgeTokens(chain, otherChain, query),
        ...options,
    });
}
