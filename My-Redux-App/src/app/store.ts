import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/couterSlice";
import productReducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
