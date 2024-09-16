import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export interface ProtectedRouteProps {
    isAllowed: boolean;
    redirectPath?: string;
    children: ReactNode;
}

export const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }: ProtectedRouteProps): JSX.Element => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return <>{children}</>;
};
