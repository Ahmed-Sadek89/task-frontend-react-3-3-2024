import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { taskInput, taskOutput, taskState } from "../../interfaces/task.interface";
import axios from "axios";
import { api_link } from "../../../../global/env";
import Cookies from "js-cookie";

const initialState: taskState = {
    loading: false,
    error: false,
    data: null
}

export const insertTask = createAsyncThunk<taskOutput, taskInput>(
    "task/insert",
    async (payload, {rejectWithValue}) => {
        try{
            const res = await axios.post(`${api_link}/task/addNewTask`, payload, {
                headers: {
                    authorization: `Bearer ${Cookies.get("authorization")}`
                }
            });
            return res.data
        }catch(error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const insertTask_slice = createSlice({
    name: "task/insert",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(insertTask.pending, (state) => {
            state.loading = true;
            state.error = false ;
            state.data = null
        })
        .addCase(insertTask.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.error = false;
            state.data = payload
        })
        .addCase(insertTask.rejected, (state) => {
            state.loading = false;
            state.error = true ;
            state.data = null
        })
    }
});

export default insertTask_slice.reducer