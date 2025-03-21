import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Video, Data } from "@type/StoreType";
import {
  fetchVideos,
  addVideo,
  editVideo,
  deleteVideo,
} from "./VideoAsyncThunk";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        addVideo.fulfilled,
        (state: Data, action: PayloadAction<Video>) => {
          state.data.push(action.payload);
        }
      )
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state: Data, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchVideos.rejected, (state: Data, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(editVideo.fulfilled, (state: Data, action) => {
        state.data = state.data.map((video: Video) =>
          video.id === action.payload.id ? action.payload : video
        );
      })
      .addCase(deleteVideo.fulfilled, (state: Data, action) => {
        state.data = state.data.filter((video) => video.id !== action.payload);
      });
  },
});

export default videoSlice.reducer;
