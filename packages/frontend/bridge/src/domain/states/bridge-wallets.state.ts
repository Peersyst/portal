import { BridgeWalletPair } from "../../common/types/bridge-wallet.types";
import { createState } from "@frontend/core/domain/state";

export type IBridgeWalletsState = BridgeWalletPair;

export const bridgeWalletsState = createState<IBridgeWalletsState>(
    "bridge-wallets",
    () => ({
        originWallet: { connection: "disconnected" },
        destinationWallet: { connection: "disconnected" },
    }),
    { persist: false },
);
