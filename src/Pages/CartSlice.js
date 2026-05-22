import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {

    // ADD TO CART
    addtocart: (state, action) => {

      let existingitem = state.find(
        (item) => item.name === action.payload.name
      );

      if (existingitem) {
        existingitem.quantity += 1;
      }

      else {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // CLEAR CART
    clearcart: () => {
      return [];
    },

    // INCREASE QTY
    increaseQty: (state, action) => {

      const item = state.find(
        (item) => item.name === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // DECREASE QTY
    decreaseQty: (state, action) => {

      const index = state.findIndex(
        (item) => item.name === action.payload
      );

      if (index !== -1) {

        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        }

        else {
          state.splice(index, 1);
        }
      }
    },

    // REMOVE ITEM
    removeCart: (state, action) => {

      const index = state.findIndex(
        (item) => item.name === action.payload
      );

      if (index !== -1) {
        state.splice(index, 1);
      }
    },

  },
});

export const {
  addtocart,
  clearcart,
  increaseQty,
  decreaseQty,
  removeCart,
} = cartslice.actions;

export default cartslice.reducer;