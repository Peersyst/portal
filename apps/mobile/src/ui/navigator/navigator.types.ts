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
