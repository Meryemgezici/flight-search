import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFlights = createAsyncThunk("getFlights", async () => {
  try {
    const res = await axios.get("http://localhost:3040/flights");
    return res.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
});
