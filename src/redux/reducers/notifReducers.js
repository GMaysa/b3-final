import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifs: [],
  filter: [],
  status: null,
};

const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    setNotifs: (state, action) => {
      state.notifs = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setNotifs, setFilter, setStatus } = notifSlice.actions;
export default notifSlice.reducer;
