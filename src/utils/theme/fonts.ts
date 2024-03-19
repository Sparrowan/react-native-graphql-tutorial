const fontFamily = (fontFamilyDashed: string) => {
    // return Platform.OS === "ios" ? fontFamilyDashed : fontFamilyDashed.replace("-", "");
    return fontFamilyDashed;
};

const fonts = {
    interLight: {
        fontFamily: fontFamily("Gabarito-Regular"),
        fontWeight: "400",
        // fontFamily: fontFamily("Inter-Light"),
        // fontWeight: "300",
    },
    interRegular: {
        fontFamily: fontFamily("Inter-Regular"),
        fontWeight: "400",
    },
    interMedium: {
        fontFamily: fontFamily("Gabarito-Regular"),
        fontWeight: "500",
    },
    interSemiBold: {
        fontFamily: fontFamily("Inter-SemiBold"),
        fontWeight: "600",
    },
    interBold: {
        fontFamily: fontFamily("Inter-Bold"),
        fontWeight: "700",
    },
    gabaritoRegular: {
        fontFamily: fontFamily("Gabarito-Regular"),
        fontWeight: "400",
    },
    gabaritoMedium: {
        fontFamily: fontFamily("Gabarito-Medium"),
        fontWeight: "400",
    },
    gabaritoSemiBold: {
        fontFamily: fontFamily("Gabarito-SemiBold"),
        fontWeight: "400",
    },
    gabaritoBold: {
        fontFamily: fontFamily("Gabarito-Bold"),
        fontWeight: "400",
    },
} as const;

export const fontFiles = {
    // Inter
    "Inter-Bold": require("../../../assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("../../../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../../../assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../../../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Light": require("../../../assets/fonts/Inter-Light.ttf"),
    // Gabarito
    "Gabarito-Bold": require("../../../assets/fonts/Gabarito-Bold.ttf"),
    "Gabarito-SemiBold": require("../../../assets/fonts/Gabarito-SemiBold.ttf"),
    "Gabarito-Medium": require("../../../assets/fonts/Gabarito-Medium.ttf"),
    "Gabarito-Regular": require("../../../assets/fonts/Gabarito-Regular.ttf"),
};

export default fonts;
