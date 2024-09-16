import { TokenSelectorListProps } from "@frontend/design-system-react/token-selector-list";
import { TokenSelectorListItemData } from "@frontend/design-system-react/token-selector-list-item";
import { CSSProperties, ReactNode } from "react";

export type BridgeTokenSelectorProps = Pick<TokenSelectorListProps, "onSelect" | "renderItem"> & {
    tokens: TokenSelectorListItemData[];
    isLoading?: boolean;
    defaultQuery?: string;
    query?: string;
    onQueryChange?: (query: string) => void;
    nothingToShow?: ReactNode;
    className?: string;
    style?: CSSProperties;
    isFiltering?: boolean;
    onTokensFiltered?: (tokens: TokenSelectorListItemData[], query: string) => void;
};
