import { useTranslate } from "@frontend/locale/react";
import { HeaderContent, HeaderRoot } from "./header.styles";
import { Logo } from "../../components/display/logo/logo";
import { Typography } from "@frontend/design-system-react/typography";

export const Header = (): JSX.Element => {
    const translate = useTranslate();

    return (
        <HeaderRoot>
            <HeaderContent alignItems="center">
                <Logo />
                <Typography variant="h6Bold">{translate("headerText")}</Typography>
            </HeaderContent>
        </HeaderRoot>
    );
};
