import { ChainDto } from "@shared/api";
import { BlockchainAddressProps } from "../blockchain-address/blockchain-address.types";

export interface ChainBlockchainAddressProps extends Omit<BlockchainAddressProps, "chainType" | "url"> {
    chain: ChainDto;
}
