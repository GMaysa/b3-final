import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payconfirmDetails: null,
};

const payconfirmSlicer = createSlice({
  name: "payconfirm",
  initialState,
  reducers: {
    setPayconfirm: (state, action) => {
      state.payconfirmDetails = action.payload;
    },
  },
});

export const { setPayconfirm } = payconfirmSlicer.actions;

export default payconfirmSlicer.reducer;
