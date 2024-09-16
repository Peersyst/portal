import styled from "styled-components";
import { ChainBlockchainAddress } from "@frontend/design-system-react/chain-blockchain-address";

export const ExplorerBlockchainAddress = styled(ChainBlockchainAddress)(() => ({
    ".Hash": {
        width: "fit-content",
    },
}));
