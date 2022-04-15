import React, { useReducer } from "react";
import CartContext from "./cart-context";

type State = {
    items: string[],
    totalAmount: number
}

//TODO: item type
type Action =
    | { type: 'ADD', item: any }
    | { type: 'REMOVE', id: string }


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state: State, action: Action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = (props: { children: React.ReactNode }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    //TODO: item type
    const addItemToCartHandler = (item: any) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id: string) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

};

export default CartProvider;