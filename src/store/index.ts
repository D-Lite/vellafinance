import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer';
import { persistStore } from 'redux-persist';


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
    }
})

const persister = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

export { store, persister, dispatch, useSelector, useDispatch };