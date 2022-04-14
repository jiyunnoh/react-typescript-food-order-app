import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props: { children: React.ReactNode }) => {
    const addItemToCartHandler = (_item: string) => {

    };

    const removeItemFromCartHandler = (_id: string) => {

    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

};

export default CartProvider;