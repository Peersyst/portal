import useNavigator from "./use-navigator";

/**
 * Hook that returns a function to go back to the previous screen.
 * @returns The function to go back to the previous screen.
 */
export default function useGoBack(): () => void {
    const navigator = useNavigator();

    return navigator.goBack;
}
