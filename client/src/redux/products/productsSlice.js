import { createSlice } from "@reduxjs/toolkit";
import { getProductsActions } from "./productActions";

export const productsSlice = createSlice({
    name: 'products',
    initialState: { products: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsActions.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getProductsActions.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        }).addCase(getProductsActions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'oh oh i failed';
        });
    },
});

export default productsSlice.reducer;