import { configureStore } from '@reduxjs/toolkit';
import {pgtReducer} from './reducer';

export const store = configureStore({
    reducer: pgtReducer
})