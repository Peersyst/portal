import { useBridgeChainsState } from "@frontend/bridge/ui/state";
import { CommonModalComponentProps, createModal } from "@frontend/design-system-react/modal";
import { useTranslate } from "@frontend/locale/react";
import { BridgeOriginTokenSelectorModalRoot } from "./bridge-origin-token-selector-modal.styles";
import { BridgeOriginVerifiedTokenSelector } from "../bridge-origin-verified-token-selector/bridge-origin-verified-token-selector-list-item";
import { BridgeToken } from "@frontend/bridge";
import { useSetBridgeToken } from "@frontend/bridge/ui/queries";

export const BridgeOriginTokenSelectorModal = createModal<CommonModalComponentProps>(function BridgeOriginTokenSelectorModal({
    onClose,
    ...restModalProps
}): JSX.Element {
    const translate = useTranslate();
    const { originChain } = useBridgeChainsState();
    const { mutate: setBridgeToken } = useSetBridgeToken();

    const handleSelect = (token: BridgeToken): void => {
        setBridgeToken(token);
        onClose?.();
    };

    return (
        <BridgeOriginTokenSelectorModalRoot
            title={translate("selectTokenOn", { network: originChain?.name })}
            onClose={onClose}
            renderAtRoot // Necessary to render the modal outside of the BridgeOriginAmountField
            {...restModalProps}
        >
            <BridgeOriginVerifiedTokenSelector onSelect={handleSelect} />
        </BridgeOriginTokenSelectorModalRoot>
    );
});
