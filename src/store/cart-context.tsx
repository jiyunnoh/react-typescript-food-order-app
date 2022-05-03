import React from "react";

//TODO: create Item type 

const CartContext = React.createContext({
    items: [{ id: '', name: '', amount: 0, price: 0 }],
    totalAmount: 0,
    addItem: (_item: {}) => { },
    removeItem: (_id: string) => { },
    clearCart: () => { }
});

export default CartContext;