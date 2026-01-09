import { createSlice } from "@reduxjs/toolkit";
import {
  createColumn,
  getColumnsByDashboard,
  updateColumn,
  deleteColumn,
} from "./columnThunks.js";
import { logout } from "../auth/authSlice.js";

const initialState = {
  columnsByDashboard: {}, // { dashboardId: [col1, col2, ...] }
  status: "idle",
  error: null,
};

const columnSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // CREATE
      .addCase(createColumn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createColumn.fulfilled, (state, action) => {
        state.status = "succeeded";
        const column = action.payload;
        if (!state.columnsByDashboard[column.dashboardId]) {
          state.columnsByDashboard[column.dashboardId] = [];
        }
        state.columnsByDashboard[column.dashboardId].push(column);
      })
      .addCase(createColumn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // GET by dashboard
      .addCase(getColumnsByDashboard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getColumnsByDashboard.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { dashboardId, columns } = action.payload;
        state.columnsByDashboard[dashboardId] = columns;
      })
      .addCase(getColumnsByDashboard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateColumn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updated = action.payload;
        const dashboardColumns = state.columnsByDashboard[updated.dashboardId];
        if (dashboardColumns) {
          const index = dashboardColumns.findIndex(
            (c) => c._id === updated._id
          );
          if (index !== -1) {
            dashboardColumns[index] = updated;
          }
        }
      })
      .addCase(updateColumn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // DELETE
      .addCase(deleteColumn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.status = "succeeded";
        const deletedId = action.payload;
        for (const dashboardId in state.columnsByDashboard) {
          state.columnsByDashboard[dashboardId] = state.columnsByDashboard[
            dashboardId
          ].filter((c) => c._id !== deletedId);
        }
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(logout, () => initialState);
  },
});

export default columnSlice.reducer;
