import { BridgeSource } from "xchain-sdk";
import { BridgeDestinationAmountFieldProps } from "./bridge-destination-amount-field.types";
import { useBridgeState } from "@frontend/bridge/ui/state";
import { useGetSourceToken } from "@frontend/bridge/ui/queries";
import { AmountField } from "@frontend/design-system-react/amount-field";
import { Typography } from "@frontend/design-system-react/typography";

export function BridgeDestinationAmountField({ disabled = false, ...rest }: BridgeDestinationAmountFieldProps): JSX.Element {
    const { destinationXChainBridgeChain: destinationChainConfig } = useBridgeState() || {};
    const { data: token } = useGetSourceToken(BridgeSource.DESTINATION);

    return (
        <AmountField
            suffix={
                !!destinationChainConfig && (
                    <Typography variant="body2Regular" color="grey.200">
                        {token?.currency && token.currency}
                    </Typography>
                )
            }
            readonly
            disabled={disabled || !destinationChainConfig}
            maxDecimals={token?.decimals}
            {...rest}
        />
    );
}
