import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const submitDataApi = createAsyncThunk(
  "data/submitData",
  async ({ name, email:from, subject, message }, rejectWithValue) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/send_email",
        { name, from, subject, message },
        config
      );

      console.log(data, "chats axios");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    isLoading: false,
    isError: null,
  },

  extraReducers: {
    [submitDataApi.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = null;
    },
    [submitDataApi.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [submitDataApi.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload.message;
    },
  },
});
export default dataSlice.reducer;
