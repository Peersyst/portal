import { ModalProvider } from "@peersyst/react-components";
import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { config } from "common/config";
import { useDashboardRoutes } from "../dashboard/router/DashboardRouter";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "../common/components/navigation/Header/Header";
import Footer from "../common/components/navigation/Footer/Footer";
import { useLoad } from "../common/hooks/useLoad";

const Routes = () => {
    const dashboardRoutes = useDashboardRoutes();

    return useRoutes([...dashboardRoutes]);
};

const Router = (): JSX.Element => {
    const loading = useLoad();

    return (
        <BrowserRouter basename={config.publicUrl}>
            <ModalProvider>
                <ScrollToTop />
                <Suspense fallback={<div>Loading</div>}>
                    {loading ? (
                        <div>Loading</div>
                    ) : (
                        <>
                            <Header />
                            <Routes />
                            <Footer />
                        </>
                    )}
                </Suspense>
            </ModalProvider>
        </BrowserRouter>
    );
};

export default Router;
