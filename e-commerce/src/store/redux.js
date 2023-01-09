import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    products: productSlice.reducer,
  },
});

export default store;
