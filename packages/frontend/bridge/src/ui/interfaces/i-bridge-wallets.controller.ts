import { BridgeSource } from "xchain-sdk";
import { IWalletProvider } from "@frontend/wallet/providers/interfaces";
import { WalletProvider, WalletProviderId } from "@frontend/wallet/providers";
import { BridgeWallet, BridgeWalletPair } from "../../common/types/bridge-wallet.types";

export interface IBridgeWalletsController {
    originWalletProvider: IWalletProvider | undefined;
    destinationWalletProvider: IWalletProvider | undefined;
    requestOriginWalletConnection(providerId: WalletProviderId): Promise<WalletProvider>;
    requestDestinationWalletConnection(providerId: WalletProviderId): Promise<WalletProvider>;
    disconnectOriginWallet(): void;
    disconnectDestinationWallet(): void;
    disconnectWallet(side: BridgeSource): void;
    swap(): void;
    getOriginWallet(): BridgeWallet;
    getDestinationWallet(): BridgeWallet;
    getBridgeWallets(): BridgeWalletPair;
}
