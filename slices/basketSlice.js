import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [action.payload, ...state.items];
      console.log(state.items);
    },
    removeFromBasket: (state, action) => {
      state.items.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

// Calculates Total Price
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
