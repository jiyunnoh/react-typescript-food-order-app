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

const Input = (props: { input: InputType; label: string }) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
    </div>
}

export default Input;