import { CSSProperties, JSXElementConstructor } from "react";
import { ActionStepIconProps } from "./action-step-icon.types";
import { ActionStepStatus } from "../action-step.types";
import { LoadingArrowIcon } from "../../../icons/loading-arrow.icon";
import { LightSuccessIcon } from "../../../icons/light-success.icon";
import { LightCrossIcon } from "../../../icons/light-cross.icon";

export const ActionStepIcon = ({ status, Icon: WaitingIcon, ...rest }: ActionStepIconProps): JSX.Element => {
    const icons: Record<ActionStepStatus, JSXElementConstructor<{ className?: string; style?: CSSProperties }>> = {
        idle: WaitingIcon,
        waiting: WaitingIcon,
        loading: LoadingArrowIcon,
        success: LightSuccessIcon,
        error: LightCrossIcon,
    };

    const Icon = icons[status];

    return <Icon {...rest} />;
};
