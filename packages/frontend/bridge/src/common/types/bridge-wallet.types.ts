import { PersistedWallet, WalletInfo } from "@frontend/wallet";

export type BridgeWalletConnection = "connecting" | "connected" | "disconnected" | "rejected" | "failed";

export type DisconnectedBridgeWallet = { connection: Extract<BridgeWalletConnection, "disconnected"> };
export type ConnectingBridgeWallet = { connection: Extract<BridgeWalletConnection, "connecting" | "rejected" | "failed"> } & Omit<
    WalletInfo,
    "address"
>;
export type ConnectedBridgeWallet = { connection: Extract<BridgeWalletConnection, "connected"> } & WalletInfo;

export type BridgeWallet = DisconnectedBridgeWallet | ConnectingBridgeWallet | ConnectedBridgeWallet;

export type BridgeWalletPair = {
    originWallet: BridgeWallet;
    destinationWallet: BridgeWallet;
};

export type PersistedBridgeWallets = {
    originWallet?: PersistedWallet;
    destinationWallet?: PersistedWallet;
};
