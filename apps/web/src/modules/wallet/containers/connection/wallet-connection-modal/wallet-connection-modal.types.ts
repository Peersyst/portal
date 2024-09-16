import { WalletProviderId } from "@frontend/wallet/providers";
import { BridgeSource } from "xchain-sdk";

export type WalletConnectionModalProps = {
    providerId: WalletProviderId;
    side: BridgeSource;
};
