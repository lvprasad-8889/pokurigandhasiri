import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  loggedIn: false,
  isAdmin: false,
  bloodDonorsList: [],
  userData: {},
  isLoading: false,
};

const pgtSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    logout(state, action) {
      localStorage.clear();
      state.loggedIn = false;
      state.isAdmin = false;
      state.userData = {};
    },
    initialLogin(state, action) {
      state.loggedIn = true;
    },
    onLogin(state, action) {
      state.loggedIn = true;
      state.userData = { ...action.payload };
    },
    setAdmin(state, action) {
      state.isAdmin = action.payload;
    },
    setBloodDonorsList(state, action) {
      state.bloodDonorsList = [...action.payload];
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const pgtSliceActions = pgtSlice.actions;

export const pgtReducer = pgtSlice.reducer;
