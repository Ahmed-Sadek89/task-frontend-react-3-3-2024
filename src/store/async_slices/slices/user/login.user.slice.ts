import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { userOutput, userRegister, userState } from "../../interfaces/user.interface";
import { api_link } from "../../../../global/env";

const initialState: userState = {
    loading: false,
    error: false,
    data: null
}

export const user_login = createAsyncThunk<userOutput, userRegister>(
    "users/login",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${api_link}/user/login`, payload)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const user_login_slice = createSlice({
    name: "users/login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(user_login.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.data = null
            })
            .addCase(user_login.fulfilled, (state, { payload }) => {
                state.data = payload
                state.loading = false;
                state.error = false;
            })
            .addCase(user_login.rejected, (state, action) => {
                const payload = action.payload as userOutput;
                state.data = {
                    message: payload.message
                };;
                state.loading = false;
                state.error = true;
            });
    },
});

export default user_login_slice.reducer;