import { createSlice } from "@reduxjs/toolkit";
import { Coupons } from "./Coupon";

const CouponSlice = createSlice({
  name: "cupon",

  initialState: {
    code: "",
    discount: 0,
    applied: false,
    message: "",
  },

  reducers: {

    applyCupon: (state, action) => {

      const finalCuponCode =
        action.payload.toUpperCase();

      if (finalCuponCode in Coupons) {

        state.code = finalCuponCode;

        state.discount =
          Coupons[finalCuponCode];

        state.applied = true;

        state.message =
          `Coupon "${finalCuponCode}" applied! You got ${Coupons[finalCuponCode]}% off.`;

      } else {

        state.code = "";
        state.discount = 0;
        state.applied = false;
        state.message =
          "Invalid coupon code.";

      }
    },

    resetCoupon: (state) => {

      state.code = "";
      state.discount = 0;
      state.applied = false;
      state.message = "";

    },

  },
});

// Export actions
export const {
  applyCupon,
  resetCoupon,
} = CouponSlice.actions;

// Export reducer
export default CouponSlice.reducer;