import React, { useState } from "react";

import classes from './SearchHeader.module.css';
import Button from "../../UI/Button/Button";

const SearchHeader = (props) => {
  const [activeKpop, setActiveKpop] = useState(false);
  const [activeJpop, setActiveJpop] = useState(false);
  const [activeOpenings, setActiveOpenings] = useState(false);
  const [activeVideogames, setActiveVideogames] = useState(false);

  let k_classes = `${classes["kpop-button"]} ${
    activeKpop ? classes["grow-button"] : ""
  }`;
  let j_classes = `${classes["jpop-button"]} ${
    activeJpop ? classes["grow-button"] : ""
  } `;
  let op_classes = `${classes["opening-button"]} ${
    activeOpenings ? classes["grow-button"] : ""
  }`;
  let vg_classes = `${classes["videogames-button"]} ${
    activeVideogames ? classes["grow-button"] : ""
  }`;

  const genreHandler = (genre) => {
    props.onSent(genre);
    switch (genre) {
      case "kpop":
        setActiveKpop(true);
        setActiveJpop(false);
        setActiveOpenings(false);
        setActiveVideogames(false);
        break;

      case "jpop":
        setActiveKpop(false);
        setActiveJpop(true);
        setActiveOpenings(false);
        setActiveVideogames(false);
        break;

      case "openings":
        setActiveKpop(false);
        setActiveJpop(false);
        setActiveOpenings(true);
        setActiveVideogames(false);
        break;

      case "videogames":
        setActiveKpop(false);
        setActiveJpop(false);
        setActiveOpenings(false);
        setActiveVideogames(true);
        break;
       default:
         break;
    }
  };

  return (
    <React.Fragment>
      <Button className={k_classes} onFetch={() => genreHandler("kpop")}>
        {activeKpop && "K-Pop"}
      </Button>
      <Button className={op_classes} onFetch={() => genreHandler("openings")}>
        {activeOpenings && "Openings"}
      </Button>
      <Button className={j_classes} onFetch={() => genreHandler("jpop")}>
        {activeJpop && "J-Pop"}
      </Button>
      <Button className={vg_classes} onFetch={() => genreHandler("videogames")}>
        {activeVideogames && "Videogames"}
      </Button>
    </React.Fragment>
  );
};
export default SearchHeader;
