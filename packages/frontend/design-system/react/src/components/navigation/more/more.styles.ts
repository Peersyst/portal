import styled, { css } from "styled-components";
import { IconButton } from "../../input/icon-button";

export const MoreButton = styled(IconButton)(
    ({ theme }) => css`
        font-size: 1;
        color: ${theme.palette.grey[400]};
    `,
);
