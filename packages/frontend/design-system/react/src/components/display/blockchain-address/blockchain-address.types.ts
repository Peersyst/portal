import { HashProps } from "@peersyst/react-components";
import { ChainType } from "xchain-sdk";

export type BlockchainAddressType = "account" | "transaction";

export interface BlockchainAddressProps extends Omit<HashProps, "numberOfLines" | "children" | "hash" | "hashToShareData"> {
    chainType: ChainType;
    type: BlockchainAddressType;
    address: string;
    addressToShareData?: HashProps["hashToShareData"];
}
