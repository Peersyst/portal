import { Popover, Typography } from "@peersyst/react-components";
import { useState } from "react";
import { MoreProps } from "./more.types";
import { MoreButton } from "./more.styles";
import { MoreIcon } from "../../icons";
import { ListItem } from "../../input/list-item";

export function More({ actions }: MoreProps): JSX.Element {
    const [openPopover, setOpenPopover] = useState(false);

    return (
        <Popover
            showOn="click"
            visible={openPopover}
            onHide={() => setOpenPopover(false)}
            onShow={() => setOpenPopover(true)}
            arrow={false}
            position="bottom-end"
            offsetY={4}
            disablePortal={false}
        >
            <Popover.Content>
                <MoreButton
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpenPopover(true);
                    }}
                >
                    <MoreIcon />
                </MoreButton>
            </Popover.Content>
            <Popover.Popper style={{ padding: 0 }} onClick={(e) => e.stopPropagation()}>
                {actions.map(({ label, onClick }, index) => (
                    <ListItem onClick={onClick} key={`more-action-${index}`}>
                        <Typography variant="body2Regular">{label}</Typography>
                    </ListItem>
                ))}
            </Popover.Popper>
        </Popover>
    );
}
