import { getInstance } from "@frontend/core/common/utils/singleton";
import { UseExternalMutationOptions } from "@frontend/query/react";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { BridgeTokenController } from "../../domain/controllers/bridge-token/bridge-token.controller";
import { BridgeToken } from "../../common/bridge-token";

/**
 * Sets the bridge token for the given chain and other chain.
 * @param options The options for the mutation.
 * @returns The mutation result.
 */
export function useSetBridgeToken(
    options?: UseExternalMutationOptions<void, Error, BridgeToken | undefined>,
): UseMutationResult<void, Error, BridgeToken | undefined> {
    return useMutation({
        mutationFn: (token: BridgeToken | undefined) => Promise.resolve(getInstance(BridgeTokenController).setBridgeToken(token)),
        ...options,
    });
}
