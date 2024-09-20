import { useState } from "react";
import { BridgeOriginTokenSelectorButton } from "./bridge-origin-token-selector.styles";
import { Typography } from "@frontend/design-system-react/typography";
import { AngleDownIcon } from "@frontend/design-system-react/icons";
import { BridgeOriginTokenSelectorModal } from "./bridge-origin-token-selector-modal/bridge-origin-token-selector-modal";
import { useBridgeTokenState } from "@frontend/bridge/ui/state";

export function BridgeOriginTokenSelector(): JSX.Element {
    const [openBridgeOriginTokenSelectorModal, setOpenBridgeOriginTokenSelectorModal] = useState(false);
    const token = useBridgeTokenState();

    return (
        <>
            {token && (
                <BridgeOriginTokenSelectorButton variant="text" size="sm" onClick={() => setOpenBridgeOriginTokenSelectorModal(true)}>
                    <Typography variant="body2Regular">{token.symbol}</Typography>
                    <AngleDownIcon />
                </BridgeOriginTokenSelectorButton>
            )}
            <BridgeOriginTokenSelectorModal
                open={openBridgeOriginTokenSelectorModal}
                onClose={() => setOpenBridgeOriginTokenSelectorModal(false)}
            />
        </>
    );
}
