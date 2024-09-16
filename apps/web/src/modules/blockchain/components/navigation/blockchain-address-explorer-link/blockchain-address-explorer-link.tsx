import { ChainType } from "xchain-sdk";
import { useBuildExplorerUrl } from "@frontend/design-system-react/blockchain-address";
import { BlockchainAddressExplorerLinkProps } from "./blockchain-address-explorer-link.types";
import { Row } from "@frontend/design-system-react/row";
import { ChainBlockchainAddress } from "@frontend/design-system-react/chain-blockchain-address";
import { ExplorerLink } from "../explorer-link/explorer-link";
import { useTheme } from "@frontend/design-system-react/theme";

const BlockchainAddressExplorerLink = ({ chain, address, type, ...props }: BlockchainAddressExplorerLinkProps): JSX.Element => {
    const explorerUrl = useBuildExplorerUrl(chain.explorerUrl, chain.type as ChainType, address, type);

    const { spacing } = useTheme();

    return (
        <Row wrap wrapGap={spacing[2]} alignItems="center" justifyContent="space-between" css={{ width: "100%" }}>
            <ChainBlockchainAddress length={16} address={address} chain={chain} type={type} {...props} />
            <ExplorerLink url={explorerUrl} css={{ textAlign: "end" }} />
        </Row>
    );
};

export default BlockchainAddressExplorerLink;
