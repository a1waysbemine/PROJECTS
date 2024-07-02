import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: [],
    cartTotal: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const { name, code, selectedColor, selectedColorCode, price, quantity } =
                action.payload;
            const newCart = {
                id: state.carts.length > 0 ? state.carts[state.carts.length - 1].id + 1 : 1,
                name,
                code,
                selectedColor,
                selectedColorCode,
                price,
                quantity,
            };
            if (
                state.carts.find(
                    (item) =>
                        item.name === newCart.name && item.selectedColor === newCart.selectedColor
                )
            ) {
                alert('이미 장바구니에 추가된 상품입니다.');
                return;
            }
            state.carts.push(newCart);
            alert('장바구니에 추가되었습니다.');
        },
        removeCart: (state, action) => {
            state.carts = state.carts.filter((item) => item.id !== action.payload);
        },
        removeAll: (state) => {
            state.carts = [];
        },
        totalCart: (state) => {
            state.cartTotal = state.carts.reduce(
                (acc, curr) => acc + Number(curr.price * curr.quantity),
                0
            );
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const updateItem = state.carts.find((item) => item.id === id);
            if (updateItem) {
                updateItem.quantity = quantity;
            }
        },
        buyItem: (state, action) => {
            if (state.carts.length === 0) {
                alert('장바구니가 비어있습니다.');
                return;
            } else {
                alert('주문이 완료되었습니다.');
                state.carts = [];
            }
        },
    },
});

export const { addCart, removeCart, totalCart, removeAll, updateQuantity, buyItem } =
    cartSlice.actions;
export default cartSlice.reducer;
