import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historys: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistorys: (state, action) => {
      state.historys = action.payload;
    },
  },
});

export const { setHistorys } = historySlice.actions;
export default historySlice.reducer;
