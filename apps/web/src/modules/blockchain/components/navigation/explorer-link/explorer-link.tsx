import clsx from "clsx";
import { ExplorerLinkRoot } from "./explorer-link.styles";
import { ExplorerLinkProps } from "./explorer-link.types";
import { useTranslate } from "@frontend/locale/react";

export const ExplorerLink = ({ url, className, ...props }: ExplorerLinkProps): JSX.Element => {
    const translate = useTranslate();

    return (
        <ExplorerLinkRoot href={url} target="_blank" rel="noreferrer" className={clsx("ExplorerLink", className)} {...props}>
            {translate("seeInExplorer")}
        </ExplorerLinkRoot>
    );
};
