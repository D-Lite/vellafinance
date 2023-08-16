// third-party
import { createSlice, current } from '@reduxjs/toolkit';

// project imports
import axios from 'axios';
import { dispatch } from '../index';
import Cart from '../../pages/Cart';


interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity?: number;
    description: string;
    category: string;
}
// ----------------------------------------------------------------------


const slice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // console.log(state.cart)
            // state.cart = [];
            console.log('before', current(state.cart))
            // const itemInCart = state.cart.find((item: Product) => item.id === action.payload.id);
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            console.log('after', current(state.cart))

            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }

        },

        changeQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            item.quantity = action.payload.quantity;
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        },
    }
});


export const cartReducer = slice.reducer;
export const {
    addToCart,
    changeQuantity,
    removeItem,
} = slice.actions;