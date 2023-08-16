import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './slices/cart'
import productReducer from './slices/product';

const reducer = combineReducers({
    cart: persistReducer({
        key: 'cart',
        storage,
    },
        cartReducer
    ),
    product: productReducer,
});

export default reducer;