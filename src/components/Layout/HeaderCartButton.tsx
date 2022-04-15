import React, { MouseEventHandler, useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props: { onClick: MouseEventHandler }) => {
    const [btnIsHighlighted, setBtnInHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItmes = items.reduce((curNumber, item: { amount: number }) => {
        return curNumber + item.amount
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnInHighlighted(true);

        const timer = setTimeout(() => {
            setBtnInHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItmes}</span>
    </button>
};

export default HeaderCartButton;