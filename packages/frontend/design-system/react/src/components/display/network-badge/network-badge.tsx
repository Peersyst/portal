import { Badge } from "../badge";
import { NetworkBadgeProps } from "./network-badge.types";

export const NetworkBadge = (props: NetworkBadgeProps): JSX.Element => {
    return <Badge {...props} />;
};
