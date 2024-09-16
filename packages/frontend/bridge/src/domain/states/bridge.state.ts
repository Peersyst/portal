import { createState } from "@frontend/core/domain/state";
import { Bridge } from "xchain-sdk";

export type IBridgeState = {
    bridge: Bridge | undefined;
};

export const bridgeState = createState<IBridgeState>("bridge", () => ({ bridge: undefined }), { persist: false });
