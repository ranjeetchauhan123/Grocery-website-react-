import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
    cart: cartReducer,
  },
});

export default store;
