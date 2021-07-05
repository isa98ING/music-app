import React, { useState, useContext } from "react";
import classes from "./UserHeader.module.css";
import Button from "../../UI/Button/Button";
import { ThemeContext } from "../../../context/ThemeContext";

import { ModalInfo } from "../../UI/Modal/ModalUser";

const UserHeader = () => {
  const cartCtx = useContext(ThemeContext);

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    (openModal) ? setOpenModal(false) : setOpenModal(true);
  };
  const openMenuHandler = () => {
    (open) ? setOpen(false) : setOpen(true);

  }

  return (
    <React.Fragment>
      <div className={classes['help-menu']}>
        <Button className={`${classes["help-button"]} ${classes['help-button-color']}`} onFetch={modalHandler} />
        {openModal && <ModalInfo onClose={modalHandler}></ModalInfo>}
        <Button className={`${classes["help-button"]} ${classes['help-button-color']}`} onFetch={openMenuHandler} />
      </div>

      {open && <div className={classes["theme-menu"]}>
        <ul>
          <li>
            <Button className={`${classes["help-button"]} ${classes.colorfulBtn}`} onFetch={() => cartCtx.themeHandler('colorful')} />
          </li>
          <li>
            <Button className={`${classes["help-button"]} ${classes.nekoBtn}`} onFetch={() => cartCtx.themeHandler('neko')} />
          </li>
          <li>
            <Button className={`${classes["help-button"]} ${classes.lightBtn}`} onFetch={() => cartCtx.themeHandler('light')} />
          </li>
          <li>
            <Button className={`${classes["help-button"]} ${classes.darkBtn}`} onFetch={() => cartCtx.themeHandler('dark')} />
          </li>
        </ul>
      </div>}
    </React.Fragment>
  );
};

export default UserHeader;
