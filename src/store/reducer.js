import { createSlice } from "@reduxjs/toolkit";
import {useNavigate} from 'react-router-dom'


const initialState = {
    loggedIn: false,
    isAdmin: false,
    bloodDonorsList: []
}
const pgtSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        logout(state, action) {
            localStorage.clear();
            state.loggedIn = false;
        },
        initialLogin(state, action) {
            state.loggedIn = true
        }

    }
})

export const pgtSliceActions = pgtSlice.actions;

export const pgtReducer = pgtSlice.reducer;