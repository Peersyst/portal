import styled, { css } from "styled-components";
import { ChevronRightIcon } from "../../icons";

export const ChainSequenceIcon = styled(ChevronRightIcon)(
    ({ theme }) => css`
        color: ${theme.palette.grey[500]};
        font-size: 1.25rem;
    `,
);
