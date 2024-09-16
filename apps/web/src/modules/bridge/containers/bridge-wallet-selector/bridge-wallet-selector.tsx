import { useMemo } from "react";
import { BridgeWalletSelectorProps } from "./bridge-wallet-selector.types";
import { useTranslate } from "@frontend/locale/react";
import { useModal } from "@frontend/design-system-react/modal";
import { useBridgeChainsState, useBridgeWalletsState } from "@frontend/bridge/ui/state";
import { useConfig } from "@frontend/config/react";
import { Row } from "@frontend/design-system-react/row";
import { ImageSelectItem } from "@frontend/design-system-react/image-select-item";
import { Hash } from "@frontend/design-system-react/hash";
import { BridgeWalletSelectorOptions } from "./bridge-wallet-selector-options/bridge-wallet-selector-options";
import { WalletProviderDef, WalletProviderId } from "@frontend/wallet/providers";
import { BridgeWalletSelectorRoot } from "./bridge-wallet-selector.styles";
import { WalletConnectionModal } from "../../../wallet/containers/connection/wallet-connection-modal/wallet-connection-modal";

export function BridgeWalletSelector({
    side,
    placeholder: placeholderProp,
    disabled = false,
    ...rest
}: BridgeWalletSelectorProps): JSX.Element {
    const translate = useTranslate();
    const { showModal } = useModal();
    const allWalletProviders = useConfig("walletProviders");

    const placeholder = placeholderProp ?? translate("connect");

    const { originChain, destinationChain } = useBridgeChainsState();
    const chain = side === "origin" ? originChain : destinationChain;

    const walletProviders = useMemo(() => {
        if (!chain) return [];
        else return Object.values(allWalletProviders).filter((wallet) => wallet.chainType === chain.type);
    }, [side, chain]);

    const { originWallet, destinationWallet } = useBridgeWalletsState();
    const connectedWallet = side === "origin" ? originWallet : destinationWallet;

    const renderValue = () =>
        connectedWallet.connection === "connected" && (
            <Row flex={1} justifyContent="space-between" alignItems="center">
                <ImageSelectItem
                    src={allWalletProviders[connectedWallet.providerId].imageUrl}
                    label={<Hash variant="body1Regular" hash={connectedWallet.address} />}
                />
                <BridgeWalletSelectorOptions side={side} />
            </Row>
        );

    const handleChange = (wallet: WalletProviderDef) => {
        const providerId = wallet.providerId as WalletProviderId;
        showModal(WalletConnectionModal, {
            providerId,
            side,
        });
    };

    return (
        <BridgeWalletSelectorRoot
            renderValue={renderValue}
            onChange={handleChange}
            wallets={walletProviders}
            disabled={!chain || disabled}
            dropdownElement={<></>}
            placeholder={placeholder}
            {...rest}
        />
    );
}
