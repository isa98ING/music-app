import SearchButton from "../../UI/Button/SearchButton";
import classes from './JpopButton.module.css';

const JpopButton = () =>{
    const jpopMusicHandler = () =>{
     console.log( 'Jpop Music Handler');
    }

    return <SearchButton
    key="jpop"
    id="jpop"
    name="J-pop"
    className={classes["jpop-button"]}
    onClick = {jpopMusicHandler}
  />
}
export default JpopButton;