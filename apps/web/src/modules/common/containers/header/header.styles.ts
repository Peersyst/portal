import styled, { css } from "styled-components";
import { Toolbar } from "@frontend/design-system-react/toolbar";
import { Col } from "@frontend/design-system-react/col";

export const HeaderRoot = styled(Toolbar)(
    ({ theme }) => css`
        > * {
            flex: 1;
        }

        width: 100%;
        position: relative;
        // Override global styles height
        height: fit-content !important;
        padding: var(--base-page-padding) 0 0;
        align-items: flex-start;
        justify-content: space-between;

        ${theme.breakpoints.down("md")} {
            align-items: center;
            padding-bottom: 0;
            flex-direction: column;
            row-gap: 1rem;
        }
    `,
);

export const HeaderContent = styled(Col).attrs({ alignItems: "center", gap: "0.5rem" })(
    ({ theme }) => css`
        padding: 0.5rem 0;
        ${theme.breakpoints.down("md")} {
            padding: 0;
        }
    `,
);
