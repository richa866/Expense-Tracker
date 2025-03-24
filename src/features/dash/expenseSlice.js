import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
  rows: [],
  tags: [],
  famRows: [],
};
export const expenseSlice = createSlice({
  name: "rows",
  initialState,
  reducers: {
    addRow: (state, action) => {
      const row = {
        id: nanoid(),
        expense: "",
        by: "",
        amt: 0,
        date: "",
        tag: "",
        category: action.payload.category,
      };
      action.payload.category === "per"
        ? state.rows.push(row)
        : state.famRows.push(row);
    },
    updateRow: (state, action) => {
      console.log("Updating Row:", action.payload);
      const targetRows =
        action.payload.category === "per" ? state.rows : state.famRows;
      const row = targetRows.find((row) => row.id === action.payload.id);

      if (row) {
        row[action.payload.field] = action.payload.value;
      }
      console.log("Updated State:", state.rows);
    },

    deleteRow: (state, action) => {
      if (action.payload.category === "per") {
        state.rows = state.rows.filter((row) => row.id !== action.payload.id);
      } else {
        state.famRows = state.famRows.filter(
          (row) => row.id !== action.payload.id
        );
      }
    },
  },
});

export const { addRow, updateRow, deleteRow } = expenseSlice.actions;
export default expenseSlice.reducer;
