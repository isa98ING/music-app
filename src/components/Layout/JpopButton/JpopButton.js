import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import classes from "./JpopButton.module.css";

const JpopButton = (props) => {
  const [active, setActive] = useState(false);

  const genderHandler = () => {
    if (active === true) {
      setActive(false);
    } else {
      props.onMessage("jpop");
      setActive(true);
    }
  };

  let buttonClasses = `${classes["jpop-button"]} ${props.className} ${
    active ? classes["grow-button"] : ""
  }`;

  return (
    <Button
      key="jpop"
      id="jpop"
      name="J-pop"
      className={buttonClasses}
      onFetch={genderHandler}
    />
  );
};
export default JpopButton;
