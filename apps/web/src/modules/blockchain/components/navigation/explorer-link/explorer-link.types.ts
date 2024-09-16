import { LinkProps } from "react-router-dom";

export interface ExplorerLinkProps extends Omit<LinkProps, "to"> {
    url: string;
}
