import classes from "./KpopButton.module.css";
import SearchButton from "../../UI/Button/SearchButton";

const KpopButton = (props) => {
  const genderHandler = () =>{
    console.log('KPOP')
  }
  return (
    <SearchButton
      key="kpop"
      id="kpop"
      name="K-pop"
      className={classes["kpop-button"]}
      onFetch = {genderHandler}
    />
  );
};

export default KpopButton;
