import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Music.module.css';

const Music = (props) => {
  return (
    <Card className={classes.music}>
      <h2>{props.title}</h2>
      <h3>{props.album}</h3>
      <p>{props.author}</p>
    </Card>
  );
};

export default Music;