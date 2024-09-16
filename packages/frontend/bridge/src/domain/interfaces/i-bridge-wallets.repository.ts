import { BridgeSource } from "xchain-sdk";
import { PersistedBridgeWallets } from "../../common/types/bridge-wallet.types";
import { PersistedWallet } from "@frontend/wallet";

export interface IBridgeWalletsRepository {
    getBridgeWallets(): Promise<PersistedBridgeWallets | undefined>;
    setBridgeWallets(wallets: PersistedBridgeWallets): Promise<void>;
    setOriginWallet(wallet: PersistedWallet | undefined): Promise<void>;
    setDestinationWallet(wallet: PersistedWallet | undefined): Promise<void>;
    setWalletSource(source: BridgeSource, wallet: PersistedWallet | undefined): Promise<void>;
}
