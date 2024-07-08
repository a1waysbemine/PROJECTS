import { configureStore } from '@reduxjs/toolkit';
import support from './modules/supportSlice';
import auth from './modules/authSlice';
import cart from './modules/cartSlice';
import product from './modules/productSlice';
import about from './modules/aboutSlice';

export const store = configureStore({
    reducer: {
        support,
        auth,
        cart,
        product,
        about,
    },
});
