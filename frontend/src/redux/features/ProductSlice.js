import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
};

const baseUrl = "http://localhost:5000/api/Products";

// Fetching data (GET)
export const getData = createAsyncThunk("getproduct", async () => {
    const { data } = await axios.get(baseUrl);
    return data.products;
});

// Add product (POST)
export const addProduct = createAsyncThunk("addProduct", async (productData) => {
    const { data } = await axios.post(baseUrl, productData);
    return data; // Assuming it returns the added product data
});

// Delete product (DELETE)
export const delProduct = createAsyncThunk("delProduct", async (productId) => {
    await axios.delete(`${baseUrl}/${productId}`);
    return productId; // Returning the ID of the deleted product to remove it from the store
});

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get products
        builder.addCase(getData.fulfilled, (state, action) => {
            state.products = action.payload;
        });

        // Add product
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload); // Adds the new product to the state
        });

        // Delete product
        builder.addCase(delProduct.fulfilled, (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload); // Removes the deleted product from the state
        });
    },
});

export default productSlice.reducer;
