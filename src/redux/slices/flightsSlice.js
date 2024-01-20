import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightsAction";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
  filteredFlights: [],
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    filterFlights: (state, action) => {
      const { departure, destination, date } = action.payload;

      state.filteredFlights = state.flights.filter((flight) => {
        return (
          flight.departure.toLowerCase() === departure?.toLowerCase() &&
          flight.destination.toLowerCase() === destination?.toLowerCase() &&
          flight.date === date
        );
      });
    },
    sortFlightsByPrice: (state, action) => {
      const { sortBy } = action.payload;

      const sortedFlights = [...state.filteredFlights]; // Create a shallow copy of the flights array

      sortedFlights.sort((a, b) => {
        const priceA = parseInt(a.economicPrice.replace(" TL", ""), 10);
        const priceB = parseInt(b.economicPrice.replace(" TL", ""), 10);
        console.log(priceA, priceB);
        if (sortBy === "asc") {
          return priceA - priceB;
        } else if (sortBy === "desc") {
          return priceB - priceA;
        } else {
          return 0;
        }
      });
      state.filteredFlights = sortedFlights;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.flights = action.payload;
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
export const { filterFlights, sortFlightsByPrice } = flightsSlice.actions;
