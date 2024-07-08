import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    aboutCategory: 'BRAND STORY',
};

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        changeAboutCategory: (state, action) => {
            state.aboutCategory = action.payload;
        },
    },
});

export const { changeAboutCategory } = aboutSlice.actions;
export default aboutSlice.reducer;
