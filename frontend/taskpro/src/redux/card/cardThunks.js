import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/cards";

export const createCard = createAsyncThunk(
  "cards/createCard",
  async (cardData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${API_URL}`, cardData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data.card;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create card"
      );
    }
  }
);

export const getCardsByColumn = createAsyncThunk(
  "cards/getCardsByColumn",
  async (columnId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/${columnId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return { columnId, cards: res.data.cards };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch cards"
      );
    }
  }
);

export const updateCard = createAsyncThunk(
  "cards/updateCards",
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(`${API_URL}/${id}`, updates, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data.card;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update card"
      );
    }
  }
);

export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete card"
      );
    }
  }
);
