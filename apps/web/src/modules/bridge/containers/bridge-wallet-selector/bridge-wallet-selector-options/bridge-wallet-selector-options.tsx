import { useTranslate } from "@frontend/locale/react";
import { BridgeWalletSelectorOptionsProps } from "./bridge-wallet-selector-options.types";
import { ControllerFactory } from "../../../../../core/domain/factories/controller.factory";
import { More, MoreAction } from "@frontend/design-system-react/more";

export function BridgeWalletSelectorOptions({ side }: BridgeWalletSelectorOptionsProps): JSX.Element {
    const translate = useTranslate();

    const handleDisconnect = () => {
        ControllerFactory.bridgeWalletsController.disconnectWallet(side);
    };

    const actions: MoreAction[] = [
        {
            label: translate("disconnect"),
            onClick: handleDisconnect,
        },
    ];

    return <More actions={actions} />;
}
