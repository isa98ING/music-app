import classes from "./VideogamesButton.module.css";
import Button from "../../UI/Button/Button";

const VideogamesButton = () => {
  return (
    <Button
      key="videogames"
      id="kpop"
      name="Videogames"
      className={classes["videogames-button"]}
    />
  );
};

export default VideogamesButton;
