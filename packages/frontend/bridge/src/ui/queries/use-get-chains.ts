import { UseExternalQueryOptions } from "@frontend/query/react";
import { ChainDto } from "@shared/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BridgeChainsController } from "../../domain/controllers/bridge-chains/bridge-chains.controller";
import { getInstance } from "@frontend/core/common/utils/singleton";

/**
 * Get the query key for the chains query.
 * @returns The query key.
 */
export function getChainsQueryKey(): any {
    return ["chain"];
}

/**
 * Gets the chains.
 * @param options The options for the query.
 * @returns The query result.
 */
export function useGetChains(options?: UseExternalQueryOptions<ChainDto[], Error, ChainDto[]>): UseQueryResult<ChainDto[]> {
    const queryKey = getChainsQueryKey();

    return useQuery({ queryKey, queryFn: () => getInstance(BridgeChainsController).getChains(), ...options });
}
