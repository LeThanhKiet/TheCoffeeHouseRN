import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },

        removeFromCart: (state, action) => {
            let newCart = [...state.items];
            let itemIdToRemove = state.items.findIndex((item) => item.id === action.payload.id);
            if (itemIdToRemove) {
                newCart.splice(itemIdToRemove, 1);
            } else {
                console.log(`Không xóa được sản phẩm: (id: ${action.payload.id}) vì nó không tồn tại trong cart`);
            }
            state.items = newCart;
        },

        emptyCart: (state, action) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => {
    state.cart.items.reduce((total, item) => {
        total + item.price, 0;
    });
};

export default cartSlice.reducer;
