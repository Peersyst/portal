import { PropsWithChildren } from "react";
import { MainLayoutRoot } from "./main-layout.styles";

export const MainLayout = ({ children }: PropsWithChildren) => {
    return <MainLayoutRoot>{children}</MainLayoutRoot>;
};
