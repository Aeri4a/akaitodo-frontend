import { createSlice } from '@reduxjs/toolkit';
import * as authThunks from './Auth.thunks';
import buildExtraReducers from './Auth.extraReducers';

const initialState = {
    isAuthenticated: false,
    user: null,
};

// reducers for methods
// extraReducers for thunks
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: buildExtraReducers,
});

export const authReducer = slice.reducer;
export const authSelector = (state) => state.auth;
export const authActions = { ...slice.actions, ...authThunks };
