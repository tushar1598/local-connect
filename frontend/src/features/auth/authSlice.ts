import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "./authTypes";
import {
  getMe,
  loginUser,
  refreshAccessToken,
  registerUser,
} from "./authThunk";
import { setToken } from "../../services/tokenManager";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  authLoading: true,
  authChecked: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.error = null;

      setToken(null);
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      setToken(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
        state.error = null;

        setToken(action.payload.accessToken);
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(refreshAccessToken.pending, (state) => {
        state.authLoading = true;
      })

      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;

        setToken(action.payload.accessToken);
        // state.authLoading = false;
      })

      .addCase(refreshAccessToken.rejected, (state) => {
        state.authLoading = false;
        state.authChecked = true;
      })

      .addCase(getMe.pending, (state) => {
        state.authLoading = true;
      })

      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = true; // add this
        state.authLoading = false;
        state.authChecked = true;
      })

      .addCase(getMe.rejected, (state) => {
        state.authLoading = false;
        state.authChecked = true;
      });
  },
});

export const { logout, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
