import { useTheme } from "@frontend/design-system-react/theme";
import { useTranslate } from "@frontend/locale/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BridgeSource, BridgeTransferResult } from "xchain-sdk";
import { BridgeRoutes } from "../bridge.router";
import Amount from "@shared/amount";
import { Col } from "@frontend/design-system-react/col";
import { Typography } from "@frontend/design-system-react/typography";
import { Label } from "@frontend/design-system-react/label";
import { BridgeBlockchainAddress } from "../containers/bridge-blockchain-address/bridge-blockchain-address";
import { BridgeAddress } from "../containers/bridge-address/bridge-address";
import { AmountDisplay } from "@frontend/design-system-react/amount-display";
import { Divider } from "@frontend/design-system-react/divider";
import { Button } from "@frontend/design-system-react/button";

const SuccessBridgePage = (): JSX.Element => {
    const translate = useTranslate();
    const navigate = useNavigate();
    const { state: locationState } = useLocation();
    const { spacing } = useTheme();
    // TODO: Define
    const destinationToken = undefined as any;

    if (!locationState.result) navigate(BridgeRoutes.BRIDGE, { replace: true });

    const transferResult = locationState.result as BridgeTransferResult;

    const amount = destinationToken
        ? Amount.fromDec(transferResult.amount, destinationToken.decimals, destinationToken.currency)
        : undefined;

    return (
        <Col gap={spacing[6]} css={{ padding: spacing[8] }}>
            <Typography variant="h4Bold" textAlign="center" fontWeight={700}>
                {translate("yourTransactionHasBeenSent")}
            </Typography>
            <Col gap={spacing[8]}>
                {transferResult.isCreateAccount && (
                    <Label label={translate("originTransactionHash")}>
                        <BridgeBlockchainAddress
                            source={BridgeSource.ORIGIN}
                            address={transferResult.createAccountCommit.hash}
                            action="link"
                            type="transaction"
                            variant="body1Regular"
                        />
                    </Label>
                )}
                {!transferResult.isCreateAccount && (
                    <>
                        <Label label={translate("originTransactionHash")}>
                            <BridgeBlockchainAddress
                                source={BridgeSource.ORIGIN}
                                address={transferResult.commit.hash}
                                action="link"
                                type="transaction"
                                variant="body1Regular"
                            />
                        </Label>
                        <Label label={translate("destinationTransactionHash")}>
                            <BridgeBlockchainAddress
                                source={BridgeSource.DESTINATION}
                                address={transferResult.createClaim.hash}
                                action="link"
                                type="transaction"
                                variant="body1Regular"
                            />
                        </Label>
                    </>
                )}
                <Label label={translate("fromAddress")}>
                    <BridgeAddress source={BridgeSource.ORIGIN} address={transferResult.originAddress} />
                </Label>
                <Label label={translate("toAddress")}>
                    <BridgeAddress source={BridgeSource.DESTINATION} address={transferResult.destinationAddress} />
                </Label>
                {amount && (
                    <Label label={translate("receive")}>
                        <AmountDisplay amount={amount} />
                    </Label>
                )}
                <Divider color="grey.600" />
                <Link to={BridgeRoutes.BRIDGE}>
                    <Button fullWidth>{translate("done")}</Button>
                </Link>
            </Col>
        </Col>
    );
};

export default SuccessBridgePage;
