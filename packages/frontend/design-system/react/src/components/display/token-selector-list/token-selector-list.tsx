import { useCallback } from "react";
import { renderTokenSelectorListItem } from "./token-selector-list-item/token-selector-list-item";
import { TokenSelectorListProps } from "./token-selector-list.types";
import { TokenSelectorListItemData } from "./token-selector-list-item/token-selector-list-item.types";
import { List } from "../list/list";
import { TokenSelectorListItemSkeleton } from "./token-selector-list-item/token-selector-list-item-skeleton";

export function TokenSelectorList<T>({
    onSelect,
    tokens,
    isLoading,
    gap,
    nothingToShow,
    renderItem: renderItemProp = renderTokenSelectorListItem,
    ...rest
}: TokenSelectorListProps<T>): JSX.Element {
    const renderItem = useCallback(
        (item: TokenSelectorListItemData<T>, index: number) => renderItemProp({ onSelect, item }, index),
        [onSelect],
    );

    return (
        <List
            data={tokens}
            gap={gap}
            renderItem={renderItem}
            isLoading={isLoading}
            nothingToShow={nothingToShow}
            Skeleton={TokenSelectorListItemSkeleton}
            numberOfSkeletons={5}
            {...rest}
        />
    );
}
