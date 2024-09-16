import { useTranslate } from "@frontend/locale/react";
import { useEffect, useState } from "react";
import { useFormatAmount } from "@frontend/misc/ui/amount/react";
import { useBridgeState, useBridgeWalletsState } from "@frontend/bridge/ui/state";
import { useGetSourceToken } from "@frontend/bridge/ui/queries";
import { BridgeSource } from "xchain-sdk";
import { useBridgeSourceChainState } from "@frontend/bridge/ui/hooks";
import { isDestinationCannotPaySignatureRewardError, isInsufficientCreateAccountAmountError } from "../utils/transfer-error";
import Amount from "@shared/amount";

/**
 * Hook that handles the transfer error state and translations.
 * @returns A tuple containing the error state and a function to set the error state.
 */
export function useTransferError(): [error: string | undefined, setError: (error: unknown) => void] {
    const translateError = useTranslate("error");
    const formatAmount = useFormatAmount();

    const [error, setError] = useState<string | undefined>(undefined);

    const { originXChainBridgeChain, destinationXChainBridgeChain } = useBridgeState() || {};
    const { data: originToken } = useGetSourceToken(BridgeSource.ORIGIN);
    const destinationChain = useBridgeSourceChainState(BridgeSource.DESTINATION);

    const bridge = useBridgeState();
    const wallets = useBridgeWalletsState();

    useEffect(() => {
        setError(undefined);
    }, [bridge, wallets]);

    const setTransferError = (error: unknown) => {
        if (isInsufficientCreateAccountAmountError(error)) {
            const minCreateAccountAmount =
                !!originXChainBridgeChain && !!originXChainBridgeChain?.minAccountCreate && !!originToken
                    ? Amount.fromInt(originXChainBridgeChain.minAccountCreate, originToken.decimals, originToken.currency)
                    : undefined;

            setError(
                translateError("insufficientCreateAccountAmount", {
                    minCreateAccountAmount: minCreateAccountAmount ? formatAmount(minCreateAccountAmount) : "-",
                }),
            );
        } else if (isDestinationCannotPaySignatureRewardError(error)) {
            const signatureRewardAmount =
                !!destinationXChainBridgeChain && !!destinationChain
                    ? new Amount(
                          destinationXChainBridgeChain.signatureReward,
                          destinationChain.nativeDecimals,
                          destinationChain.nativeToken,
                      )
                    : undefined;
            setError(
                translateError("destinationCannotPaySignatureReward", {
                    signatureReward: signatureRewardAmount ? formatAmount(signatureRewardAmount) : "-",
                }),
            );
        }
    };

    return [error, setTransferError];
}
