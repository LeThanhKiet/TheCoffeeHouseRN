const initState = {
    cart: [],
};

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state, action.payload],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
