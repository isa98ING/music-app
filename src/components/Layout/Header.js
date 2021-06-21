import React from "react";
import classes from "./Header.module.css";

import KpopButton from "./KpopButton/KpopButton";
import OpeningButton from "./OpeningButton/OpeningButton";
import JpopButton from "./JpopButton/JpopButton";
import VideogamesButton from "./VideogamesButton/VideogamesButton";
import Button from "../UI/Button/Button";

const Header = (props) => {
  const genreHandler = (genre) => {
    props.onGenre(genre);
  };
  const helpHandler = () => {
    console.log("this is for help");
  };
  const themeHandler = () => {
    console.log("Choose Theme");
  };

  return (
    <div className={classes.header}>
      <div className={classes["search-header"]}>
        <KpopButton onMessage={genreHandler} />
        <OpeningButton onMessage={genreHandler} />
        <JpopButton onMessage={genreHandler} />
        <VideogamesButton onMessage={genreHandler} />
      </div>
      <div className={classes["user-header"]}>
        <Button className={classes["help-button"]} onFetch={helpHandler} />
        <Button className={classes["help-button"]} onFetch={themeHandler} />
      </div>
    </div>
  );
};

export default Header;
