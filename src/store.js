import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./component/slice/submitEmail";

export const store = configureStore({
  reducer: {
    emailSubmit: dataSliceReducer,
  },
});
