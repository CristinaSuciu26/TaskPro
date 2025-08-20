import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const updateTheme = createAsyncThunk(
  "theme/updateTheme",
  async (theme, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${API_URL}/theme`,
        { theme },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data.theme;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update theme"
      );
    }
  }
);
