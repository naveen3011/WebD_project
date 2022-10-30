import { createSlice } from "@reduxjs/toolkit";
import data from "../initialData/data";
// reducers
const initialState = {
  stores: data,
};

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    add(state, action) {
      state.stores.push({ id: state.stores.length + 1, ...action.payload });
      return state;
    },
    remove(state, action) {
      state.stores = state.stores.filter((item) => item.id !== action.payload);
      return state;
    },
    update(state, action) {
      state.stores = state.stores.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...action.payload.data };
        }
        return item;
      });
      return state;
    },
  },
});

export const { add, remove, update } = storesSlice.actions;

export default storesSlice.reducer;
