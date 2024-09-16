import styled from "styled-components";
import { css } from "styled-components";

export const WalletConnectionContent = styled.div(
    ({ theme }) => css`
        background: ${theme.palette.grey[700]};
        width: 100%;
        border-radius: ${theme.borderRadius};
        overflow: hidden;
    `,
);
