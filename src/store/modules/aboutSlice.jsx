import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'BRAND STORY',
};

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        changeAboutCategory: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const { changeAboutCategory } = aboutSlice.actions;
export default aboutSlice.reducer;
