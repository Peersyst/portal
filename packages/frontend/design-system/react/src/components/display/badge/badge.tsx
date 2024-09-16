import { Typography } from "@peersyst/react-components";
import clsx from "clsx";
import { BadgeRoot } from "./badge.styles";
import { BadgeProps } from "./badge.types";

export const Badge = ({ label, variant = "caption3Regular", fontWeight = 700, className, ...props }: BadgeProps): JSX.Element => {
    return (
        <BadgeRoot justifyContent="center" alignItems="center" className={clsx("Badge", className)} {...props}>
            <Typography className="BadgeLabel" variant={variant} fontWeight={fontWeight}>
                {label}
            </Typography>
        </BadgeRoot>
    );
};
