import useNavigator from "./useNavigator";

export default function useGoBack(): () => void {
    const navigator = useNavigator();

    return navigator.goBack;
}
