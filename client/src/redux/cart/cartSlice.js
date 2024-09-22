import { createSlice } from '@reduxjs/toolkit';
import { addToCartAction } from './cartActions';


export const cartSlice = createSlice({
    name: 'cart',
    initialState: { cartItems: [] },
    reducers: {
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addToCartAction.fulfilled, (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                state.cartItems = state.cartItems.map((item) => 
                    item.id === existingItem.id ? action.payload : item
                );
            } else {
                state.cartItems.push(action.payload);
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));

        }).addCase(addToCartAction.rejected, (state, action) => {
            state.error = action.payload || 'oh i failed ima sucker'
        });
    },
});

export const { removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;