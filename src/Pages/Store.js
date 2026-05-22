import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import cuponReducer from "./CouponSlice";
import ordersReducer from "./OrderSlice";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    cuponDetails: cuponReducer,
    orders: ordersReducer,
  },
});

export default store;