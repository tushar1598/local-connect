import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import type { LoginData, RegisterData } from "./authTypes";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: RegisterData, thunkAPI) => {
    try {
      const response = await api.post("/register", data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",

  async (data: LoginData, thunkAPI) => {
    try {
      const response = await api.post("/login", data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed",
      );
    }
  },
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await api.post("/logout");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  },
);

export const getMe = createAsyncThunk("auth/me", async (_, thunkAPI) => {
  try {
    const response = await api.get("/me");
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message);
  }
});

export const refreshAccessToken = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const response = await api.post("/refresh-token");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Session expired",
      );
    }
  },
);
