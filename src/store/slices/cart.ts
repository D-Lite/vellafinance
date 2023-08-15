import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from '../index';
import axios from 'axios';

const getDate = () => {
    const date = new Date();
    return date.toLocaleString().split(",")[0];
}

const initialState = {
    error: null,
    checkout: {
        step: 0,
        products: [],
        subtotal: 0,
        total: 0,
        billing: null,
        payment: {
            type: 'free',
            method: 'cod',
            card: ''
        }
    }
}

const baseURL = 'https://fakestoreapi.com'

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload;
        },

        addProductSuccess(state, action) {
            state.checkout.products = action.payload.products;
            state.checkout.subtotal += action.payload.subtotal;
            state.checkout.total += action.payload.total;
        },

        removeProductSuccess(state, action) {
            state.checkout.products = action.payload.products;
            state.checkout.subtotal += -action.payload.subtotal;
            state.checkout.total += -action.payload.total
        },
        // SET BILLING ADDRESS
        setBillingAddressSuccess(state, action) {
            state.checkout.billing = action.payload.billing;
        },

        // SET PAYMENT METHOD
        setPaymentMethodSuccess(state, action) {
            state.checkout.payment = {
                ...state.checkout.payment,
                method: action.payload.method
            };
        },

        // SET PAYMENT CARD
        setPaymentCardSuccess(state, action) {
            state.checkout.payment = {
                ...state.checkout.payment,
                card: action.payload.card
            };
        },

        // RESET CART
        resetCardSuccess(state) {
            state.checkout = initialState.checkout;
        }
    }
})


export default slice.reducer;

// ----------------------------------------------------------------------
export function addProduct(productId: string, quantity: string) {
    return async () => {
        try {
            const response = await axios.post(`${baseURL}/cart`,
                {
                    body: JSON.stringify(
                        {
                            userId: 5,
                            date: getDate(),
                            products: [{ productId, quantity }]
                        }
                    )
                });
            dispatch(slice.actions.addProductSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function removeProduct(id: string, products: object) {
    return async () => {
        try {
            const response = await axios.post('/api/cart/remove', { id, products });
            dispatch(slice.actions.removeProductSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}