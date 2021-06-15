import classes from "./KpopButton.module.css";
import SearchButton from "../../UI/Button/SearchButton";

const KpopButton = (props) => {
   
  return (
    <SearchButton
      key="kpop"
      id="kpop"
      name="K-pop"
      className={classes["kpop-button"]}
    />
  );
};

export default KpopButton;
