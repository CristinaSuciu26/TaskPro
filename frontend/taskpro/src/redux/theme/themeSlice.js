import { createSlice } from "@reduxjs/toolkit";
import { updateTheme } from "./themeThunks";
import { logout } from "../auth/authSlice";
import { loginUser, registerUser } from "../auth/authThunks";

const allowedThemes = ["light", "dark", "violet"];
const storedUser = JSON.parse(localStorage.getItem("user"));
const userId = storedUser?.id;

const storedTheme = userId ? localStorage.getItem(`theme_${userId}`) : null;
const savedTheme = allowedThemes.includes(storedTheme) ? storedTheme : "light";

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
        const userId = JSON.parse(localStorage.getItem("user"))?.id;
        if (userId) localStorage.setItem(`theme_${userId}`, action.payload);
      })
      .addCase(updateTheme.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.theme =
          localStorage.getItem(`theme_${action.payload.user.id}`) ||
          action.payload.user.theme ||
          "light";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.theme =
          localStorage.getItem(`theme_${action.payload.user.id}`) ||
          action.payload.user.theme ||
          "light";
      })

      .addCase(logout, () => initialState);
  },
});

export const { setThemeLocal } = themeSlice.actions;
export default themeSlice.reducer;
