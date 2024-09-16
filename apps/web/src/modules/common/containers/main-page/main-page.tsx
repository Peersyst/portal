import { MainLayout } from "../../components/layout/main-layout/main-layout";
import { BasePageProps } from "../base-page/base-page.types";
import { Header } from "../header/header";
import { MainPageContent, MainPageRoot } from "./main-page.styles";

export const MainPage = ({ children, ...rest }: BasePageProps): JSX.Element => {
    return (
        <MainPageRoot {...rest}>
            <Header />
            <MainPageContent>
                <MainLayout>{children}</MainLayout>
            </MainPageContent>
        </MainPageRoot>
    );
};
