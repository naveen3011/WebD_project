import { configureStore } from "@reduxjs/toolkit";
import storesReducer from "../features/storesSlice";

// redux store -- state of the app
const store = configureStore({
  reducer: {
    stores: storesReducer,
  },
});

export default store;
