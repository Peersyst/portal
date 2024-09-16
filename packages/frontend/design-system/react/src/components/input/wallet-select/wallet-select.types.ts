import { WalletProviderDef } from "@frontend/wallet/providers";
import { SelectProps } from "../select";

export type WalletSelectProps = Omit<SelectProps<WalletProviderDef>, "options" | "children"> & {
    wallets: WalletProviderDef[];
};
