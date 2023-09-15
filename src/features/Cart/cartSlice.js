import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItem: [],
  },
  reducers: {
    showMiniCart(state, action) {
      state.showMiniCart = true;
    },

    hideMiniCart(state, action) {
      state.showMiniCart = false;
    },

    addToCart(state, action) {
      // newItem = {id, product, quantity} (id thực chất cũng là productId, tách ta để dễ tra cứu)
      const newItem = action.payload;
      const index = state.cartItem.findIndex((x) => x.id === newItem.id);

      // Check if product is available in cart
      if (index >= 0) {
        // Increase quantity
        state.cartItem[index].quantity += newItem.quantity;
      } else {
        // Add to cart
        state.cartItem.push(newItem);
      }
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItem.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItem[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== idNeedToRemove
      );
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart } = actions; //name export
export default reducer; //default export
