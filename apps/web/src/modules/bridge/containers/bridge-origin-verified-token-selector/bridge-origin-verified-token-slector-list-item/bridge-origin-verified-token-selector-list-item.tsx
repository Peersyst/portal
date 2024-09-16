import { BridgeSource } from "xchain-sdk";
import { BridgeOriginVerifiedTokenSelectorListItemProps } from "./bridge-origin-verified-token-selector-list-item.types";
import { useGetBridgeWalletTokenBalance } from "@frontend/bridge/ui/queries";
import { TokenSelectorListItem } from "@frontend/design-system-react/token-selector-list-item";

export default function BridgeOriginVerifiedTokenSelectorListItem({
    item,
    onSelect,
}: BridgeOriginVerifiedTokenSelectorListItemProps): JSX.Element {
    const { data: tokenBalance, isLoading: isBalanceLoading } = useGetBridgeWalletTokenBalance(BridgeSource.ORIGIN, item.xChainBridge);

    return <TokenSelectorListItem item={item} onSelect={onSelect} balance={tokenBalance} isBalanceLoading={isBalanceLoading} />;
}

/**
 * Renders a bridge origin verified token selector list item.
 * @param props The props for the bridge origin verified token selector list item.
 * @param index The index of the bridge origin verified token selector list item.
 * @returns The bridge origin verified token selector list item.
 */
export const renderBridgeOriginVerifiedTokenSelectorListItem = (props: BridgeOriginVerifiedTokenSelectorListItemProps, index: number) => {
    return <BridgeOriginVerifiedTokenSelectorListItem key={`verified-token-selector-${index}`} {...props} />;
};
