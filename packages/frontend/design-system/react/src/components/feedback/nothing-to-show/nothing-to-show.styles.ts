import styled, { css } from "styled-components";
import { NotFoundIcon } from "../../icons";

export const SearchNotFoundIcon = styled(NotFoundIcon)(
    ({ theme }) => css`
        font-size: 4.5rem;
        color: ${theme.palette.accent};
    `,
);
