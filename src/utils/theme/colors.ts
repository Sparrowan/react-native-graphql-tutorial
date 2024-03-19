import colorAlpha from "color-alpha";
import { DotNotation, Join } from "../../@models/dot-notation";

const common = {
    white: "#ffffff",
    light: "#f4f4f4",
    divider: "#F2F2F2",
    black: "rgb(0,0,0)",
    lightGrey: "#C8C9C9",
    orange: "#F2994A",
    blue: "#6352F1",
} as const;

const grey = {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#eeeeee",
    "300": "#e0e0e0",
    "400": "#bdbdbd",
    "500": "#9e9e9e",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121",
    // alphas
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
} as const;

const primary = {
    light: "#D8FEF3",
    main: "#00DD9F",
    contrastText: grey[100],
} as const;

const error = {
    main: "rgb(255, 72, 66)",
    light: "#ffa19e",
} as const;

const green = {
    lighter: "#96F1D8",
    light: "#00AC7C",
    main: "#018E67",
    contrastText: "#FFFFFF",
} as const;

const colors = {
    primary,
    common,
    grey,
    error,
    green,
    alpha: colorAlpha,
} as const;

export type Colors = typeof colors;
export type ColorsMap = Join<DotNotation<Colors>, ".">;
export default colors;
