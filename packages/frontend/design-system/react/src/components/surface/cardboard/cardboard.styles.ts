import styled, { css } from "styled-components";
import { Paper } from "../paper";

export const CardboardRoot = styled(Paper)(
    ({ theme }) => css`
        background: ${theme.palette.grey[800]};
        border-radius: ${theme.borderRadius};
    `,
);
