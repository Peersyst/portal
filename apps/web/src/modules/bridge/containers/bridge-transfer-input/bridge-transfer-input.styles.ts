import { Row } from "@frontend/design-system-react/row";
import styled, { css } from "styled-components";

export const BridgeTransferInputRoot = styled(Row).attrs({ gap: "4rem" })(
    ({ theme }) => css`
        ${theme.breakpoints.down("mobile")} {
            flex-direction: column;
            row-gap: 1rem;
        }
    `,
);
