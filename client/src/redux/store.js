import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import productsReducer from './products/productsSlice';
import productDetailsReducer from './products/productDetailsSlice';

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const store = configureStore({
  reducer: {
    cart: cartSlice,
    getProducts: productsReducer,
    getProductDetails: productDetailsReducer
  },
  preloadedState: {
    cart: {
      cartItems: cartFromLocalStorage
    }
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
});

export default store;