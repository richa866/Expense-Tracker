import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  msgs: [],
  users: "",
};

export const msgSlice = createSlice({
  name: "msgs",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
    addMsg: (state, action) => {
      const msg = {
        id: nanoid(),
        text: action.payload,
        //action.payload refers to the data that an action carries to the reducer.
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      state.msgs.push(msg);
    },
  },
});
export const { addMsg, setUser } = msgSlice.actions;
export default msgSlice.reducer;
