import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://taskpro-backend-i4f0.onrender.com/api/dashboards";

export const fetchDashboards = createAsyncThunk(
  "dashboard/fetchDashboards",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.dashboard; // backend returnează { dashboard: [...] }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch dashboards"
      );
    }
  }
);

export const addDashboard = createAsyncThunk(
  "dashboard/addDashboard",
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token"); 
      const res = await axios.post(`${API_URL}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.dashboard;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add dashboards"
      );
    }
  }
);

export const deleteDashboard = createAsyncThunk(
  "dashboard/deleteDashboard",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete dashboard"
      );
    }
  }
);
export const updateDashboardBackground = createAsyncThunk(
  "dashboard/updateBackground",
  async ({ id, background, file }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      // pt imagine (upload), folosim FormData
      let formData;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (file) {
        formData = new FormData();
        formData.append("background", file);
        config.headers["Content-Type"] = "multipart/form-data";
      }

      const res = await axios.put(
        `${API_URL}/${id}`,
        file ? formData : { background }, // fie file, fie string URL
        config
      );

      return res.data.dashboard;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update background"
      );
    }
  }
);
