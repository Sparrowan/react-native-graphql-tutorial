
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import { apiLogin } from "../../api/auth";
import { asyncAccess } from "../../constants/env";




const wrapAuthFunction = <T extends Function>(func: T) => {
    const f = (async (...args: any) => {
        const response = await func(...args);

        const token = response.data.login.token;

        if (token) {
            await AsyncStorage.setItem(asyncAccess.TOKEN, token);
        }

        return response;
    }) as unknown as T;

    return f;
};

export const reduxLogin = createAsyncThunk("LOGIN", wrapAuthFunction(apiLogin));