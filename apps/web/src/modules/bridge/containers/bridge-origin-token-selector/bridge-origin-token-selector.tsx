import { useGetSourceToken } from "@frontend/bridge/ui/queries";
import { useState } from "react";
import { BridgeSource } from "xchain-sdk";
import { BridgeOriginTokenSelectorButton } from "./bridge-origin-token-selector.styles";
import { Typography } from "@frontend/design-system-react/typography";
import { AngleDownIcon } from "@frontend/design-system-react/icons";
import { BridgeOriginTokenSelectorModal } from "../bridge-origin-token-selector-modal/bridge-origin-token-selector-modal";

export function BridgeOriginTokenSelector(): JSX.Element {
    const [openBridgeOriginTokenSelectorModal, setOpenBridgeOriginTokenSelectorModal] = useState(false);
    const { data: tokenCode } = useGetSourceToken(BridgeSource.ORIGIN, { select: (token) => token.currency });

    return (
        <>
            {tokenCode && (
                <BridgeOriginTokenSelectorButton variant="text" size="sm" onClick={() => setOpenBridgeOriginTokenSelectorModal(true)}>
                    <Typography variant="body2Regular">{tokenCode}</Typography>
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
