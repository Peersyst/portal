import { BridgeSource } from "xchain-sdk";
import { clsx } from "clsx";
import { BridgeOriginVerifiedTokenSelectorProps } from "./bridge-origin-verified-token-selector.types";
import { useBridgeSourceChainState } from "@frontend/bridge/ui/hooks";
import { useGetVerifiedTokens } from "@frontend/bridge/ui/queries";
import {
    buildTokenSelectorListItemFromBridgeToken,
    TokenSelectorListItemData,
} from "@frontend/design-system-react/token-selector-list-item";
import { BridgeTokenSelector } from "../bridge-token-selector/bridge-token-selector";
import { renderBridgeOriginVerifiedTokenSelectorListItem } from "./bridge-origin-verified-token-slector-list-item/bridge-origin-verified-token-selector-list-item";

export function BridgeOriginVerifiedTokenSelector({ onSelect, className, style }: BridgeOriginVerifiedTokenSelectorProps): JSX.Element {
    const sourceChain = useBridgeSourceChainState(BridgeSource.ORIGIN, true);
    const { data: tokens = [], isLoading } = useGetVerifiedTokens<TokenSelectorListItemData[]>({
        select: (data) => {
            return data.map((token) => buildTokenSelectorListItemFromBridgeToken(token, sourceChain.name));
        },
    });

    return (
        <BridgeTokenSelector
            tokens={tokens}
            isLoading={isLoading}
            renderItem={renderBridgeOriginVerifiedTokenSelectorListItem}
            onSelect={onSelect}
            className={clsx("BridgeOriginVerifiedTokenSelector", className)}
            style={style}
        />
    );
}
