import React, { useRef } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props: { onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => {
const nameInputRef = useRef<HTMLInputElement>(null);
const streetInputRef = useRef<HTMLInputElement>(null);
const postalCodeInputRef = useRef<HTMLInputElement>(null);
const cityInputRef = useRef<HTMLInputElement>(null);

    const confirmHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const enteredName = nameInputRef.current!.value;
        const enteredStreet = streetInputRef.current!.value;
        const enteredPostalCode = postalCodeInputRef.current!.value;
        const enteredCity = cityInputRef.current!.value;
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
            </div>
            <div className={classes.actions}>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;