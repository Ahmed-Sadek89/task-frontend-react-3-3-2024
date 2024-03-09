import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api_link } from "../../../../global/env";
import { taskOutput, taskState, userId } from "../../interfaces/task.interface";
import Cookies from "js-cookie";

const initialState: taskState = {
    loading: false,
    error: false,
    data: null
};

export const task_getByUserId = createAsyncThunk<taskOutput, userId>(
    "task/user/userId",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${api_link}/task/user/${payload.userId}`, {
                headers: {
                    authorization: `Bearer ${Cookies.get("authorization")}`
                }
            });
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const task_getByUserId_slice = createSlice({
    name: "task/user/userId",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(task_getByUserId.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.data = null
            })
            .addCase(task_getByUserId.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = false;
                state.data = payload
            })
            .addCase(task_getByUserId.rejected, (state) => {
                state.loading = false;
                state.error = true;
                state.data = null
            });
    },
});

export default task_getByUserId_slice.reducer;