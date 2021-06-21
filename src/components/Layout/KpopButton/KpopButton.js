import React, { useState } from "react";
import classes from "./KpopButton.module.css";
import Button from "../../UI/Button/Button";

const KpopButton = (props) => {
  const [active, setActive] = useState(false);

  const genderHandler = () => {
    if (active === true) {
      setActive(false);
    } else {
      props.onMessage("kpop");
      setActive(true);
    }
  };

  let buttonClasses = `${classes["kpop-button"]} ${
    active ? classes["grow-button"] : ""
  } `;
  
  return (
    <Button
      key="kpop"
      id="kpop"
      name="K-Pop"
      className={buttonClasses}
      onFetch={genderHandler}
    />
  );
};

export default KpopButton;
