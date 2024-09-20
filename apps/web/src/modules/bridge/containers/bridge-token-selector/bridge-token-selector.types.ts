import { BridgeToken } from "@frontend/bridge";
import { TokenSelectorListProps } from "@frontend/design-system-react/token-selector-list";
import { TokenSelectorListItemData } from "@frontend/design-system-react/token-selector-list-item";
import { CSSProperties, ReactNode } from "react";

export type BridgeTokenSelectorProps = Pick<TokenSelectorListProps<BridgeToken>, "onSelect" | "renderItem"> & {
    tokens: TokenSelectorListItemData<BridgeToken>[];
    isLoading?: boolean;
    defaultQuery?: string;
    query?: string;
    onQueryChange?: (query: string) => void;
    nothingToShow?: ReactNode;
    className?: string;
    style?: CSSProperties;
    isFiltering?: boolean;
};
