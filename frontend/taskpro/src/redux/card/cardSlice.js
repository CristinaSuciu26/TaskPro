import { createSlice } from "@reduxjs/toolkit";
import {
  createCard,
  getCardsByColumn,
  updateCard,
  deleteCard,
} from "./cardThunks.js";

const initialState = {
  cardsByColumn: {}, // { columnId: [cards] }
  status: "idle",
  error: null,
};
const filterSlice = createSlice({
  name: "filters",
  initialState: {
    priority: "all",
  },
  reducers: {
    setPriorityFilter(state, action) {
      state.priority = action.payload;
    },
  },
});
const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // CREATE
      .addCase(createCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCard.fulfilled, (state, action) => {
        state.status = "succeeded";
        const card = action.payload;
        if (!state.cardsByColumn[card.columnId]) {
          state.cardsByColumn[card.columnId] = [];
        }
        state.cardsByColumn[card.columnId].push(card);
      })
      .addCase(createCard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // GET by column
      .addCase(getCardsByColumn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCardsByColumn.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { columnId, cards } = action.payload;
        state.cardsByColumn[columnId] = cards;
      })
      .addCase(getCardsByColumn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedCard = action.payload;
        const columnCards = state.cardsByColumn[updatedCard.columnId];
        if (columnCards) {
          const index = columnCards.findIndex((c) => c._id === updatedCard._id);
          if (index !== -1) {
            columnCards[index] = updatedCard;
          }
        }
      })
      .addCase(updateCard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // DELETE
      .addCase(deleteCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.status = "succeeded";
        const deletedId = action.payload;
        for (let columnId in state.cardsByColumn) {
          state.cardsByColumn[columnId] = state.cardsByColumn[columnId].filter(
            (card) => card._id !== deletedId
          );
        }
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { setPriorityFilter } = filterSlice.actions;
export const cardReducer = cardsSlice.reducer;
export const filtersReducer = filterSlice.reducer;
