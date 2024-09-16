import { Row, Typography, useTheme } from "@peersyst/react-components";
import clsx from "clsx";
import { AmountDisplayProps } from "./amount-display.types";
import { useFormatAmount } from "@frontend/misc/ui/amount/react";

export function AmountDisplay({ amount, hideCurrency = false, className, ...rest }: AmountDisplayProps): JSX.Element {
    const formatAmount = useFormatAmount();
    const { spacing } = useTheme();

    const formattedAmount = formatAmount(amount, { toParts: true });

    return (
        <Row gap={spacing[2]} className={clsx("AmountDisplay", className)} {...rest}>
            <Typography className="AmountDisplayAmount" variant="body1Regular">
                {formattedAmount.amount}
            </Typography>
            {!hideCurrency && (
                <Typography className="AmountDisplayCurrency" variant="body1Regular" color="grey.400">
                    {formattedAmount.currency}
                </Typography>
            )}
        </Row>
    );
}
