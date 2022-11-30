import { createSlice } from "@reduxjs/toolkit";

export const themeService = createSlice({
  name: "theme",
  initialState: {
    loading: false,
    pageTitle: "Dashboard",
    topBar: {
      backgroundColor: "#0F4FA1",
    },
    leftBar: {
      backgroundColor: "#0F4FA1",
      textColor: "#C49F07",
    },
  },

  reducers: {
    setTopbar: (state, { payload }) => {
      state.loading = false;
      state.topBar = payload;
    },
  },
});

export const themeSetting = (state) => state.theme;
export const { setTopbar } = themeService.actions;
export default themeService.reducer;
