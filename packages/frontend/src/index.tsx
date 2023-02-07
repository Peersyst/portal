import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Providers from "ui/Providers";
import Router from "ui/router/Router";
import "data-access/api/OpenApiConfig";
import "ui/locale/i18n";
import "utils/String";

ReactDOM.render(
    <StrictMode>
        <Providers>
            <Router />
        </Providers>
    </StrictMode>,
    document.getElementById("root"),
);
