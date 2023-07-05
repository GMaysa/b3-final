import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booking: [],
  bookingDetails: {},
};

const bookingSlicer = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.booking = action.payload;
    },
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
  },
});

// setBooking and setBookingDetails can be accessed in any files in this project
export const { setBooking, setBookingDetails } = bookingSlicer.actions;

// export the global state / reducers
export default bookingSlicer.reducer;
