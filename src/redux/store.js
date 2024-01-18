import { configureStore } from "@reduxjs/toolkit";
import flightsSlice from "./slices/flightsSlice";

const store = configureStore({
  reducer: {
    flightsSlice
  },
  
});

export default store;