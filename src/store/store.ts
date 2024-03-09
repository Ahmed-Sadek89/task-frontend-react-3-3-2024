import { configureStore } from "@reduxjs/toolkit";
import user_register_slice from "./async_slices/slices/user/register.user.slice";

export const store = configureStore({
    reducer: {
        user_register: user_register_slice
    }
})

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch