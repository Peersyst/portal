import { clsx } from "clsx";
import { BridgeOriginVerifiedTokenSelectorProps } from "./bridge-origin-verified-token-selector.types";
import { useAbsoluteBridgeChainsState } from "@frontend/bridge/ui/hooks";
import { TokenSelectorListItemData } from "@frontend/design-system-react/token-selector-list-item";
import { BridgeTokenSelector } from "../../bridge-token-selector/bridge-token-selector";
import { renderBridgeOriginVerifiedTokenSelectorListItem } from "./bridge-origin-verified-token-slector-list-item/bridge-origin-verified-token-selector-list-item";
import { useGetBridgeTokens } from "@frontend/bridge/ui/queries";
import { useState } from "react";
import { BridgeToken } from "@frontend/bridge";

export function BridgeOriginVerifiedTokenSelector({ onSelect, className, style }: BridgeOriginVerifiedTokenSelectorProps): JSX.Element {
    const [chain, otherChain] = useAbsoluteBridgeChainsState(true);
    const [query, setQuery] = useState<string | undefined>(undefined);

    const { data: tokens = [], isLoading } = useGetBridgeTokens<TokenSelectorListItemData<BridgeToken>[]>(chain, otherChain, query, {
        select: (data) => {
            return data.map((token) => ({
                label: token.symbol,
                icon: token.image,
                value: token,
            }));
        },
    });

    return (
        <BridgeTokenSelector
            tokens={tokens}
            isLoading={isLoading}
            renderItem={renderBridgeOriginVerifiedTokenSelectorListItem}
            onSelect={onSelect}
            query={query}
            onQueryChange={setQuery}
            className={clsx("BridgeOriginVerifiedTokenSelector", className)}
            style={style}
        />
    );
}
