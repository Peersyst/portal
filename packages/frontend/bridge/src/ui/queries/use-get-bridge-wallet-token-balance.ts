import { UseExternalQueryOptions } from "@frontend/query/react";
import Amount from "@shared/amount";
import { BridgeSource, XChainBridge } from "xchain-sdk";
import { useConnectedBridgeSourceWalletState } from "../hooks/use-connected-bridge-source-wallet-state";
import { UseQueryResult } from "@tanstack/react-query";
import { useGetSourceBridgeTokenBalance } from "./use-get-source-bridge-token-balance";

/**
 * Gets the wallet bridge token balance for the given BridgeSource and XChainBridge.
 * @param source The source of the bridge.
 * @param xChainBridge The XChainBridge instance.
 * @param options The query options.
 * @returns The wallet bridge token balance query result.
 */
export function useGetBridgeWalletTokenBalance<TData = Amount>(
    source: BridgeSource,
    xChainBridge: XChainBridge | undefined,
    options?: UseExternalQueryOptions<Amount, Error, TData, any[]>,
): UseQueryResult<TData> {
    const sourceWallet = useConnectedBridgeSourceWalletState(source);

    return useGetSourceBridgeTokenBalance<TData>(sourceWallet?.address, source, xChainBridge, options);
}
