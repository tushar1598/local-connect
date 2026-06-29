import { createSlice } from "@reduxjs/toolkit";
import {
  createBusiness,
  deleteBusiness,
  getBusinessById,
  getMyBusinesses,
  getNearbyBusinesses,
  toggleBusinessStatus,
  updateBusiness,
} from "./businessThunk";
import type { BusinessState } from "./businessTypes";

const initialState: BusinessState = {
  businesses: [],
  selectedBusiness: null,
  nearbyBusinesses: [],
  loading: false,
  error: null,
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(createBusiness.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createBusiness.fulfilled, (state, action) => {
        state.loading = false;
        state.businesses.unshift(action.payload.business);
      })

      .addCase(createBusiness.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(getMyBusinesses.pending, (state) => {
        state.loading = true;
      })

      .addCase(getMyBusinesses.fulfilled, (state, action) => {
        state.loading = false;
        state.businesses = action.payload.businesses;
      })

      .addCase(getMyBusinesses.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getBusinessById.pending, (state) => {
        state.loading = true;
      })

      .addCase(getBusinessById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBusiness = action.payload.business;
      })

      .addCase(getBusinessById.rejected, (state) => {
        state.loading = false;
      })

      .addCase(updateBusiness.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateBusiness.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBusiness = action.payload.business;
        state.businesses = state.businesses.map((business) =>
          business._id === updatedBusiness._id ? updatedBusiness : business,
        );
      })

      .addCase(updateBusiness.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteBusiness.pending, (state) => {
        state.loading = true;
      })

      .addCase(deleteBusiness.fulfilled, (state, action) => {
        state.loading = false;
        state.businesses = state.businesses.filter(
          (business) => business._id !== action.payload.id,
        );
      })

      .addCase(deleteBusiness.rejected, (state) => {
        state.loading = false;
      })

      .addCase(toggleBusinessStatus.pending, (state) => {
        state.loading = true;
      })

      .addCase(toggleBusinessStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.businesses = state.businesses.map((business) =>
          business._id === action.payload._id ? action.payload : business,
        );
      })

      .addCase(toggleBusinessStatus.rejected, (state) => {
        state.loading = false;
      })

      // get nearBy Businesses
      .addCase(getNearbyBusinesses.pending, (state) => {
        state.loading = true;
      })

      .addCase(getNearbyBusinesses.fulfilled, (state, action) => {
        state.loading = false;
        state.nearbyBusinesses = action.payload;
      })

      .addCase(getNearbyBusinesses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default businessSlice.reducer;
