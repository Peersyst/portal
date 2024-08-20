import { ModalProvider } from "@peersyst/react-components";
import { BrowserRouter, useRoutes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function Home(): JSX.Element {
    return <p>Welcome to Peersyst web base project</p>;
}

function Routes() {
    return useRoutes([
        {
            path: "*",
            element: <Home />,
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
