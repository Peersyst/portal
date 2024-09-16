import { RowProps, TypographyProps } from "@peersyst/react-components";

export interface BadgeProps extends Omit<RowProps, "children">, Partial<Pick<TypographyProps, "fontWeight" | "variant">> {
    label: string;
}
