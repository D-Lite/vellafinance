import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

interface Rating {
    rate: number;
    count: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number; // Make quantity non-optional
    description: string;
    category: string;
    rating: Rating;
}


interface user {
    name: string;
    email: string;
    address: string;
}

interface CheckoutData {
    cart: Array<Product>;
    user: user;
    total: number;
}

const initialState: CheckoutData = {
    cart: [],
    user: {
        name: '',
        email: '',
        address: '',
    },
    total: 0,
};

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const itemInCart = state.cart.find((item: Product) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            state.total = state.cart.reduce((total: number, item: Product) => total + item.price * item.quantity, 0);
        },

        changeQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const item = state.cart.find((item: Product) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
            state.total = state.cart.reduce((total: number, item: Product) => total + item.price * item.quantity, 0);
        },

        checkOutCart: (state, action: PayloadAction<user>) => {
            state.user = action.payload;
        },

        clearCart: (state) => {
            state.cart = []
            state.user = {
                name: '',
                email: '',
                address: '',
            }
            state.total = 0
        },

        removeItem: (state, action: PayloadAction<number>) => {
            const updatedCart = state.cart.filter((item) => item.id !== action.payload);
            state.cart = updatedCart;
            state.total = state.cart.reduce((total: number, item: Product) => total + item.price * item.quantity, 0);
        },
    },
});

export const cartReducer = slice.reducer;
export const {
    addToCart,
    changeQuantity,
    removeItem,
    clearCart,
    checkOutCart,
} = slice.actions;

export default cartReducer;
