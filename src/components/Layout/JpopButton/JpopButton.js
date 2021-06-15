import SearchButton from "../../UI/Button/SearchButton";
import classes from "./JpopButton.module.css";

const JpopButton = (props) => {
 const genderHandler = () =>{
   console.log('JPOP')
 }
  return (
    <SearchButton
      key="jpop"
      id="jpop"
      name="J-pop"
      className={classes["jpop-button"]}
      onFetch = {genderHandler}
    />
  );
};
export default JpopButton;
