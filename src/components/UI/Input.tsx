import React from "react";
import classes from "./Input.module.css";

interface InputType {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
}

// TODO: ref type..
const Input = React.forwardRef((props: { input: InputType; label: string}, ref: any) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;