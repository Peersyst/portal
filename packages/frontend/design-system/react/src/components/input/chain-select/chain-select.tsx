import { Select, SelectOption } from "@peersyst/react-components";
import { useMemo } from "react";
import { ChainSelectProps } from "./chain-select.types";
import { ChainDto } from "@shared/api";
import { ImageSelectItem } from "../image-select-item";

export function ChainSelect({ chains, ...restProps }: ChainSelectProps): JSX.Element {
    const options: SelectOption<ChainDto>[] = useMemo(
        () =>
            chains.map((chain) => ({
                label: <ImageSelectItem src={chain.imageUrl} label={chain.name} />,
                value: chain,
            })),
        [chains],
    );

    return <Select options={options} compare={(a, b) => a.name === b.name} {...restProps} />;
}
