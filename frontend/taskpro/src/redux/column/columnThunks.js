import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/columns";

export const createColumn = createAsyncThunk(
  "columns/createColumn",
  async (columnData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${API_URL}`, columnData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.column;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create column"
      );
    }
  }
);

export const getColumnsByDashboard = createAsyncThunk(
  "columns/getColumnsByDashboard",
  async (dashboardId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/${dashboardId}`, {
        headers: { Authorization: `Bearer: ${token}` },
      });

      return { dashboardId, columns: res.data };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch columns"
      );
    }
  }
);

export const updateColumn = createAsyncThunk(
  "solumns/updateColumns",
  async ({ id, title }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${API_URL}/${id}`,
        { title },
        {
          headers: { Authorization: `Bearer: ${token}` },
        }
      );
      return res.data.column;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update"
      );
    }
  }
);

export const deleteColumn = createAsyncThunk(
  "columns/deleteColumn",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer: ${token}` },
      });

      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete"
      );
    }
  }
);
