import { CSSProperties, ReactNode } from "react";

export type ListItemProps = {
    selectable?: boolean;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
} & ({ onClick: () => void } | { href: string });
