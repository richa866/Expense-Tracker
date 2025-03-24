import { configureStore } from "@reduxjs/toolkit";
import msgReducer from "../features/msg/msgSlice";
import expenseReducer from "../features/dash/expenseSlice";

export const store = configureStore({
  reducer: {
    msgs: msgReducer,
    rows: expenseReducer,
    tags: expenseReducer,
    famRows: expenseReducer,
    users: msgReducer,
  },
});
export default store;
