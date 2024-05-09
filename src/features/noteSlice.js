import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    user: null,
  },
  reducers: {
    addNote: (state, action) => {
      state.user = action.payload;
    },
    delNote: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = noteSlice.actions;
// this export is called a selector, they allow you to pull information
export const selectUser = (state) => state.user.user;

export default noteSlice.reducer;
