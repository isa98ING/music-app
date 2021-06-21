import React, { useState } from "react";

import classes from "./VideogamesButton.module.css";
import Button from "../../UI/Button/Button";

const VideogamesButton = (props) => {
  const [active, setActive] = useState(false);

  const genderHandler = () => {
    if (active === true) {
      setActive(false);
    } else {
      props.onMessage("videogames");
      setActive(true);
    }
  };

  let buttonClasses = `${classes["videogames-button"]}
  ${active ? classes["grow-button"] : ""}`;

  return (
    <Button
      key="videogames"
      id="videogames"
      name="Videogames"
      className={buttonClasses}
      onFetch={genderHandler}
    ></Button>
  );
};

export default VideogamesButton;
