import styled, { css } from "styled-components";

export const ExplorerLinkRoot = styled.a(
    ({ theme }) => css`
        width: fit-content;
        color: ${theme.palette.accent};
        font-weight: 600;
    `,
);
