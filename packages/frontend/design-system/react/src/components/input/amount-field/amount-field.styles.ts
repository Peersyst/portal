import { Typography } from "@peersyst/react-components";
import styled from "styled-components";
import { css } from "styled-components";
import { MaxAmountTypographyProps } from "./amount-field.types";

export const MaxAmountTypography = styled(Typography)<MaxAmountTypographyProps>(
    ({ theme, isValidAmount }) => css`
        color: ${isValidAmount ? theme.palette.purple[30] : theme.palette.status.error};
        cursor: pointer;
        align-self: flex-end;
        font-weight: 600;

        &:hover {
            opacity: 0.8;
        }
    `,
);
