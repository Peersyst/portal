import { ModalProvider } from "@peersyst/react-components";
import { BrowserRouter, useRoutes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function Routes() {
    return useRoutes([
        {
            path: "*",
            element: <div>Peersyst web base project</div>,
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
