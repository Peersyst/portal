import { Row, Typography } from "@peersyst/react-components";
import { ChainProps } from "./chain.types";
import { useTheme } from "../../../themes/common/hooks";
import { ChainAvatar } from "../chain-avatar/chain-avatar";
import { normalizeChainName } from "@shared/modules/network";

export const Chain = ({ chain }: ChainProps): JSX.Element => {
    const { name, imageUrl = "" } = chain;

    const { spacing } = useTheme();

    return (
        <Row gap={spacing[3]} justifyContent="center" alignItems="center">
            <ChainAvatar name={name} imageUrl={imageUrl} />
            <Typography variant="body1Regular">{normalizeChainName(name)}</Typography>
        </Row>
    );
};
