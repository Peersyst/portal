import { UseExternalMutationOptions } from "@frontend/query/react";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { BridgeSource, BridgeTransferResult } from "xchain-sdk";
import { useConnectedBridgeSourceWalletState } from "../hooks/use-connected-bridge-source-wallet-state";
import { getInstance } from "@frontend/core/common/utils/singleton";
import { BridgeTransferController } from "../../domain/controllers/bride-transfer/bridge-transfer.controller";
import { getSourceBridgeTokenBalanceQueryKey } from "./use-get-source-bridge-token-balance";
import { getIsDestinationActiveQueryKey } from "./use-is-destination-active";

/**
 * Transfer mutation.
 * @param options The options for mutation.
 * @returns The mutation result.
 */
export function useTransfer(
    options?: UseExternalMutationOptions<BridgeTransferResult, Error, string>,
): UseMutationResult<BridgeTransferResult, Error, string> {
    const originWallet = useConnectedBridgeSourceWalletState(BridgeSource.ORIGIN);
    const destinationWallet = useConnectedBridgeSourceWalletState(BridgeSource.DESTINATION);

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (amount: string) => getInstance(BridgeTransferController).transfer(amount),
        onSuccess: async () => {
            await Promise.all([
                queryClient.invalidateQueries(getSourceBridgeTokenBalanceQueryKey(originWallet?.address, BridgeSource.ORIGIN, undefined)),
                queryClient.invalidateQueries(
                    getSourceBridgeTokenBalanceQueryKey(destinationWallet?.address, BridgeSource.ORIGIN, undefined),
                ),
                queryClient.invalidateQueries(getIsDestinationActiveQueryKey(destinationWallet?.address)),
            ]);
        },
        ...options,
    });
}
