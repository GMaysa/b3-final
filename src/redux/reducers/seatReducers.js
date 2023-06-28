import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seatDetails: null,
};

const seatSlicer = createSlice({
  name: "seat",
  initialState,
  reducers: {
    setSeatDetails: (state, action) => {
      state.seatDetails = action.payload;
    },
  },
});

export const { setSeatDetails } = seatSlicer.actions;

// export the global state / reducers
export default seatSlicer.reducer;
