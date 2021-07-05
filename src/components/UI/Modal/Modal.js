import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

import classes from "./Modal.module.css";


const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <h2>Ups! There is a problem...</h2>
        {props.children}
      </div>
      <button
        type={props.type || "button"}
        className={classes.button}
        onClick={props.onClose}
      > Close </button>
    </div>
  );
};


const portalElement = document.getElementById("overlays");

export const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;