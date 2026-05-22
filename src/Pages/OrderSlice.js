import { createSlice } from "@reduxjs/toolkit";

const loadOrders = () => {
  return JSON.parse(localStorage.getItem("orders")) || [];
};

const orderSlice = createSlice({
  name: "orders",
  initialState: loadOrders(),
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);

      // 🔥 sync with localStorage
      localStorage.setItem("orders", JSON.stringify(state));
    },

    clearOrders: () => {
      localStorage.removeItem("orders");
      return [];
    },
  },
});

export const { addOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;