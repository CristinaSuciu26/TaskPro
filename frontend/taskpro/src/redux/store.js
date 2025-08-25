import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import themeReducer from "./theme/themeSlice.js";
import dashboardReducer from "./dashboard/dashboardSlice.js";
import cardReducer from "./card/cardSlice.js";
import columnReducer from "./column/columnSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    dashboard: dashboardReducer,
    card: cardReducer,
    column: columnReducer,
  },
});
