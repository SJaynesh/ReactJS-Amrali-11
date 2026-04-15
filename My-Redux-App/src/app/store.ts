import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/couterSlice";

export const store = configureStore({
    reducer: counterReducer
});

export type RootState = ReturnType<typeof store.getState>