import styled, { css } from "styled-components";
import { ListItem } from "../../../input/list-item";

export const TokenSelectorListItemRoot = styled(ListItem)(
    ({ theme }) => css`
        color: ${theme.palette.text};
        padding: ${theme.spacing[2]} 0;
        justify-content: space-between;
    `,
);

export const TokenSelectorListItemLogo = styled.img`
    border-radius: 999px;
    width: 1.75rem;
    height: 1.75rem;
`;
