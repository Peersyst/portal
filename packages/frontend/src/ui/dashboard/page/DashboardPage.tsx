import BasePage from "../../common/component/layout/BasePage/BasePage";
import StoreCounter from "../container/StoreCounter";

export default function DashboardPage(): JSX.Element {
    return (
        <BasePage>
            <StoreCounter />
        </BasePage>
    );
}
