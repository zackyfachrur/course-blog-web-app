// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./VideoSliceAPI";
import authReducer from "./AuthSliceAPI";
import phoneReducer from "./PhoneNumber";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    authentication: authReducer,
    phones: phoneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
