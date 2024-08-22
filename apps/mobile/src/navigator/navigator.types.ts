import { StackParamList } from "./stack.tmp";

export type To<
    ParamList extends ReactNavigation.RootParamList = ReactNavigation.RootParamList,
    RouteName extends keyof ParamList = keyof ParamList,
> =
    | Extract<RouteName, string>
    | (undefined extends ParamList[RouteName]
          ? {
                screen: Extract<RouteName, string>;
                params?: ParamList[RouteName];
            }
          : {
                screen: Extract<RouteName, string>;
                params: ParamList[RouteName];
            });

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace ReactNavigation {
        interface RootParamList extends StackParamList {}
    }
}
