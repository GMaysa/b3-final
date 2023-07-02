import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seatDetails: null,
  seatUpdateSeat: [],
};

const seatSlicer = createSlice({
  name: "seat",
  initialState,
  reducers: {
    setSeatDetails: (state, action) => {
      state.seatDetails = action.payload;
    },
    setUpdateSeat: (state, action) => {
      state.seatUpdateSeat = action.payload;
    },
  },
});

export const { setSeatDetails, setUpdateSeat } = seatSlicer.actions;

// export the global state / reducers
export default seatSlicer.reducer;
