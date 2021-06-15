import Button from "../../UI/Button/Button";
import classes from './OpeningButton.module.css'

const OpeningButton = () => {
  return (
    <Button
      key="openings"
      id="openings"
      name="Openings"
      className={classes["opening-button"]}
    />
  );
};
export default OpeningButton;