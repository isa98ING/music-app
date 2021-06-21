import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Music.module.css";

const Music = (props) => {
  return (
    <Card genre={props.genre}>
      <h2 className={classes.title}>{props.title}</h2>
      <h3 className={classes.album}>{props.album}</h3>
      <p className={classes.author}>{props.author}</p>
    </Card>
  );
};

export default Music;
