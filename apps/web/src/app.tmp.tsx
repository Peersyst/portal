// Load polyfills
import "./core/polyfills";

// Set up data access
import "./core/data-access/setup";

// Set up domain
import "./core/domain/setup";

// Load locale
import "./locale";

import Providers from "./providers.tmp";
import { useInit } from "./common/hooks/use-init";
import { Suspense } from "react";
import Router from "./router/router.tpm";

export default function App(): JSX.Element | null {
    const { isLoading } = useInit();

    return isLoading ? (
        <></>
    ) : (
        <Suspense fallback={<></>}>
            <Providers>
                <Router />
            </Providers>
        </Suspense>
    );
}
