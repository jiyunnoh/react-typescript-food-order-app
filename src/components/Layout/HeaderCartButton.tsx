import React, { MouseEventHandler, useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props: { onClick: MouseEventHandler }) => {
    const cartCtx = useContext(CartContext);

    //TODO: item type
    const numberOfCartItmes = cartCtx.items.reduce<number>((curNumber, item: any ) => {
        return curNumber + item.amount
    }, 0);
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItmes}</span>
    </button>
};

export default HeaderCartButton;