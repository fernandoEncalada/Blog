import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        token: null,
        user: null,
        displayName: null,
        errorMessage: undefined,
    },
    reducers: {
        checkingCredentials: (state) => {
            state.status = 'checking';
            state.user = null;
            state.errorMessage = undefined;
        },
        updateCredentials: ( state ) => {
            state.status = 'authenticated';
        },
        login: ( state, { payload }) => {
            state.status = 'authenticated';
            state.token = payload.token; 
            state.user = payload.username;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.token = null; 
            state.user = null;
            state.errorMessage = payload;
        },
        clearErrorMessage: ( state ) => {
            state.errorMessage = undefined;
        }

    }
});

// Action creators functions
export const { login, logout, checkingCredentials, clearErrorMessage, updateCredentials } = authSlice.actions;