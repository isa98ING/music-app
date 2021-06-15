import React from "react";
import classes from "./Header.module.css";

import KpopButton from "./KpopButton/KpopButton";
import OpeningButton from "./OpeningButton/OpeningButton";
import JpopButton from "./JpopButton/JpopButton";
import VideogamesButton from "./VideogamesButton/VideogamesButton";
import Button from "../UI/Button/Button";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes["search-header"]}>
        <KpopButton />
        <OpeningButton />
        <JpopButton />
        <VideogamesButton />
      </div>
      <div className={classes["user-header"]}>
        <Button className={classes["help-button"]} />
        <Button className={classes["help-button"]} />
      </div>
    </div>
  );
};

export default Header;
