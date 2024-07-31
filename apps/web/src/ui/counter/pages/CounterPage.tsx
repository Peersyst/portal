import BasePage from "../../common/components/layout/BasePage/BasePage";
import StoreCounter from "../containers/StoreCounter/StoreCounter";

export default function CounterPage(): JSX.Element {
    return (
        <BasePage>
            <StoreCounter />
        </BasePage>
    );
}
