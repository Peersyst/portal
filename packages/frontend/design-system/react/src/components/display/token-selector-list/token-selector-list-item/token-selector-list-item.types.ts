import Amount from "@shared/amount";
import { MoreAction } from "../../../navigation/more";

export type TokenSelectorListItemData<T> = {
    label: string;
    icon?: string;
    value: T;
};

export type TokenSelectorListItemProps<T> = {
    item: TokenSelectorListItemData<T>;
    onSelect: (option: T) => void;
    balance?: Amount;
    more?: MoreAction[];
    isBalanceLoading?: boolean;
};
