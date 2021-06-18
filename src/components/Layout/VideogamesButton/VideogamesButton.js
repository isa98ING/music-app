import classes from "./VideogamesButton.module.css";
import SearchButton from "../../UI/Button/SearchButton";

const VideogamesButton = (props) => {
  const genderHandler = () =>{
    props.onMessage('videogames');
  }
  return (
    <SearchButton
      key="videogames"
      id="kpop"
      name="Videogames"
      className={classes["videogames-button"]}
      onFetch = {genderHandler}
    />
  );
};

export default VideogamesButton;
