import React, { useState } from "react";
import classes from "./UserHeader.module.css";
import Button from "../../UI/Button/Button";

const UserHeader = (props) => {
  const [open, setOpen] = useState(false);

  const helpHandler = () => {
    console.log("help");
  };
  const openMenuHandler = () =>{
    if(open){
      setOpen(false);
    }else{
      setOpen(true);
    }
  }

  return (
    <React.Fragment>
      <div className = {classes['help-menu']}>
        <Button className={classes["help-button"]} onFetch={helpHandler} />
        <Button className={classes["help-button"]} onFetch={openMenuHandler} />
      </div>
    
     {open && <div className={classes["theme-menu"]}>
        <ul>
          <li>
            <Button className={classes["help-button"]} onFetch={helpHandler} />
          </li>
          <li>
            <Button className={classes["help-button"]} onFetch={helpHandler}/>
          </li>
          <li>
            <Button className={classes["help-button"]} onFetch={helpHandler}/>
          </li>
        </ul>
      </div>}
    </React.Fragment>
  );
};

export default UserHeader;
