
export const cartReducer = (state, action) => {

    // if (action.type === "CLEAR_CART") {
    //     return { ...state, cart: [] };
    //   }

    switch (action.type) {

        case "ADD_TO_CART":
            {
                const findProductInCart = state.cart.find((curElem) => curElem._id === action.payload._id);

                if (findProductInCart) {
                    const updatedCart = state.cart.map((curElem) => {
                        if (curElem._id === action.payload._id) {
                            return { ...curElem, quantity: curElem.quantity + 1 };
                        }
                        return curElem;
                    });

                    return { ...state, cart: updatedCart };
                }


                return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
            }


        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((curElem) => curElem._id !== action.payload._id) };

        case "INCREMENT":
            {
                const updatedCart = state.cart.map((curElem) => {
                    if (curElem._id === action.payload._id) {
                        return { ...curElem, quantity: curElem.quantity + 1 };
                    }
                    return curElem;
                });

                return { ...state, cart: updatedCart };
            }

        case "DECREMENT":
            {
                const updatedCart = state.cart.map((curElem) => {
                    if (curElem._id === action.payload._id && curElem.quantity > 1) {
                        return { ...curElem, quantity: curElem.quantity - 1 };
                    }
                    return curElem;
                });
                // .filter((curElem) => curElem.quantity !== 0);        oi sob curElem dekhabe j gular quantity zero na
                return { ...state, cart: updatedCart };

            }


        default:
            return state;
    }
};

