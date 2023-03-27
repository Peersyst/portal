import { lazy } from "react";
import { RouteObject } from "react-router-dom";

export enum CounterRoutes {
    MAIN = "/",
}

const CounterPage = lazy(() => import("../pages/CounterPage"));

export const useCounterRoutes = (): RouteObject[] => {
    return [
        {
            path: CounterRoutes.MAIN,
            element: <CounterPage />,
        },
    ];
};
