import { Row } from "@frontend/design-system-react/row";
import styled, { css } from "styled-components";

export const BridgeSourcesRoot = styled(Row)(
    ({ theme }) => css`
        .BridgeSource {
            width: 33%;
        }

        .SwapButton {
            margin-top: 2.5rem;
        }

        ${theme.breakpoints.down("mobile")} {
            flex-direction: column;
            row-gap: 1rem;

            .BridgeSource {
                width: 100%;
            }

            .SwapButton {
                margin-top: 0;
                transform: rotate(90deg);
            }
        }
    `,
);
