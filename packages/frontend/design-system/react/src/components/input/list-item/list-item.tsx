import clsx from "clsx";
import { ListItemProps } from "./list-item.types";
import { ListItemRoot } from "./list-item.styles";

export function ListItem(props: ListItemProps): JSX.Element {
    const { className, style, children, selectable = true } = props;

    const [root, rootProps] =
        "onClick" in props
            ? ["span" as any, { role: "button", onClick: selectable ? props.onClick : undefined }]
            : ["a" as any, { href: props.href }];

    return (
        <ListItemRoot as={root} className={clsx(selectable && "Selectable", className)} style={style} {...rootProps}>
            {children}
        </ListItemRoot>
    );
}
