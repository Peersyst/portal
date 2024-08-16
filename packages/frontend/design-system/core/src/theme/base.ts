import { BasePalette, GrayShades, BlueShades, GreenShades, OrangeShades, RedShades, YellowShades } from "../palette";

const blue: BlueShades = {
    electric: "#008CFF",
    royal: "#0067E5",
    sky: "#00B4FF",
};

const green: GreenShades = {
    electric: "#03C345",
    olive: "#6DA544",
};

export const gray: GrayShades = {
    light: "#FFFFFF",
    superSoft: "#FAFAFA",
    silver: "#F5F6F7",
    soft: "#F1F2F3",
    regular: "#EBECED",
    lowMedium: "#C9CCCF",
    medium: "#969B9E",
    dark: "#454D54",
    highDark: "#394046",
    almostBlack: "#262E36",
    black: "#1C2226",
    darkBlack: "#141A1F",
};

const orange: OrangeShades = { pumpkin: "#FAAD18" };

const red: RedShades = { scarlet: "#FA3318" };

const yellow: YellowShades = {
    gold: "#FFC700",
};

export const basePalette: BasePalette = {
    gray,
    blue,
    green,
    orange,
    red,
    yellow,
    primary: blue.electric,
    contrast: blue.royal,
};
