import { ComponentType, HTMLAttributes } from "react";

export interface FooterLinkProps {
    href: string;
    Icon?: ComponentType<HTMLAttributes<any>>;
    label: string;
}
