import useNavigator from "./use-navigator";

export default function useGoBack(): () => void {
    const navigator = useNavigator();

    return navigator.goBack;
}
