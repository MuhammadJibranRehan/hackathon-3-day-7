import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './Reducers';

// create a context
const Cart = createContext();

const CartContext = ({ children }) => {

    // const [state, dispatch] = useReducer(reducer,initialState);
    const [state, dispatch] = useReducer(cartReducer, { cart: [], });



    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    );
};

// custom Hook
export const useCartContext = () => {
    return useContext(Cart);
}


export default CartContext;




