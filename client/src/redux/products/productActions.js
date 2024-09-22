import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios';

export const getProductsActions = createAsyncThunk(
    'products/getProducts',
    async () => {
        const { data } = await axios.get('/api/products');
        return data;
    }
);

export const getProductDetailsActions = createAsyncThunk(
    'products/getProduct/Details',
    async (id) => {
        const { data } = await axios.get(`/api/products/${id}`);
        return data;
    }
);