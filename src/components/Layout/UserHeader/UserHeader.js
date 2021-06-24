import React, { useState } from "react";
import classes from "./UserHeader.module.css";
import Button from "../../UI/Button/Button";

const UserHeader = (props) => {
  const [open, setOpen] = useState(false);

  const helpHandler = () => {
    console.log("help");
  };
  const themeHandler = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <React.Fragment>
      <Button
        className={`${classes.help} ${classes["help-button"]}`}
        onFetch={helpHandler}
      />

      <Button className={classes["help-button"]} onFetch={themeHandler} />
    </React.Fragment>
  );
};

export default UserHeader;
