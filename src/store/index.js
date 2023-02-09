import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
import { uiSlice } from "./ui-slice";

export const store = configureStore({
  reducer: {ui: uiSlice.reducer, cart: cartSlice.reducer}
})