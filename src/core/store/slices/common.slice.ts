import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommonStateTypes } from "../types/CommonStateTypes";

// Define the initial state using that type
const initialState = {
  isDrawerOpen: true,
} as CommonStateTypes;

export const commonSlice = createSlice({
  name: "common",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const { setIsDrawerOpen } = commonSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default commonSlice.reducer;
