import { Hash } from "@peersyst/react-components";
import { useBuildExplorerUrl } from "./hooks/use-build-explorer-url";
import { BlockchainAddressProps } from "./blockchain-address.types";

export const BlockchainAddress = ({ chainType: chain, url, type, address, ...rest }: BlockchainAddressProps): JSX.Element => {
    const explorerUrl = useBuildExplorerUrl(url, chain, address, type);

    return <Hash hash={address} url={explorerUrl} {...rest} />;
};
