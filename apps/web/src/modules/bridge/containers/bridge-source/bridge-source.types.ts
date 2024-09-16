import { CSSProperties } from "react";
import { BridgeSource } from "xchain-sdk";

export type BridgeSourceProps = {
    source: BridgeSource;
    style?: CSSProperties;
    className?: string;
};
