import React,{useState} from 'react'
import Button from "../../UI/Button/Button";
import classes from "./OpeningButton.module.css";

const OpeningButton = (props) => {
  const [active, setActive] = useState(false);

  const genderHandler = () => {
    if (active === true) {
      setActive(false);
    } else {
      props.onMessage("openings");
      setActive(true);
    }
  };
  let buttonClasses = `${classes["opening-button"]}  
  ${active ? classes["grow-button"] : ""}`;

  return (
    <Button
      key="openings"
      id="openings"
      name="Openings"
      className={buttonClasses}
      onFetch={genderHandler}
    />
  );
};
export default OpeningButton;
