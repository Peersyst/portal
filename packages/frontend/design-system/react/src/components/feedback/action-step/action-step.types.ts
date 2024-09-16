import { CSSProperties, JSXElementConstructor, ReactNode } from "react";

export type ActionStepStatus = "idle" | "waiting" | "loading" | "success" | "error";

export type ActionStepSubtitle = Partial<Record<ActionStepStatus, ReactNode>> & { default?: ReactNode };

export interface ActionStepProps {
    title: string;
    subtitle: ActionStepSubtitle;
    Icon: JSXElementConstructor<{ className?: string; style?: CSSProperties }>;
    waiting: boolean;
    loading: boolean;
    success: boolean;
    error?: string;
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export interface ActionStepSubtitleProps {
    status: ActionStepStatus;
}
