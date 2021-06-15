import SearchButton from "../../UI/Button/SearchButton";
import classes from './OpeningButton.module.css'

const OpeningButton = () => {
  return (
    <SearchButton
      key="openings"
      id="openings"
      name="Openings"
      className={classes["opening-button"]}
    />
  );
};
export default OpeningButton;