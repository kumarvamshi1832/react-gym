import { createSlice } from "@reduxjs/toolkit";

  const cartSlice = createSlice({
    name: "cart",
    initialState: [],

    reducers: {
      //@ first reducers
      addtocart: (state, action) => {
          //action=>means client sent data and
          // state=> means it checks the item is present in cart or 
          // not if present action will be done like product increment or decrement
          //  if product not present means it will push to cart.

        const existingItem = state.find(
          (item) => item.name === action.payload.name
        );

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.push({
            ...action.payload,
            quantity: 1,//here if we set quantity 1 means in cart ishows 1 ,10 means 10 like so on...
          });
        }
      },// camma is important after every reducers.

      //@ second reducers
      removeCart: (state, action) => {
        let index = state.findIndex(
          (item) => item.name === action.payload //here im sending only index of product so no .name at end of it
           );
           state.splice(index, 1);
          },
          
      //@ third reducers    
      clearCart:()=>[],
      
      //@fourth reducers
      increaseQty: (state, action) => {
        const item = state.find(i => i.name === action.payload);
        if (item) item.quantity += 1;
      },
      
      //@fifth reducers
     decreaseQty: (state, action) => {
      const index = state.findIndex(i => i.name === action.payload);
      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          state.splice(index, 1); // remove item
          }
        }
      },
      }
    });

// export actions
export const { addtocart,removeCart, clearCart,increaseQty, decreaseQty} = cartSlice.actions;

// export reducer
export default cartSlice.reducer;