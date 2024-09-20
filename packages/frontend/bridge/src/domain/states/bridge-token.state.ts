import { createState } from "@frontend/core/domain/state";
import { BridgeToken } from "../../common";

export type IBridgeTokenState = BridgeToken | undefined;

export const bridgeTokenState = createState<IBridgeTokenState>("bridge-token", () => undefined, { persist: false });
