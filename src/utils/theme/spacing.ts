import normalize from "../normalize";

export const spacing = {
    xs: normalize(5),
    sm: normalize(14),
    md: normalize(20),
    lg: normalize(25),
    xl: normalize(45),
} as const;

export default spacing;
