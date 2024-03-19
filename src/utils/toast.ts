import { StyleSheet } from "react-native";
import RNToast, { ToastOptions as Options } from "react-native-root-toast";
import colors from "./theme/colors";
import fonts from "./theme/fonts";
import spacing from "./theme/spacing";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sm,
    minWidth: 150,
    paddingVertical: spacing.xs,
    borderRadius: spacing.xs + 2,
  },
  text: {
    ...fonts.gabaritoMedium,
    lineHeight: undefined,
    fontSize: 14,
  },
});

const variants = {
  success: {
    backgroundColor: colors.primary.main,
    textColor: colors.common.light,
    shadowColor: colors.primary.main,
  },
  error: {
    backgroundColor: colors.error.main,
    textColor: colors.common.light,
    shadowColor: colors.error.main,
  },
  warning: {
    backgroundColor: colors.common.orange,
    textColor: colors.common.light,
    shadowColor: colors.common.orange,
  },
};

type ToastOptions = Omit<Options, "position"> & {
  variant: ToastVariants;
  position?: "top" | number;
};

type ToastVariants = keyof typeof variants;

const showToast = (message: string, toastOptions?: ToastOptions) => {
  const options =
    (toastOptions?.variant ? variants[toastOptions.variant] : null) ?? variants["success"];

  return RNToast.show(message, {
    ...options,
    keyboardAvoiding: true,

    textStyle: styles.text,
    ...toastOptions,
    //@ts-ignore
    ...(toastOptions?.position === "top" && {
      position: 10 as any,
    }),

    hideOnPress: true,
    containerStyle: [styles.container, toastOptions?.containerStyle],
  });
};

type ToastFunc = (
  message: string,
  options?: Omit<Options, "position"> & {
    position?: ToastOptions["position"];
  }
) => any;

type Toasts = {
  success: ToastFunc;
  error: ToastFunc;
  warning: ToastFunc;
  default: ToastFunc;
};

const Toast: Toasts = {
  success: (message, options) => {
    return showToast(message, {
      ...options,
      variant: "success",
    });
  },
  error: (message, options) =>
    showToast(message, {
      ...options,
      variant: "error",
    }),
  warning: (message, options) =>
    showToast(message, {
      ...options,
      variant: "warning",
    }),
  default: (message, options) =>
    RNToast.show(message, {
      ...options,
      containerStyle: [styles.container, options?.containerStyle],
      textStyle: [styles.text, options?.textStyle],
      position: undefined,
    }),
} as const;

export default Toast;
