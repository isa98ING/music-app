import SearchButton from "../../UI/Button/SearchButton";
import classes from './OpeningButton.module.css'

const OpeningButton = (props) => {
  const genderHandler = () =>{
    props.onMessage('openings');
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