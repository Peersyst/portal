import { Col } from "@frontend/design-system-react/col";
import styled, { css } from "styled-components";

export const MainLayoutRoot = styled(Col)(
    ({ theme }) => css`
        max-width: 50rem;
        height: fit-content;
        width: 100%;
        border-radius: ${theme.borderRadius};
        background: ${theme.palette.grey[900]};
    `,
);
