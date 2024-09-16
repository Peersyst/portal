import { ChainBlockchainAddressProps } from "@frontend/design-system-react/chain-blockchain-address";
import { BridgeSource } from "xchain-sdk";

export type BridgeBlockchainAddressProps = Omit<ChainBlockchainAddressProps, "chain" | "url"> & {
    source: BridgeSource;
};
