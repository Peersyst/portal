import { alpha } from "@peersyst/react-utils";
import styled, { css } from "styled-components";

export const ListItemRoot = styled.div(
    ({ theme }) => css`
        display: flex;
        color: ${theme.palette.text};
        padding: 0.75rem;

        transition: color 200ms;

        &.Selectable {
            cursor: pointer;

            &:hover {
                color: ${theme.palette.accent};
            }
        }

        &:not(.Selectable) {
            color: ${alpha(theme.palette.text, 0.2)};
        }
    `,
);
