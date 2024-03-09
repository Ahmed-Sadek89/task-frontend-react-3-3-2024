import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { taskInput, taskOutput, taskState } from "../../interfaces/task.interface";
import { api_link } from "../../../../global/env";

const initialState: taskState = {
  loading: false,
  error: false,
  data: null
};

export const updateTaskById = createAsyncThunk<taskOutput, taskInput>(
  "post/update",
  async (payload, { rejectWithValue }) => {
    const {id, ...others} = payload
    try {
      const res = await axios.patch(`${api_link}/task/${payload.id}`, others, {
        headers: {
          authorization:  `Bearer ${Cookies.get("authorization")}`
        },
      });
      return res.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
  }
);


export const updateTaskById_slice = createSlice({
    name: "post/update",
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
      .addCase(updateTaskById.pending, state => {
          state.data = null;
          state.loading = true;
          state.error = false
      })
      .addCase(updateTaskById.fulfilled, (state, {payload}) => {
          state.data = payload
          state.loading = false;
          state.error = false
      })
      .addCase(updateTaskById.rejected, (state) => {
          state.data = null
          state.loading = false;
          state.error = true
      })
    }
  });
  
  export default updateTaskById_slice.reducer;