import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transDetails: null,
};

const transSlicer = createSlice({
  name: "trans",
  initialState,
  reducers: {
    setTransDetails: (state, action) => {
      state.transDetails = action.payload;
    },
  },
});

export const { setTransDetails } = transSlicer.actions;

export default transSlicer.reducer;
