import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://6793cb9d5eae7e5c4d8fead7.mockapi.io/api/course-video";

// Async Thunk untuk mengambil data video dari API
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Async Thunk untuk mengedit video
export const editVideo = createAsyncThunk("videos/editVideo", async (video) => {
  const response = await axios.put(`${API_URL}/${video.id}`, video);
  return response.data;
});

export const addVideo = createAsyncThunk("videos/addVideo", async (video) => {
  const response = await axios.post(API_URL, video);
  return response.data;
});

// Async Thunk untuk menghapus video
export const deleteVideo = createAsyncThunk(
  "videos/deleteVideo",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addVideo.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editVideo.fulfilled, (state, action) => {
        state.data = state.data.map((video) =>
          video.id === action.payload.id ? action.payload : video
        );
      })
      .addCase(deleteVideo.fulfilled, (state, action) => {
        state.data = state.data.filter((video) => video.id !== action.payload);
      });
  },
});

export default videoSlice.reducer;
