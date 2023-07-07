import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seatDetails: null,
  seatDetailsTwo: null,
  seatUpdateSeat: [],
};

const seatSlicer = createSlice({
  name: "seat",
  initialState,
  reducers: {
    setSeatDetails: (state, action) => {
      state.seatDetails = action.payload;
    },
    setSeatDetailsTwo: (state, action) => {
      state.seatDetailsTwo = action.payload;
    },
    setUpdateSeat: (state, action) => {
      state.seatUpdateSeat = action.payload;
    },
  },
});

export const { setSeatDetails, setUpdateSeat, setSeatDetailsTwo } =
  seatSlicer.actions;

// export the global state / reducers
export default seatSlicer.reducer;
