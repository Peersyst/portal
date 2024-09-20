import { BridgeDestinationAmountFieldProps } from "./bridge-destination-amount-field.types";
import { AmountField } from "@frontend/design-system-react/amount-field";
import { Typography } from "@frontend/design-system-react/typography";

export function BridgeDestinationAmountField({ disabled = false, ...rest }: BridgeDestinationAmountFieldProps): JSX.Element {
    // TODO: Define
    const destinationToken = undefined as any;

    return (
        <AmountField
            suffix={
                !!destinationToken && (
                    <Typography variant="body2Regular" color="grey.200">
                        {!!destinationToken?.symbol && destinationToken.symbol}
                    </Typography>
                )
            }
            readonly
            disabled={disabled || !destinationToken}
            maxDecimals={destinationToken?.decimals}
            {...rest}
        />
    );
}
