import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import couponReducer from "./couponSlice";
import ordersReducer from "./OrderSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    coupon: couponReducer,
    orders: ordersReducer,
  },
});

export default store;