import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transDetails: null,
  transDetailsVA: null,
  transDetailsGo: null,
};

const transSlicer = createSlice({
  name: "trans",
  initialState,
  reducers: {
    setTransDetails: (state, action) => {
      state.transDetails = action.payload;
    },
    setTransVADetails: (state, action) => {
      state.transDetailsVA = action.payload;
    },
    setTransGoDetails: (state, action) => {
      state.transDetailsGo = action.payload;
    },
  },
});

export const { setTransDetails, setTransVADetails, setTransGoDetails } =
  transSlicer.actions;

export default transSlicer.reducer;
