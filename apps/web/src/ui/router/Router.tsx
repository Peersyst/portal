import { ModalProvider } from "@peersyst/react-components";
import { BrowserRouter, useRoutes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function Routes() {
    return useRoutes([
        {
            path: "*",
            element: <p>Peersyst web base project</p>,
        },
    ]);
}

export default function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <ModalProvider>
                <ScrollToTop />
                <Routes />
            </ModalProvider>
        </BrowserRouter>
    );
}
