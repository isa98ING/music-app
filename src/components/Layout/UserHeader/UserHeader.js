import classes from './UserHeader.module.css';
import Button from '../../UI/Button/Button';

const UserHeader = (props) => {

    const helpHandler = () =>{
        console.log('help')
    }
    const themeHandler = () =>{
        console.log('theme')
    }
  return (
    <div className={classes["user-header"]}>
      <Button className={classes["help-button"]} onFetch={helpHandler} />
      <Button className={classes["help-button"]} onFetch={themeHandler} />
    </div>
  );
};

export default UserHeader;