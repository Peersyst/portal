import { createState } from "@frontend/core/domain/state";
import { BridgeToken } from "../../common";

export type IBridgeTokenState = { bridgeToken?: BridgeToken | undefined };

export const bridgeTokenState = createState<IBridgeTokenState>(
    "bridge-token",
    () => ({
        bridgeToken: undefined,
    }),
    { persist: false },
);
