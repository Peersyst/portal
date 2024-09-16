import { CSSProperties, ReactNode } from "react";
import { TokenSelectorListItemData, TokenSelectorListItemProps } from "./token-selector-list-item/token-selector-list-item.types";
import { ThemeSpacingKeys } from "../../../themes/common/spacing";

export type TokenSelectorListProps = Pick<TokenSelectorListItemProps, "onSelect"> & {
    tokens: TokenSelectorListItemData[];
    isLoading?: boolean;
    gap?: ThemeSpacingKeys;
    nothingToShow?: ReactNode;
    className?: string;
    style?: CSSProperties;
    renderItem?: (props: TokenSelectorListItemProps, index: number) => JSX.Element;
};
