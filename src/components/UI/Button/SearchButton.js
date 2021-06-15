import React, { useState } from "react";
import classes from "./Button.module.css";

const SearchButton = (props) => {
  const [buttonActive, setButtonActive] = useState(false);
  let buttonClasses = `${classes.button} ${props.className} ${
    buttonActive ? classes["grow-button"] : ""
  }`;

  const animatedButtonHandler = (event) => {
    event.preventDefault();
    if(buttonActive===true){
      setButtonActive(false);
      console.log("I am desactivated");
      return;
    }
    setButtonActive(true);
    console.log("I am activated");
  };

  return (
    <React.Fragment>
      <button
        type={props.type || "button"}
        className={buttonClasses}
        onClick={animatedButtonHandler}
      >
        {buttonActive && props.name}{props.children}
      </button>
      
    </React.Fragment>
  );
};

export default SearchButton;
