import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { taskId, taskOutput, taskState } from "../../interfaces/task.interface";
import axios from "axios";
import { api_link } from "../../../../global/env";
import Cookies from "js-cookie";

const initialState: taskState = {
    loading: false,
    error: false,
    data: null
}

export const deleteTaskById = createAsyncThunk<taskOutput, taskId>(
    "task/delete",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`${api_link}/task/${payload.id}`, {
                headers: {
                    authorization: `Bearer ${Cookies.get("authorization")}`
                }
            });
            return res.data
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const deleteTaskById_slice = createSlice({
    name: "task/delete",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteTaskById.pending, (state) => {
                state.loading = true;
                state.data = null;
                state.error = false
            })
            .addCase(deleteTaskById.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.data = payload;
                state.error = false
            })
            .addCase(deleteTaskById.rejected, (state) => {
                state.loading = false;
                state.data = null
                state.error = true
            })
    }
});

export default deleteTaskById_slice.reducer