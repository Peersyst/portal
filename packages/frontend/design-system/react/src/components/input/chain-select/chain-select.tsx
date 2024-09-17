import { Select, SelectOption } from "@peersyst/react-components";
import { useMemo } from "react";
import { ChainSelectProps } from "./chain-select.types";
import { ImageSelectItem } from "../image-select-item";
import { Chain } from "@frontend/chain";

export function ChainSelect({ chains, ...restProps }: ChainSelectProps): JSX.Element {
    const options: SelectOption<Chain>[] = useMemo(
        () =>
            chains.map((chain) => ({
                label: <ImageSelectItem src={chain.image} label={chain.name} />,
                value: chain,
            })),
        [chains],
    );

    return <Select options={options} compare={(a, b) => a.id === b.id} {...restProps} />;
}
