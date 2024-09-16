import styled from "styled-components";
import { css } from "styled-components";
import { ClockIcon as BaseClockIcon } from "../../icons";

export const ClockIcon = styled(BaseClockIcon)(
    ({ theme }) => css`
        color: ${theme.palette.purple[40]};
        font-size: 1.5rem;
    `,
);
