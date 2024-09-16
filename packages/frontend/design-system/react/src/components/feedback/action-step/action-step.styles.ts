import styled, { css } from "styled-components";
import { Col, Row } from "@peersyst/react-components";
import { ActionStepStatus, ActionStepSubtitleProps } from "./action-step.types";

export const ActionStepRoot = styled(Col).attrs({ gap: "0.5rem" })`
    width: 100%;

    &.idle {
        filter: grayscale(100%) brightness(2);
        opacity: 0.24;
    }
`;

export const ActionStepTitle = styled.span(
    ({ theme }) => css`
        flex: 1;
        overflow: hidden;
        ${theme.typography.body1Regular.style}
    `,
);

export const ActionStepSubtitleWrapper = styled(Row).attrs({ gap: "0.625rem" })<ActionStepSubtitleProps>(({ theme, status }) => {
    const subtitleColors: Record<ActionStepStatus, string> = {
        idle: theme.palette.grey[400],
        waiting: theme.palette.grey[400],
        loading: theme.palette.grey[400],
        success: theme.palette.status.success,
        error: theme.palette.status.error,
    };

    return css`
        * {
            color: ${subtitleColors[status]};
        }
    `;
});

export const ActionStepSubtitle = styled.span(
    ({ theme }) => css`
        flex: 1;
        overflow: hidden;
        ${theme.typography.body1Regular.style};
    `,
);
