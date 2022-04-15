import React from "react";

const CartContext = React.createContext({
    items: [{id: '', name: '', amount: 0, price: 0}],
    totalAmount: 0,
    addItem: (_item: {}) => { },
    removeItem: (_id: string) => { }
});

export default CartContext;