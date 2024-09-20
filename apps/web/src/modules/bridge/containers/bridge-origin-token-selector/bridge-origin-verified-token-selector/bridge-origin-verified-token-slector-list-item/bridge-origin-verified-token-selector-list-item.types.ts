import { BridgeToken } from "@frontend/bridge";
import { TokenSelectorListItemProps } from "@frontend/design-system-react/token-selector-list-item";

export interface BridgeOriginVerifiedTokenSelectorListItemProps
    extends Pick<TokenSelectorListItemProps<BridgeToken>, "item" | "onSelect"> {}
