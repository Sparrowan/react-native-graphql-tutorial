import React from "react";
import { ThemeProvider as DefaultProvider } from "styled-components/native";
import colors from "./colors";
import fonts from "./fonts";
import spacing from "./spacing";
import typography from "./typography";
import normalize from "../normalize";


const theme = {
    colors,
    typography,
    spacing,
    normalize,
    fonts,
} as const;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return <DefaultProvider theme={theme}>{children}</DefaultProvider>;
};

type ThemeProviderProps = {
    children: React.ReactNode;
};

type Theme = typeof theme;
type _Theme = Theme;

declare module "styled-components/native" {
    export interface DefaultTheme extends _Theme { }
}
// exports
export type { Theme, ThemeProviderProps };
export { ThemeProvider, theme };
