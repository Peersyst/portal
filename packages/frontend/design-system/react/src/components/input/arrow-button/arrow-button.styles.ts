import { IconButton } from "@peersyst/react-components";
import styled, { css } from "styled-components";
import { emphasize } from "@peersyst/react-utils";

export const ArrowButtonRoot = styled(IconButton)(({ theme }) => {
    const bgColor = theme.palette.grey[700];

    return css`
        background-color: ${bgColor};
        color: ${theme.palette.text};
        border-radius: ${theme.borderRadius};

        display: flex;
        justify-content: center;
        align-items: center;

        width: 3rem;
        height: 3rem;
        font-size: 1.5rem;

        transition: background-color 200ms linear;

        &:hover {
            opacity: 1;
            background-color: ${emphasize(bgColor, 0.05)};
        }
        &:active {
            opacity: 1;
            background-color: ${emphasize(bgColor, 0.1)};
        }

        ${theme.breakpoints.down("mini")} {
            width: 2rem;
            height: 2rem;
            font-size: 1.25rem;
        }
    `;
});
