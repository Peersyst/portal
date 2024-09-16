import { createState } from "@frontend/core/domain/state";
import { BridgeChainPair } from "../../common/types/bridge-chain.types";

export type IBridgeChainsState = Partial<BridgeChainPair>;

export const bridgeChainsState = createState<IBridgeChainsState>("bridge-chains", () => ({}), { persist: false });
