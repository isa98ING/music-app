import SearchButton from "../../UI/Button/SearchButton";
import classes from './OpeningButton.module.css'

const OpeningButton = () => {
  const genderHandler = () =>{
    console.log('OPENINGS')
  }
  return (
    <SearchButton
      key="openings"
      id="openings"
      name="Openings"
      className={classes["opening-button"]}
      onFetch = {genderHandler}
    />
  );
};
export default OpeningButton;