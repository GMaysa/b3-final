import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  dataDetails: null,
};

const dataSlicer = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setDataDetails: (state, action) => {
      state.dataDetails = action.payload;
    },
  },
});


// setPosts and setPostDetails can be accessed in any files in this project
export const { setData, setDataDetails } = dataSlicer.actions;

// export the global state / reducers
export default dataSlicer.reducer;
