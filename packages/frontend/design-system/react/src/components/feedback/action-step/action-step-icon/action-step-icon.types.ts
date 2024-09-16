import { CSSProperties, JSXElementConstructor } from "react";
import { ActionStepStatus } from "../action-step.types";

export interface ActionStepIconProps {
    status: ActionStepStatus;
    style?: CSSProperties;
    className?: string;
    Icon: JSXElementConstructor<{ className?: string; style?: CSSProperties }>;
}
