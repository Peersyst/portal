import { useTheme } from "@frontend/design-system-react/theme";
import { BridgeSource as BridgeSourceEnum } from "xchain-sdk";
import { BridgeSourcesRoot } from "./bridge-sources.styles";
import { BridgeSource } from "../bridge-source/bridge-source";
import { SwapButton } from "../swap-button/swap-button";

export function BridgeSources(): JSX.Element {
    const { spacing } = useTheme();

    return (
        <BridgeSourcesRoot flex={1} gap={spacing[4]} alignItems="center">
            <BridgeSource source={BridgeSourceEnum.ORIGIN} />
            <SwapButton />
            <BridgeSource source={BridgeSourceEnum.DESTINATION} />
        </BridgeSourcesRoot>
    );
}
