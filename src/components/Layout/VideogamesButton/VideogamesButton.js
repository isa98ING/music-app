import classes from "./VideogamesButton.module.css";
import SearchButton from "../../UI/Button/SearchButton";

const VideogamesButton = () => {
  return (
    <SearchButton
      key="videogames"
      id="kpop"
      name="Videogames"
      className={classes["videogames-button"]}
    />
  );
};

export default VideogamesButton;
