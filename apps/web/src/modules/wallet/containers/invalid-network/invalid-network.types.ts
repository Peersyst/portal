import { WalletInfo } from "@frontend/wallet";
import { ChainDto } from "@shared/api";

export type InvalidNetworkProps = {
    switchToNetwork: () => void;
    switchingNetwork: boolean;
    chain: ChainDto;
    wallet: WalletInfo;
};
