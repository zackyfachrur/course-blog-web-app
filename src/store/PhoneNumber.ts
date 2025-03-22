import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import CountryPhone from "../utils/json/CountryPhone.json";
import { CountryPhoneCode } from "@type/PhoneType";

interface PhoneState {
  data: CountryPhoneCode[];
  loading: boolean;
  error: string | null;
}

const initialState: PhoneState = {
  data: [],
  loading: false,
  error: null,
};

export const getCountryPhone = (): CountryPhoneCode[] => {
  return CountryPhone.countries.map((country) => ({
    name: country.name,
    code: country.code,
  }));
};

export const fetchCountryPhones = createAsyncThunk(
  "phones/fetchCountryPhones",
  async () => {
    return getCountryPhone();
  }
);

const phoneSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryPhones.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCountryPhones.fulfilled,
        (state, action: PayloadAction<CountryPhoneCode[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchCountryPhones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Gagal mengambil data";
      });
  },
});

export default phoneSlice.reducer;
