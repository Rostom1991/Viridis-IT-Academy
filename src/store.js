import { configureStore } from "@reduxjs/toolkit";
import academyReducer from "./redux/academySlice";
import userReducer from "./redux/userSlice";

const store = configureStore({
  reducer: {
    academy: academyReducer,
    user: userReducer,
  },
});
export default store;
