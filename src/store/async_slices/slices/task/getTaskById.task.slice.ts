import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { taskId, taskOutput, taskState } from "../../interfaces/task.interface";
import { api_link } from "../../../../global/env";
import Cookies from "js-cookie";

const initialState: taskState = {
  loading: false,
  error: false,
  data: null
};

export const getTaskById = createAsyncThunk<taskOutput, taskId>(
  "task/getById",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${api_link}/task/${payload.id}`, {
        headers: {
          authorization: `Bearer ${Cookies.get("authorization")}`
        }
      });
      console.log(res.data)

      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTaskById_slice = createSlice({
  name: "task/getById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTaskById.pending, (state) => {
        state.loading = true;
        state.error = false
        state.data = null
      })
      .addCase(getTaskById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = false
        state.data = payload
      })
      .addCase(getTaskById.rejected, (state) => {
        state.loading = false;
        state.error = true
        state.data = null
      });
  },
});

export default getTaskById_slice.reducer;