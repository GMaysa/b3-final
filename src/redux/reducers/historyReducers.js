import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historys: [],
  historyDetail: null,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistorys: (state, action) => {
      state.historys = action.payload;
    },
    setHistoryDetail: (state, action) => {
      state.historyDetail = action.payload;
    },
  },
});

export const { setHistorys, setHistoryDetail } = historySlice.actions;
export default historySlice.reducer;
