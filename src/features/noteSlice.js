import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    list: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    delNote: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    updateANote: (state, action) => {
      // use index value but remove it freom the array then splaice
      const getPayLoad = action.payload.indexValue;
      const removeKey = (obj, keyToRemove) => {
        return Object.fromEntries(
          Object.entries(obj).filter(([key]) => key !== keyToRemove)
        );
      };

      const newObj = removeKey(action.payload, "indexValue");
      state.list.splice(getPayLoad, 1, newObj);
    },
  },
});

export const { addNote, delNote, updateANote } = noteSlice.actions;
// this export is called a selector, they allow you to pull information
export const selectNotes = (state) => state.note.list;

export default noteSlice.reducer;
