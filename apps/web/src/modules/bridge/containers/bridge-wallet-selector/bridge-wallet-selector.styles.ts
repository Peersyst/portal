import { WalletSelect } from "@frontend/design-system-react/wallet-select";
import styled from "styled-components";

export const BridgeWalletSelectorRoot = styled(WalletSelect)`
    .DisplayContent {
        max-width: unset;

        &.Placeholder {
            text-decoration: underline;
        }
    }

    .SelectDropdown {
        display: none;
    }

    &&& .SelectDisplay {
        padding-right: 0.35rem;

        .DisplayContent {
            margin-right: 0;
            width: 100%;
        }
    }
`;
