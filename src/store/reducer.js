import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loggedIn: false,

}
const pgtSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {

    }
})

export const pgtSliceActions = pgtSlice.actions;

export const pgtReducer = pgtSlice.reducer;