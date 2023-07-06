/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accesstoken: localStorage.getItem("token") || null,
  profile: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setAccesstoken: (state, action) => {
      state.accesstoken = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile, setAccesstoken } = profileSlice.actions;
export default profileSlice.reducer;
