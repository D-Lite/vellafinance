// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'axios';
import { dispatch } from '../index';


const baseURL = 'https://fakestoreapi.com'

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    products: [],
    product: null,
    categories: [],
};

const slice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET PRODUCTS
        getProductsSuccess(state, action) {
            state.products = action.payload;
        },

        // GET CATEGORIES
        getCategoriesSuccess(state, action) {
            state.categories = action.payload;
        },

        // GET PRODUCT
        getProductSuccess(state, action) {
            state.product = action.payload;
        },


    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getProducts() {
    return async () => {
        try {
            const response = await axios.get(`${baseURL}/products`);
            dispatch(slice.actions.getProductsSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getCategories() {
    return async () => {
        try {
            const response = await axios.get(`${baseURL}/products/categories`);
            dispatch(slice.actions.getProductsSuccess(response.data.products));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getProduct(id: string) {
    return async () => {
        try {
            const response = await axios.get(`${baseURL}/products/${id}`);
            dispatch(slice.actions.getProductSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
