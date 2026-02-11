import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";
import modeReducer from "./modeSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    mode: modeReducer,
  },
});
