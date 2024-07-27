import { createSlice } from '@reduxjs/toolkit';
const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const existingCartItem = state.find(item => item.id === product.id);
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });0
      }
    },
      updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeCartItem: (state, action) => {
      const id = action.payload;
      return state.filter(item => item.id !== id);
    }
  },
});
export const { addToCart, updateCartItemQuantity, removeCartItem } = CartSlice.actions;
export default CartSlice.reducer;

export const selectCart = (state) => state.cart;
