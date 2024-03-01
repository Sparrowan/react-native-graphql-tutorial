// import { useNavigation } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";
import { isRejected } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { Linking } from "react-native";

const useLoginSuccess = () => {
    // const navigation = useNavigation<StackNavigationProp<ReactNavigation.RootParamList>>();

    const onSuccess = useCallback(
        async (payload: any) => {
            if (isRejected(payload)) {
                const message = payload.error.message;
                if (message) console.error(payload);
            } else {
                const url = await Linking.getInitialURL();
                const is_reset = url && url.includes("reset-password");

                // navigation.reset({
                //     routes: [
                //         {
                //             name: "Main",
                //             params: {
                //                 screen: "Home",
                //                 params: {
                //                     screen: "group_list",
                //                 },
                //             },
                //         },
                //     ],
                // });

                if (url && !is_reset)
                    Linking.canOpenURL(url).then((can_open) => {
                        if (can_open) Linking.openURL(url);
                        return can_open;
                    });

                return payload;
            }
        },
        []
    );

    return onSuccess;
};

export default useLoginSuccess;
