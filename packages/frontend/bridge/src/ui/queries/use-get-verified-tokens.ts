import { UseExternalQueryOptions } from "@frontend/query/react";
import { BridgeToken } from "../../common/types/bridge-token.types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useBridgeState } from "../state/use-bridge-state";
import { Bridge } from "xchain-sdk";
import { getInstance } from "@frontend/core/common/utils/singleton";
import { BridgeTokenController } from "../../domain/controllers/bridge-token/bridge-token.controller";

/**
 * Returns the query key for the verified tokens query.
 * @param bridge The bridge to get the verified tokens for.
 * @returns The query key.
 */
export function getVerifiedTokensQueryKey(bridge: Bridge | undefined): any {
    return ["verified-tokens", bridge];
}

/**
 * Gets the verified tokens for the given bridge.
 * @param options The options for the query.
 * @returns The query result.
 */
export function useGetVerifiedTokens<T = BridgeToken[]>({
    enabled = true,
    ...restOptions
}: UseExternalQueryOptions<BridgeToken[], Error, T, any[]> = {}): UseQueryResult<T> {
    const bridge = useBridgeState();

    const queryKey = getVerifiedTokensQueryKey(bridge);

    return useQuery({
        queryKey,
        queryFn: () => getInstance(BridgeTokenController).getVerifiedTokens(),
        enabled: !!bridge && enabled,
        ...restOptions,
    });
}
