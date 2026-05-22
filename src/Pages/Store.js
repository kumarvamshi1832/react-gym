import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import cuponReducer from "./CouponSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cuponDetails: cuponReducer,
  },
});

export default store;