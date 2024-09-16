import styled, { css } from "styled-components";
import { Paper } from "../paper";
import { CardRootProps } from "./card.types";

export const CardRoot = styled(Paper)<CardRootProps>(
    ({ color }) => css`
        background-color: ${color};
    `,
);
