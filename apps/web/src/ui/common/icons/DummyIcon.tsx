import { SvgIcon, SvgIconProps } from "@peersyst/react-components";
import clsx from "clsx";

export default function DummyIcon({ className, ...rest }: Omit<SvgIconProps, "children">): JSX.Element {
    return <SvgIcon {...rest} data-testid="DummyIcon" className={clsx(undefined, "Icon", className)} fill="none"></SvgIcon>;
}
