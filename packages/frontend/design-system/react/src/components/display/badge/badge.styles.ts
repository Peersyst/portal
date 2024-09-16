import { Row } from "@peersyst/react-components";
import styled, { css } from "styled-components";

export const BadgeRoot = styled(Row)(
    ({ theme }) => css`
        background-color: ${theme.palette.primary};
        padding: 0.1rem 0.25rem;
        width: fit-content;
        border-radius: ${theme.borderRadiusSm};
    `,
);
