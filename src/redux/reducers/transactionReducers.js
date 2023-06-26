import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trans: null,
  transDetails: null,
};

const transSlicer = createSlice({
  name: "trans",
  initialState,
  reducers: {
    setTrans: (state, action) => {
      state.trans = action.payload;
    },
    setTransDetails: (state, action) => {
      state.transDetails = action.payload;
    },
  },
});

export const { setTrans, setTransDetails } = transSlicer.actions;

export default transSlicer.reducer;
