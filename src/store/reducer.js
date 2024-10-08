import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  loggedIn: false,
  isAdmin: false,
  bloodDonorsList: [],
  userData: {},
  isLoading: false,
  enquiries: [],
  members: []
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
      state.bloodDonorsList = [];
      state.enquiries = [];
      state.userData = {};
      state.members = [];
    },
    initialLogin(state, action) {
      state.loggedIn = true;
    },
    onLogin(state, action) {
      state.loggedIn = true;
      state.userData = action.payload.data;
    },
    setAdmin(state, action) {
      state.isAdmin = action.payload.isAdmin;
      state.enquiries = action.payload.enquiries;
    },
    setBloodDonorsList(state, action) {
      if (action.payload.length >= 1) {
        state.bloodDonorsList = [...action.payload];
      } else {
        state.bloodDonorsList = [];
      }
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setMembers (state, action) {
      state.members = [...action.payload]
    }
  },
});

export const pgtSliceActions = pgtSlice.actions;

export const pgtReducer = pgtSlice.reducer;
