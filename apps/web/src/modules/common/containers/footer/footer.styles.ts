import { Row } from "@frontend/design-system-react/row";
import styled, { css } from "styled-components";

export const FooterRoot = styled.footer(
    ({ theme }) => css`
        margin-top: auto;
        padding: var(--base-page-padding);
        backdrop-filter: blur(8px);
        border-top: 1px solid ${theme.palette.grey[600]};
    `,
);

export const ExternalLinksWrapper = styled(Row)(
    ({ theme }) => css`
        ${theme.breakpoints.down("mobile")} {
            gap: 0.5rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    `,
);
