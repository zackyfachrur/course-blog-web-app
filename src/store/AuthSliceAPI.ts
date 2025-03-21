import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountData, Data } from "@type/AuthType";

import { AuthRegister } from "@store/AuthAsyncThunk";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      AuthRegister.fulfilled,
      (state: Data, action: PayloadAction<AccountData>) => {
        state.data.push(action.payload);
      }
    );
  },
});

export default authSlice.reducer;
