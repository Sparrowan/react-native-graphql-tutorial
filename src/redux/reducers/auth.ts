import { FetchResult } from "@apollo/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
    reduxLogin,
} from "../thunks/auth";
import { LoginResponse, User } from "../../@models/auth";

type AuthState = {
    token: string | null;
    user: null | User;
    loading: {
        profile: boolean;
        my_contributions: boolean;
    };
};
const initialState: AuthState = {
    token: null,
    user: null,
    loading: {
        profile: false,
        my_contributions: false,
    }
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addMatcher<PayloadAction<FetchResult<LoginResponse, any, any>>>(
            (action) =>
                [reduxLogin.fulfilled.type].includes(action.type),
            (state, { payload }) => {
                state.token = payload.data?.login.token ?? null;
            }
        );
    },
});

export default auth.reducer;
