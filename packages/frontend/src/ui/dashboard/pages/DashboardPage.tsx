import BasePage from "../../common/components/layout/BasePage/BasePage";
import StoreCounter from "../containers/StoreCounter/StoreCounter";

export default function DashboardPage(): JSX.Element {
    return (
        <BasePage>
            <StoreCounter />
        </BasePage>
    );
}
