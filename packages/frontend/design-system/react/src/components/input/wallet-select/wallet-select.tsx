import { useMemo } from "react";
import { WalletSelectProps } from "./wallet-select.types";
import { WalletProviderDef } from "@frontend/wallet/providers";
import { SelectOption } from "@peersyst/react-components";
import { ImageSelectItem } from "../image-select-item";
import { Select } from "../select";

export function WalletSelect({ wallets, ...restProps }: WalletSelectProps): JSX.Element {
    const options: SelectOption<WalletProviderDef>[] = useMemo(
        () =>
            wallets.map((wallet) => ({
                label: <ImageSelectItem src={wallet.imageUrl} label={wallet.name} />,
                value: wallet,
            })),
        [wallets],
    );

    return <Select options={options} {...restProps} />;
}
