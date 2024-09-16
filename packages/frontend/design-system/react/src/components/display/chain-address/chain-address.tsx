import { ChainType } from "xchain-sdk";
import { ChainAddressProps } from "./chain-address.types";
import { BlockchainAddress } from "../blockchain-address";
import { useTheme } from "../../../themes/common/hooks";
import { Row } from "../../layout/row";
import { Chip } from "../chip";

export const ChainAddress = ({ address, chain }: ChainAddressProps): JSX.Element => {
    const { spacing } = useTheme();

    return (
        <Row flex={1} gap={spacing[2]} alignItems="center" css={{ width: "100%" }}>
            <Chip label={chain.name} variant="success" />
            <BlockchainAddress
                url={chain.explorerUrl}
                chainType={chain.type as ChainType}
                variant="body1Regular"
                action="link"
                address={address}
                type="account"
                css={{ flex: 1 }}
            />
        </Row>
    );
};
