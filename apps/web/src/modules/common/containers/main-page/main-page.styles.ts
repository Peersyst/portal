import { Col } from "@frontend/design-system-react/col";
import { Row } from "@frontend/design-system-react/row";
import styled, { css } from "styled-components";

export const MainPageRoot = styled(Col)(
    ({ theme }) => css`
        row-gap: 1rem;

        ${theme.breakpoints.down("md")} {
            row-gap: 2rem;
        }
    `,
);

export const MainPageContent = styled(Row).attrs({
    flex: 1,
    justifyContent: "center",
    breakpoint: { width: "md", alignItems: "center", gap: "1rem" },
})`
    position: relative;
`;
