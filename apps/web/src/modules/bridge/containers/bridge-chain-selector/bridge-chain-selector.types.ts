import { BridgeSource } from "xchain-sdk";
import { ChainSelectProps } from "@frontend/design-system-react/chain-select";

export type BridgeChainSelectorProps = Omit<ChainSelectProps, "chains"> & {
    source: BridgeSource;
};
