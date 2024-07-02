import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { changeCategory } = productSlice.actions;
export default productSlice.reducer;
