import { createSlice } from "@reduxjs/toolkit";
import { updateTheme } from "./themeThunks";

const allowedThemes = ["light", "dark", "violet"];
const savedTheme = allowedThemes.includes(localStorage.getItem("theme"))
  ? localStorage.getItem("theme")
  : "light";

const initialState = {
  theme: savedTheme,
  status: "idle",
  error: null,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeLocal: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateTheme.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTheme.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.theme = action.payload;
        localStorage.setItem("theme", action.payload);
      })
      .addCase(updateTheme.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setThemeLocal } = themeSlice.actions;
export default themeSlice.reducer;
