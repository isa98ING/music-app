import React from "react";
import classes from "./Header.module.css";

import KpopButton from "./KpopButton/KpopButton";
import OpeningButton from "./OpeningButton/OpeningButton";
import JpopButton from "./JpopButton/JpopButton";
import VideogamesButton from "./VideogamesButton/VideogamesButton";
import UserButton from "../UI/Button/UserButton";
//import { useState } from "react/cjs/react.production.min";

const Header = (props) => {
  const messageHandler = (message) => {
    console.log(message,'from header');
    props.onGender(message);
  };

  return (
    <div className={classes.header}>
      <div className={classes["search-header"]}>
        <KpopButton onMessage={messageHandler} />
        <OpeningButton onMessage={messageHandler} />
        <JpopButton onMessage={messageHandler} />
        <VideogamesButton onMessage={messageHandler} />
      </div>
      <div className={classes["user-header"]}>
        <UserButton className={classes["help-button"]} />
        <UserButton className={classes["help-button"]} />
      </div>
    </div>
  );
};

export default Header;
