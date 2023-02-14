import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSplice from "./searchSplice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSplice,
  },
});
export default store;
