import { UseExternalQueryOptions } from "@frontend/query/react";
import Amount from "@shared/amount";
import { useConnectedBridgeSourceWalletState } from "../hooks/use-connected-bridge-source-wallet-state";
import { UseQueryResult } from "@tanstack/react-query";
import { useGetSourceBridgeTokenBalance } from "./use-get-source-bridge-token-balance";
import { BridgeSource, BridgeToken } from "../../common";

/**
 * Gets the wallet bridge token balance for the given BridgeSource and XChainBridge.
 * @param source The source of the bridge.
 * @param token The token to get the balance of.
 * @param options The query options.
 * @returns The wallet bridge token balance query result.
 */
export function useGetBridgeWalletTokenBalance<TData = Amount>(
    source: BridgeSource,
    token: BridgeToken | undefined,
    options?: UseExternalQueryOptions<Amount, Error, TData, any[]>,
): UseQueryResult<TData> {
    const sourceWallet = useConnectedBridgeSourceWalletState(source);

    return useGetSourceBridgeTokenBalance<TData>(sourceWallet?.address, token, source, options);
}
