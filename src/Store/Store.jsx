// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./SliceAPI";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
  },
});

export default store;
