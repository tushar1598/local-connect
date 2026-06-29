import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import type { UpdateBusinessData } from "./businessTypes";

export const createBusiness = createAsyncThunk(
  "business/create",

  async (data: any, thunkAPI) => {
    try {
      const response = await api.post("/business/create-business", data);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create business",
      );
    }
  },
);

export const getMyBusinesses = createAsyncThunk(
  "business/getMyBusinesses",

  async (_, thunkAPI) => {
    try {
      const response = await api.get("/business/my-businesses");

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  },
);

export const getBusinessById = createAsyncThunk(
  "business/getBusinessById",

  async (id: string, thunkAPI) => {
    try {
      const response = await api.get(`/business/get-business/${id}`);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  },
);

export const updateBusiness = createAsyncThunk(
  "business/updateBusiness",

  async (
    {
      id,
      data,
    }: {
      id: string;
      data: UpdateBusinessData;
    },
    thunkAPI,
  ) => {
    try {
      const response = await api.put(`/business/edit-business/${id}`, data);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update business",
      );
    }
  },
);

export const deleteBusiness = createAsyncThunk(
  "business/deleteBusiness",

  async (id: string, thunkAPI) => {
    try {
      const response = await api.delete(`/business/delete-business/${id}`);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete business",
      );
    }
  },
);

export const toggleBusinessStatus = createAsyncThunk(
  "business/toggleBusinessStatus",

  async (id: string, thunkAPI) => {
    try {
      const response = await api.patch(`/business/toggle-status/${id}`);

      return response.data.business;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update status",
      );
    }
  },
);

// user api's
export const getNearbyBusinesses = createAsyncThunk(
  "business/getNearbyBusinesses",

  async (
    {
      lat,
      lng,
    }: {
      lat: number;
      lng: number;
    },
    thunkAPI,
  ) => {
    try {
      const response = await api.get(`/user/nearby?lat=${lat}&lng=${lng}`);

      return response.data.businesses;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch nearby businesses",
      );
    }
  },
);
