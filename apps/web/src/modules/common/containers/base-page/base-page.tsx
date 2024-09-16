import { Footer } from "../footer/footer";
import { BasePageRoot, BasePageWrapper, BottomBackground, MobileBottomBackground, TopBackground } from "./base-page.styles";
import { BasePageProps } from "./base-page.types";

export const BasePage = ({ children, ...rest }: BasePageProps): JSX.Element => (
    <BasePageRoot {...rest}>
        <BasePageWrapper>{children}</BasePageWrapper>
        <TopBackground />
        <BottomBackground />
        <MobileBottomBackground />
        <Footer />
    </BasePageRoot>
);
