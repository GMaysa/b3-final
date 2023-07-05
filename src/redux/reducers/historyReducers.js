/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historys: [],
  historyDetail: null,
  historyFilter: [],
  historySearch: [],
  historyTicket: [],
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
    setHistoryFilter: (state, action) => {
      state.historyFilter = action.payload;
    },
    setHistorySearch: (state, action) => {
      state.historySearch = action.payload;
    },
    setHistoryTicket: (state, action) => {
      state.historyTicket = action.payload;
    },
  },
});

export const {
  setHistorys,
  setHistoryDetail,
  setHistoryFilter,
  setHistorySearch,
  setHistoryTicket,
} = historySlice.actions;
export default historySlice.reducer;
