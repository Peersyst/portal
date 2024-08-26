import "styled-components/cssprop";

import { Theme } from "@peersyst/react-components";
import { CSSProp } from "styled-components";

// Type styled components theme with our components theme
declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}

// Use css prop in components
declare module "react" {
    export interface Attributes {
        css?: CSSProp<Theme>;
    }
}
