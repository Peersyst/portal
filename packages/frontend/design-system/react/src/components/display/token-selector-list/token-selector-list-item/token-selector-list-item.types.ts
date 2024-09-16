import Amount from "@shared/amount";
import { XChainBridge } from "xchain-sdk";
import { MoreAction } from "../../../navigation/more";

export type TokenSelectorListItemData = {
    label: string;
    xChainBridge: XChainBridge;
    icon?: string;
};

export type TokenSelectorListItemProps = {
    item: TokenSelectorListItemData;
    onSelect: (option: TokenSelectorListItemData) => void;
    balance?: Amount;
    more?: MoreAction[];
    isBalanceLoading?: boolean;
};
