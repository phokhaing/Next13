import { createSlice } from "@reduxjs/toolkit";

export const themeService = createSlice({
  name: "theme",
  initialState: {
    loading: false,
    pageTitle: "Dashboard",
    topbar: "#0F4FA1",
  },

  reducers: {
    setTopbar: (state, { payload }) => {
      state.loading = false;
      state.topbar = payload;
    },
  },
});

// export const theme = (state) => state.theme;
export const { setTopbar } = themeService.actions;
export default themeService.reducer;
