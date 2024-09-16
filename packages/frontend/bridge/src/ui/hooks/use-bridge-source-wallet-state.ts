import { BridgeSource } from "xchain-sdk";
import { BridgeWallet } from "../../common/types";
import { useBridgeWalletsState } from "../state/use-bridge-wallets-state";

/**
 * Gets the bridge wallet state for the given bridge source.
 * @param source The bridge source.
 * @param select The selector for the bridge wallet state.
 * @returns The bridge wallet state for the given bridge source.
 */
export function useBridgeSourceWalletState<
    S extends (wallet: BridgeWallet) => any = (wallet: BridgeWallet) => BridgeWallet,
    R = S extends (wallet: BridgeWallet) => infer T ? T : any,
>(source: BridgeSource, select: S = ((wallet) => wallet) as S): R {
    const { originWallet, destinationWallet } = useBridgeWalletsState();

    return select(source === BridgeSource.ORIGIN ? originWallet : destinationWallet);
}
