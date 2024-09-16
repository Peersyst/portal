import { BridgeTransferStage, BridgeTransferType } from "xchain-sdk";
import { BridgeTransferStepsProps } from "./bridge-transfer-steps.types";
import { useTheme } from "@frontend/design-system-react/theme";
import { Col } from "@frontend/design-system-react/col";
import BridgeTransactionStep from "../bridge-transaction-step/bridge-transaction-step";
import { Divider } from "@frontend/design-system-react/divider";
import { BridgeTransferSummary } from "../bridge-transfer-summary/bridge-transfer-summary";
import { BridgeTransferDetails } from "../bridge-transfer-details/bridge-transfer-details";

export function BridgeTransferSteps({ data }: BridgeTransferStepsProps): JSX.Element {
    const { spacing } = useTheme();

    return (
        <Col gap={spacing[4]}>
            <Col gap={spacing[4]}>
                {data.transferType === BridgeTransferType.CLAIM_COMMIT && (
                    <>
                        {data.isTrustClaimRequired && (
                            <>
                                <BridgeTransactionStep stage={BridgeTransferStage.TRUST_CLAIM} isFirst />
                                <Divider />
                            </>
                        )}
                        {data.isTrustCommitRequired && (
                            <>
                                <BridgeTransactionStep stage={BridgeTransferStage.TRUST_COMMIT} isFirst={!data.isTrustClaimRequired} />
                                <Divider />
                            </>
                        )}
                        <BridgeTransactionStep
                            stage={BridgeTransferStage.CREATE_CLAIM}
                            isFirst={!data.isTrustClaimRequired && !data.isTrustCommitRequired}
                        />
                        <Divider />
                        <BridgeTransactionStep stage={BridgeTransferStage.COMMIT} />
                    </>
                )}
                {data.transferType === BridgeTransferType.CREATE_ACCOUNT && (
                    <BridgeTransactionStep stage={BridgeTransferStage.CREATE_ACCOUNT_COMMIT} isFirst />
                )}
            </Col>
            <Divider />
            <BridgeTransferSummary amount={data.amount} />
            <Divider />
            <BridgeTransferDetails />
        </Col>
    );
}
