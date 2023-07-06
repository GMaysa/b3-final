import { createSlice } from "@reduxjs/toolkit";

// disini expor ke global/
const initialState = {
  token: localStorage.getItem("token") || null,

  isLoggedIn: !!localStorage.getItem("token"),
  user: null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        console.log(action.payload);
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
        console.log(action.payload);
      }
      state.token = action.payload;
      // mengisi token di local storage
    },
    setIsLogeedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
// dari contohnya state action dari post mas reza

export const { setIsLogeedIn, setToken, setUser } = authSlicer.actions;

export default authSlicer.reducer;