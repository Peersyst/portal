import { PropsWithChildren } from "react";
import { MainPage } from "../../../common/containers/main-page/main-page";
import HomeCard from "../../components/surface/home-card/home-card";

// TODO: Add activity routes
// const HOME_TABS_ROUTES: string[] = [HomeRoutes.HOME, BridgeRoutes.BRIDGE, ActivityRoutes.ACTIVITY];

const HomePage = ({ children }: PropsWithChildren): JSX.Element => {
    // TODO: Add activity routes
    // const { pathname } = useLocation();
    // // TODO: Remove on https://www.notion.so/6192badb28394cc1ac40f0a57963d1c4?v=46ea4897bbd648b68da11d55261e72ee&p=8e03e9be02834e3f9a60ec22f11eced6&pm=s
    // const [showHomeTabs, setShowHomeTabs] = useState(HOME_TABS_ROUTES.includes(pathname));

    // useEffect(() => {
    //     if (HOME_TABS_ROUTES.includes(pathname)) setShowHomeTabs(true);
    //     else setShowHomeTabs(false);
    // }, [pathname]);

    return (
        <MainPage>
            {/* TODO: Add home tabs */}
            {/* {showHomeTabs && <HomeTabs />} */}
            <HomeCard>{children}</HomeCard>
        </MainPage>
    );
};

export default HomePage;
