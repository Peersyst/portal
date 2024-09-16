import { TokenSelectorListItemData } from "@frontend/design-system-react/token-selector-list-item";
import { CSSProperties } from "react";

export interface BridgeOriginVerifiedTokenSelectorProps {
    onSelect: (token: TokenSelectorListItemData) => void;
    className?: string;
    style?: CSSProperties;
}
