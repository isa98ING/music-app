import React from "react";
import classes from "./Button.module.css";

const UserButton = (props) => {
  
  return (
    <React.Fragment>
      <button
        type={props.type || "button"}
        className={`${classes.button} ${props.className}`}
        onClick={props.onClick}
      >
       {props.children}
      </button>
      
    </React.Fragment>
  );
};

export default UserButton;
