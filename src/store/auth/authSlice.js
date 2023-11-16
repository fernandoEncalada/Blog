import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        token: null,
        username: null,
        displayName: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state, { payload }) => {
            state.status = 'authenticated';
            state.token = payload.token; 
            state.username = payload.username;
            console.log(state.token);
            console.log(state.username);
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.token = null; 
            state.username = null;
            state.displayName = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});

// Action creators functions
export const { login, logout, checkingCredentials } = authSlice.actions;