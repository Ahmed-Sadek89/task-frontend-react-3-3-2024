import { configureStore } from "@reduxjs/toolkit";
import user_register_slice from "./async_slices/slices/user/register.user.slice";
import user_login_slice from "./async_slices/slices/user/login.user.slice";

export const store = configureStore({
    reducer: {
        user_register: user_register_slice,
        userLogin: user_login_slice
    }
})

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch