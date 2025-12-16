import { createSlice } from "@reduxjs/toolkit";
import {
  deleteDashboard,
  updateDashboardBackground,
  addDashboard,
  fetchDashboards,
} from "./dashboardThunks.js";

const initialState = {
  dashboards: [],
  selectedDashboardId: null,
  status: "idle",
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setSelectedDashboardId(state, action) {
      state.selectedDashboardId = action.payload;
    },
    resetSelectedBoard(state) {
      state.selectedDashboardId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchDashboards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDashboards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dashboards = action.payload;
      })
      .addCase(fetchDashboards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // ADD
      .addCase(addDashboard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addDashboard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dashboards.push(action.payload);
        state.selectedDashboardId = action.payload._id;
      })
      .addCase(addDashboard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // DELETE
      .addCase(deleteDashboard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteDashboard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dashboards = state.dashboards.filter(
          (dashboard) => dashboard._id !== action.meta.arg
        );
      })
      .addCase(deleteDashboard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // UPDATE BACKGROUND
      .addCase(updateDashboardBackground.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateDashboardBackground.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.dashboards.findIndex(
          (d) => d._id === action.payload._id
        );
        if (index !== -1) {
          state.dashboards[index] = action.payload;
        }
      })
      .addCase(updateDashboardBackground.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { setSelectedDashboardId, resetSelectedBoard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
