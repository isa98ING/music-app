import React, { useState, useContext } from "react";
import classes from "./UserHeader.module.css";
import Button from "../../UI/Button/Button";
import { ThemeContext } from "../../../context/ThemeContext";

const UserHeader = (props) => {
  const cartCtx = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const helpHandler = () => {
    console.log("help");
  };
  const openMenuHandler = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <React.Fragment>
      <div className={classes['help-menu']}>
        <Button className={classes["help-button"]} onFetch={helpHandler} />
        <Button className={classes["help-button"]} onFetch={openMenuHandler} />
      </div>

      {open && <div className={classes["theme-menu"]}>
        <ul>
          <li>
            <Button className={classes["help-button"]} onFetch={() => cartCtx.themeHandler('colorful')} />
          </li>
          <li>
            <Button className={classes["help-button"]} onFetch={() => cartCtx.themeHandler('neko')} />
          </li>
          <li>
            <Button className={classes["help-button"]} onFetch={() => cartCtx.themeHandler('light')} />
          </li>
          <li>
            <Button className={classes["help-button"]} onFetch={() => cartCtx.themeHandler('dark')} />
          </li>
        </ul>
      </div>}
    </React.Fragment>
  );
};

export default UserHeader;
