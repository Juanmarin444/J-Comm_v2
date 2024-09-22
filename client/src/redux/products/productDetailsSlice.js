import { createSlice } from "@reduxjs/toolkit";
import { getProductDetailsActions } from "./productActions";

export const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState: { product: {} },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductDetailsActions.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getProductDetailsActions.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload;
        }).addCase(getProductDetailsActions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'no product details for you'
        });
    },
});

export default productDetailsSlice.reducer;