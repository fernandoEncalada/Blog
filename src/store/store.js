import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./blog/blogSlice";

export const store = configureStore({
    reducer: {
        blog: blogSlice.reducer
    }
})