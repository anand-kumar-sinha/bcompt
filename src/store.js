import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import drawerReducer from "./slices/drawerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    customDrawer: drawerReducer
  },
});

export default store;
