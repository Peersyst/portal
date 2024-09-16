import { Image } from "@peersyst/react-components";
import styled, { css } from "styled-components";
import { NetworkBadge } from "../network-badge/network-badge";

export const ChainAvatarImg = styled(Image)(
    () => css`
        border-radius: 999px;
        width: 2rem;
        aspect-ratio: 1;
    `,
);

export const ChainNetworkBadge = styled(NetworkBadge)(
    ({ theme }) => css`
        position: absolute;
        top: -30%;
        right: 50%;
        left: 50%;
        z-index: 1;
        .Tag {
            color: ${theme.palette.text};
        }
    `,
);
