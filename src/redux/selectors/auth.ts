import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { State } from "../store";

export const selectAuthUser = createDraftSafeSelector(
    (state: State) => {
        return state.auth;
    },
    (a) => ({
        ...a,
        authenticated: a.token,
        displayName: a.user?.name?.toUpperCase ?? "",
        name: a.user?.name?.toUpperCase ?? "",
        user: a.user ?? null,
        photo: a.user?.avatar,
    })
);
