import { UseExternalQueryOptions } from "@frontend/query/react";
import Amount from "@shared/amount";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BridgeToken } from "../../common";
import { Chain } from "@frontend/chain";
import { getInstance } from "@frontend/core/common/utils/singleton";
import { BridgeTokenController } from "../../domain/controllers/bridge-token/bridge-token.controller";

/**
 * Returns the query key for the bridge source token balance query.
 * @param address The address of the user.
 * @param chainId The chain id.
 * @param tokenId The token id.
 * @returns The query key.
 */
export function getChainBridgeTokenBalanceQueryKey(address?: string, chainId?: string, tokenId?: string): any {
    return ["bridge-chain-token-balance", address, tokenId, chainId];
}

/**
 * Gets the bridge source token balance.
 * @param address The address of the user.
 * @param chain The chain to get the balance for.
 * @param token The token to get the balance of.
 * @param options The options for the query.
 * @returns The query result.
 */
export function useGetChainBridgeTokenBalance<TData = Amount>(
    address: string | undefined,
    chain: Chain | undefined,
    token: BridgeToken | undefined,
    { enabled = true, ...restOptions }: UseExternalQueryOptions<Amount, Error, TData, any[]> = {},
): UseQueryResult<TData> {
    const queryKey = getChainBridgeTokenBalanceQueryKey(address, chain?.id, token?.id);

    return useQuery<Amount, Error, TData, any[]>({
        queryKey,
        queryFn: () => getInstance(BridgeTokenController).getChainBridgeTokenBalance(address!, chain!, token!),
        enabled: !!address && !!token && !!chain && enabled,
        ...restOptions,
    });
}
