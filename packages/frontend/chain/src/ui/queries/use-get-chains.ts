import { UseExternalQueryOptions } from "@frontend/query/react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getInstance } from "@frontend/core/common/utils/singleton";
import { Chain } from "../../common/chain";
import { ChainController } from "../../domain/controllers";

/**
 * Get the query key for the chains query.
 * @returns The query key.
 */
export function getChainsQueryKey(): any {
    return ["chains"];
}

/**
 * Gets the chains.
 * @param options The options for the query.
 * @returns The query result.
 */
export function useGetChains(options?: UseExternalQueryOptions<Chain[], Error, Chain[]>): UseQueryResult<Chain[]> {
    const queryKey = getChainsQueryKey();

    return useQuery({
        queryKey,
        queryFn: () => getInstance(ChainController).getChains(),
        ...options,
    });
}
