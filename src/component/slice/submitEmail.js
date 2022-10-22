import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const submitData = createAsyncThunk(
  "data/submitData",
  async ({ name, email, subject, message }, rejectWithValue) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/send_email",
        { name, email, subject, message },
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
    [submitData.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = null;
    },
    [submitData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [submitData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload.message;
    },
  },
});
export default dataSlice.reducer;
