import { ChainType } from "xchain-sdk";
import { ChainBlockchainAddressProps } from "./chain-blockchain-address.types";
import { BlockchainAddress } from "../blockchain-address/blockchain-address";

export const ChainBlockchainAddress = ({ chain, ...props }: ChainBlockchainAddressProps): JSX.Element => {
    return <BlockchainAddress {...props} chainType={chain.type as ChainType} url={chain.explorerUrl} />;
};
