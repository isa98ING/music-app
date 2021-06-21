import React, { useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const [buttonActive, setButtonActive] = useState(false);

  let buttonClasses = `${classes.button} ${props.className} 
`;

  const fetchButton = (event) => {
    event.preventDefault();
    if (buttonActive === true) {
      setButtonActive(false);
      console.log("I am desactivated");
    } else {
      setButtonActive(true);
      console.log("I am activated");
    }
    props.onFetch();
  };

  return (
    <React.Fragment>
      <button
        type={props.type || "button"}
        className={buttonClasses}
        onClick={fetchButton}
      >
        {buttonActive && props.name} {props.children}
      </button>
    </React.Fragment>
  );
};

export default Button;
