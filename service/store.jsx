import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/themeService";

const rootReducer = combineReducers({
  theme: themeSlice,
});

export default configureStore({
  reducer: rootReducer,
});
