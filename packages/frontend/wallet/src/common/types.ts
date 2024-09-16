import { ChainType } from "@shared/modules/chain";
import { WalletProviderId } from "../providers/types";

export type WalletInfo = {
    address: string;
    type: ChainType;
    providerId: WalletProviderId;
    // TODO: Delete on double metamask refactor
    isChainValid: boolean;
};

export type PersistedWallet = Pick<WalletInfo, "address" | "type" | "providerId">;
