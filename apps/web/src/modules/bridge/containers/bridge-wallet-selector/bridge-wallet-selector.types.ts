import { BridgeSource } from "xchain-sdk";
import { WalletSelectProps } from "@frontend/design-system-react/wallet-select";

export type BridgeWalletSelectorProps = Omit<WalletSelectProps, "wallets" | "dropdownElement"> & {
    side: BridgeSource;
};
