import styled, { css } from "styled-components";
import { Label } from "../label";

export const PageLabelRoot = styled(Label)(
    ({ theme }) => css`
        .Label {
            color: ${theme.palette.grey[200]};
        }
    `,
);
