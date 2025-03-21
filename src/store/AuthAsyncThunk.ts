import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AccountData } from "@type/AuthType";

const API_URL = `http://localhost:${import.meta.env.VITE_API_PORT}/${
  import.meta.env.VITE_AUTH_API_ENDPOINT
}/register`;

export const AuthRegister = createAsyncThunk(
  "/register",
  async (account: AccountData) => {
    const response = await axios.post(API_URL, account);
    return response.data.data;
  }
);
