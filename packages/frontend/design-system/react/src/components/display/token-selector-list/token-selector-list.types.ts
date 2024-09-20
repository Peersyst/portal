import { CSSProperties, ReactNode } from "react";
import { TokenSelectorListItemData, TokenSelectorListItemProps } from "./token-selector-list-item/token-selector-list-item.types";
import { ThemeSpacingKeys } from "../../../themes/common/spacing";

export type TokenSelectorListProps<T> = Pick<TokenSelectorListItemProps<T>, "onSelect"> & {
    tokens: TokenSelectorListItemData<T>[];
    isLoading?: boolean;
    gap?: ThemeSpacingKeys;
    nothingToShow?: ReactNode;
    className?: string;
    style?: CSSProperties;
    renderItem?: (props: TokenSelectorListItemProps<T>, index: number) => JSX.Element;
};
