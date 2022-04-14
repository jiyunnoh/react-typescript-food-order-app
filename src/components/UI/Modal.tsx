import React, { MouseEventHandler } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props: { onClose: MouseEventHandler }) => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = (props: { children: React.ReactNode }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays')!;

const Modal = (props: { children: React.ReactNode, onClose: MouseEventHandler }) => {
    return <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
};

export default Modal;