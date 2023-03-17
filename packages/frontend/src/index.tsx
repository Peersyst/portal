import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Providers from "ui/Providers";
import Router from "ui/router/Router";
import "data-access/api/OpenApiConfig";
import "ui/locale/i18n";
import "common/polyfills";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <StrictMode>
        <Providers>
            <Router />
        </Providers>
    </StrictMode>,
);
