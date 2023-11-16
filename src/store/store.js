import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./blog/blogSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        blog: blogSlice.reducer
    }
})