import { useNavigate } from "react-router-dom";

/**
 * Hook used to go back to the previous page or to a specific path.
 * @param path The path to navigate to.
 * @returns A function to go back to the previous page or to a specific path.
 */
export function useGoBack(path?: string): () => void {
    const navigate = useNavigate();

    return () => {
        if (path) navigate(path, { replace: true });
        //Verify not leaving the site
        else if (!window.history?.state || window.history?.state?.idx === 0) navigate("/", { replace: true });
        else navigate(-1);
    };
}
