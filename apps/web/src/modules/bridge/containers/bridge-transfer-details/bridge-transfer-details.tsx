import { useBridgeTransferFee } from "@frontend/bridge/ui/queries";
import { Col } from "@frontend/design-system-react/col";
import { useTheme } from "@frontend/design-system-react/theme";
import { useTranslate } from "@frontend/locale/react";
import { BridgeTransferGroupDetail } from "./bridge-transfer-details.styles";

export function BridgeTransferDetails(): JSX.Element {
    const translate = useTranslate();
    const { spacing } = useTheme();

    const { data: bridgeTransferFee, isLoading: isBridgeTransferFeeLoading } = useBridgeTransferFee();

    return (
        <Col gap={spacing[2]}>
            <BridgeTransferGroupDetail
                label={translate("bridgeTransferFee")}
                value={`~ ${bridgeTransferFee}`}
                isLoading={isBridgeTransferFeeLoading}
            />
            <BridgeTransferGroupDetail
                label={translate("estimatedTimeOfArrival")}
                value={`~ 30 ${translate("seconds")} - 3 ${translate("minutes")}`}
            />
        </Col>
    );
}
