import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: 'upsc',
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setvalue: (state, action) => {
      state.drawer = action.payload;
    },
  },
});


export default drawerSlice.reducer;
