import { ModalProvider } from "@frontend/design-system-react/modal";
import { BrowserRouter, useRoutes } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";

function Home(): JSX.Element {
    return <div>Welcome to Peersyst web base project</div>;
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
