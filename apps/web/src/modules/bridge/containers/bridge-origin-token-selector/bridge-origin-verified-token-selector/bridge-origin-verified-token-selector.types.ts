import { BridgeToken } from "@frontend/bridge";
import { CSSProperties } from "react";

export interface BridgeOriginVerifiedTokenSelectorProps {
    onSelect: (token: BridgeToken) => void;
    className?: string;
    style?: CSSProperties;
}
