import styled, { css } from "styled-components";
import { GroupDetail } from "@frontend/design-system-react/group-detail";
import { HelpIcon } from "@frontend/design-system-react/icons";

export const BridgeTransferGroupDetail = styled(GroupDetail)(
    ({ theme }) => css`
        ${theme.breakpoints.down("mobile")} {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            text-align: left;
            row-gap: 0.25rem;

            .Label {
                align-self: flex-start;
            }
        }
    `,
);

export const BridgeTransferFeeTooltipIcon = styled(HelpIcon)(
    ({ theme }) => css`
        font-size: 1rem;
        color: ${theme.palette.grey[400]};
    `,
);
