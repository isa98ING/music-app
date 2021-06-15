import React, { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const [cardClicked, setCardClicked] = useState(false);
  

  let cardClasses = `${classes.card}  ${
    cardClicked ? classes["card-opened"] : ""
  }`;

  const openCardHandler = (event) => {
    event.preventDefault();
    if (cardClicked == true) {
      setCardClicked(false);
      console.log("I am desactivated");
      return;
    }
    setCardClicked(true);
    console.log("I am activated");
  };
  return (
    <React.Fragment>
      <div onClick={openCardHandler} className={cardClasses}>
        <div className={classes["inner-card"]}>
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
