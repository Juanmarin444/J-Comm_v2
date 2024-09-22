import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const addToCartAction = createAsyncThunk(
    'cart/addToCart',
    async ( {id, qty}, { getState }) => {
        const { data } = await axios.get(`/api/products/${id}`);
        
        const item = {
            id: data._id,
            title: data.title,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        };
        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
        return item;
    },
);