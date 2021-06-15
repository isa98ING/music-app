import classes from "./KpopButton.module.css";
import Button from "../../UI/Button/Button";

const KpopButton = (props) => {
   
  return (
    <Button
      key="kpop"
      id="kpop"
      name="K-pop"
      className={classes["kpop-button"]}
    />
  );
};

export default KpopButton;
