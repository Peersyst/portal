import { BridgeSource } from "xchain-sdk";
import { BridgeTransferSummaryProps } from "./bridge-transfer-summary.types";
import { useTranslate } from "@frontend/locale/react";
import { useTheme } from "@frontend/design-system-react/theme";
import { useGetSourceToken } from "@frontend/bridge/ui/queries";
import Amount from "@shared/amount";
import { Col } from "@frontend/design-system-react/col";
import { Label } from "@frontend/design-system-react/label";
import { AmountDisplay } from "@frontend/design-system-react/amount-display";

export function BridgeTransferSummary({ amount }: BridgeTransferSummaryProps): JSX.Element {
    const translate = useTranslate();
    const { spacing } = useTheme();

    const { data: originToken } = useGetSourceToken(BridgeSource.ORIGIN);
    const { data: destinationToken } = useGetSourceToken(BridgeSource.DESTINATION);

    const sendAmount = originToken ? Amount.fromDec(amount, originToken.decimals, originToken.currency) : undefined;
    const receiveAmount = destinationToken ? Amount.fromDec(amount, destinationToken.decimals, destinationToken.currency) : undefined;

    return (
        <Col gap={spacing[4]}>
            {sendAmount && (
                <Label label={translate("send")}>
                    <AmountDisplay amount={sendAmount} />
                </Label>
            )}
            {receiveAmount && (
                <Label label={translate("receive")}>
                    <AmountDisplay amount={receiveAmount} />
                </Label>
            )}
        </Col>
    );
}
