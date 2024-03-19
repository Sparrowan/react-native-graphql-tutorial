import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Use iPhone6 as base size which is 375 x 667
const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

const normalize = (size: number) => Math.ceil(size * scale);
const normalizeFont = (fontSize: number) => fontSize + 3;

export { normalizeFont };

export default normalize;
