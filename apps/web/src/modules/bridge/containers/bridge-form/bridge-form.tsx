import { useAreWalletsConnected, useIsBridgeConfigSet } from "@frontend/bridge/ui/hooks";
import { useDestinationCanReceive, useTransfer } from "@frontend/bridge/ui/queries";
import { useTheme } from "@frontend/design-system-react/theme";
import { useTranslate } from "@frontend/locale/react";
import { useEffect, useRef, useState } from "react";
import { BridgeTransferStartData } from "xchain-sdk";
import { useTransferError } from "./hooks/use-transfer-error";
import { keepPreviousData } from "@tanstack/react-query";
import { ControllerFactory } from "../../../../core/domain/factories/controller.factory";
import { BridgeFormData, BridgeFormFields } from "./bridge-form.types";
import { BridgeFormRoot } from "./bridge-form.styles";
import { Col } from "@frontend/design-system-react/col";
import { Button } from "@frontend/design-system-react/button";
import { AlertCallout } from "@frontend/design-system-react/alert-callout";
import { BridgeSources } from "../bridge-sources/bridge-sources";

export function BridgeForm(): JSX.Element {
    const translate = useTranslate();
    const translateError = useTranslate("error");
    const { spacing } = useTheme();

    const areWalletsConnected = useAreWalletsConnected();
    const isBridgeConfigSet = useIsBridgeConfigSet();
    const { data: destinationCanReceive, isFetching: destinationCanReceiveIsLoading } = useDestinationCanReceive({
        placeholderData: keepPreviousData,
    });

    const [transferError, setTransferError] = useTransferError();
    const { mutate: transfer, isPending: transferring } = useTransfer({ onError: setTransferError });

    const startData = useRef<BridgeTransferStartData | undefined>(undefined);
    const [openBridgeTransferModal, setOpenBridgeTransferModal] = useState(false);

    useEffect(() => {
        if (transferring) {
            const removeOnStart = ControllerFactory.bridgeTransferController.on("start", (data) => {
                startData.current = data;
                setOpenBridgeTransferModal(true);
            });
            return () => {
                removeOnStart();
            };
        }
    }, [transferring]);

    const handleFormSubmit = async ({ amount }: BridgeFormData) => {
        transfer(amount);
    };

    return (
        <>
            <BridgeFormRoot onSubmit={handleFormSubmit}>
                <Col gap={spacing[8]}>
                    <Col gap={spacing[7]}>
                        <Col gap={spacing[5]}>
                            <BridgeSources />
                            {areWalletsConnected && <BridgeTransferInput name={BridgeFormFields.AMOUNT} required />}
                        </Col>
                        {destinationCanReceive === false && <AlertCallout type="error" content={translateError("accountCannotReceive")} />}
                        {!!transferError && <AlertCallout type="error" content={transferError} />}
                        {areWalletsConnected && isBridgeConfigSet && <BridgeTransferDetails />}
                    </Col>
                    <Button
                        type="submit"
                        disabled={!areWalletsConnected || !isBridgeConfigSet || destinationCanReceiveIsLoading || !destinationCanReceive}
                        loading={transferring}
                    >
                        {translate("transfer")}
                    </Button>
                </Col>
            </BridgeFormRoot>
            {startData.current && (
                <BridgeTransferModal
                    open={openBridgeTransferModal}
                    onClose={() => setOpenBridgeTransferModal(false)}
                    onExited={() => (startData.current = undefined)}
                    data={startData.current}
                />
            )}
        </>
    );
}
