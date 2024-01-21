import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightsAction";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
  filteredFlights: [],
};

const parseFlightTime = (flightTimeString) => {
  const [hours, minutes] = flightTimeString.split(" s ");

  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    filterFlights: (state, action) => {
      const { departureCode, destinationCode, date ,destinationFlights,departureFlights} = action.payload;

      state.filteredFlights = state.flights.filter((flight) => {
        return (
          flight.departureCode.toLowerCase() === departureCode?.toLowerCase() &&
          flight.destinationCode.toLowerCase() === destinationCode?.toLowerCase() &&
          flight.date === date &&
          flight.destinationFlights === destinationFlights &&
          flight.departureFlights === departureFlights
        );
      });
    },
    sortFlights: (state, action) => {
      const { sortBy } = action.payload;

      const sortedFlights = [...state.filteredFlights]; 

      sortedFlights.sort((a, b) => {
        const priceA = parseInt(a.economicPrice.replace(" TL", ""), 10);
        const priceB = parseInt(b.economicPrice.replace(" TL", ""), 10);
        const departureTimeA = new Date(`2000/01/01 ${a.departureTime}`);
        const departureTimeB = new Date(`2000/01/01 ${b.departureTime}`);
        const destinationTimeA = new Date(`2000/01/01 ${a.destinationTime}`);
        const destinationTimeB = new Date(`2000/01/01 ${b.destinationTime}`);
        const flightTimeA = parseFlightTime(a.flightTime);
        const flightTimeB = parseFlightTime(b.flightTime);

        if (sortBy === "Ücrete göre artan") {
          return priceA - priceB;
        } else if (sortBy === "Ücrete göre azalan") {
          return priceB - priceA;
        } else if (sortBy === "Kalkış saati artan") {
          return departureTimeA - departureTimeB;
        } else if (sortBy === "Kalkış saati azalan") {
          return departureTimeB - departureTimeA;
        } else if (sortBy === "Varış saati artan") {
          return destinationTimeA - destinationTimeB;
        } else if (sortBy === "Varış saati azalan") {
          return destinationTimeB - destinationTimeA;
        }
        if (sortBy === "Uçuş süresi artan") {
          return flightTimeA - flightTimeB;
        } else if (sortBy === "Uçuş süresi azalan") {
          return flightTimeB - flightTimeA;
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
export const { filterFlights, sortFlights } = flightsSlice.actions;
