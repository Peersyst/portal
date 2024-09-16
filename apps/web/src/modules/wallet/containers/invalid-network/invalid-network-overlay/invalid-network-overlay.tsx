import { useSwitchToChain } from "@frontend/bridge/ui/queries";
import { useBridgeChainsState, useBridgeWalletsState } from "@frontend/bridge/ui/state";
import { useMemo } from "react";
import { BridgeSource } from "xchain-sdk";
import { InvalidNetworkProps } from "../invalid-network.types";
import { INVALID_NETWORKS } from "../invalid-networks";
import { Modal } from "@frontend/design-system-react/modal";

//TODO: Delete on double metamask refactor
export function InvalidNetworkOverlay(): JSX.Element {
    const { originWallet, destinationWallet } = useBridgeWalletsState();
    const { originChain, destinationChain } = useBridgeChainsState();

    const { mutate: switchOriginNetwork, isPending: switchingOriginNetwork } = useSwitchToChain(BridgeSource.ORIGIN);
    const { mutate: switchDestinationNetwork, isPending: switchingDestinationNetwork } = useSwitchToChain(BridgeSource.DESTINATION);

    const isOriginNetworkValid = originWallet.connection === "connected" ? originWallet.isChainValid : true;
    const isDestinationNetworkValid = destinationWallet.connection === "connected" ? destinationWallet.isChainValid : true;

    const invalidNetworkProps = (
        !isOriginNetworkValid
            ? {
                  switchToNetwork: switchOriginNetwork,
                  switchingNetwork: switchingOriginNetwork,
                  chain: originChain,
                  wallet: originWallet,
              }
            : !isDestinationNetworkValid
              ? {
                    switchToNetwork: switchDestinationNetwork,
                    switchingNetwork: switchingDestinationNetwork,
                    chain: destinationChain,
                    wallet: destinationWallet,
                }
              : undefined
    ) as InvalidNetworkProps | undefined;

    const open = !isOriginNetworkValid || !isDestinationNetworkValid;

    const InvalidNetwork = useMemo(() => {
        if (invalidNetworkProps?.wallet) {
            const InvalidNetwork = INVALID_NETWORKS[invalidNetworkProps.wallet.providerId];
            // eslint-disable-next-line no-console
            if (!InvalidNetwork) console.warn(`Invalid network has not been defined for ${invalidNetworkProps.wallet.providerId}`);
            return InvalidNetwork;
        } else {
            return undefined;
        }
    }, [invalidNetworkProps?.wallet]);

    return (
        <Modal open={open} closable={false} renderAtRoot>
            {InvalidNetwork && <InvalidNetwork {...invalidNetworkProps!} />}
        </Modal>
    );
}
