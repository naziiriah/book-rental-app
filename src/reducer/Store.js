import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Authentication/authSlice";
import  bookSlice  from "../features/Books/bookSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        books: bookSlice,
    }
})

