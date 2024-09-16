import { NetworkType } from "@shared/modules/network";
import { BadgeProps } from "../badge";

export interface NetworkBadgeProps extends Omit<BadgeProps, "label"> {
    label: NetworkType;
}
