// lib/features/navigation/navigationSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
  isOpen: boolean;
  isFilterOpen: boolean;
}

const initialState: NavigationState = {
  isOpen: false,
  isFilterOpen: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    openNav: (state) => {
      state.isOpen = true;
    },
    closeNav: (state) => {
      state.isOpen = false;
    },
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleFilter: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },
    openFilter: (state) => {
      state.isFilterOpen = true;
    },
    closeFilter: (state) => {
      state.isFilterOpen = false;
    },
  },
});

// Export actions and selectors
export const {
  openNav,
  closeNav,
  toggleNav,
  toggleFilter,
  openFilter,
  closeFilter,
} = navigationSlice.actions;

export const selectNavIsOpen = (state: { navigation: NavigationState }) =>
  state.navigation.isOpen;
export const selectFilterIsOpen = (state: { navigation: NavigationState }) =>
  state.navigation.isFilterOpen;

export default navigationSlice.reducer;
