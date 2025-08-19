import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/register`, formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/login`, formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/profile",
  async (formData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      const res = axios.put(`${API_URL}/profile`, formData, {
        headers: { Authorization: `Bearer${token}` },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
