import React, { useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const [buttonActive, setButtonActive] = useState(false);

  let buttonClasses = `${classes.button} ${props.className} 
`;

  const fetchButton = (event) => {
    event.preventDefault();
    if (buttonActive === true) {
      console.log('desactived')
      setButtonActive(false);
    } else {
      console.log('actived')
      setButtonActive(true);
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
        { props.children}
      </button>
    </React.Fragment>
  );
};

export default Button;
