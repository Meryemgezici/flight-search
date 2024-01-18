import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightsAction";

const initialState ={
  flights: [],
  isLoading: true,
  isError: false,
  filteredFlights: [],
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    filterFlights: (
      state,
      action
    ) => {
      const { departure, destination, date } = action.payload;

      state.filteredFlights = state.flights.filter((flight) => {
        return (
          flight.departure.toLowerCase() === departure?.toLowerCase() &&
          flight.destination.toLowerCase() === destination?.toLowerCase() &&
          flight.date === date
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.flights= action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getFlights.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        alert("Üzgünüz, bir hata oluştu");
      });
  },
});

export default flightsSlice.reducer;
export const { filterFlights } = flightsSlice.actions;
