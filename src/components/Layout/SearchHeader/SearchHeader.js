import React, { useState } from "react";

import classesKpop from "./KpopButton.module.css";
import classesJpop from "./JpopButton.module.css";
import classesOpening from "./OpeningButton.module.css";
import classesVgames from "./VideogamesButton.module.css";
import Button from "../../UI/Button/Button";

const SearchHeader = (props) => {
  const [activeKpop, setActiveKpop] = useState(false);
  const [activeJpop, setActiveJpop] = useState(false);
  const [activeOpenings, setActiveOpenings] = useState(false);
  const [activeVideogames, setActiveVideogames] = useState(false);

  let k_classes = `${classesKpop["kpop-button"]} ${
    activeKpop ? classesKpop["grow-button"] : ""
  }`;
  let j_classes = `${classesJpop["jpop-button"]} ${
    activeJpop ? classesJpop["grow-button"] : ""
  } `;
  let op_classes = `${classesOpening["opening-button"]} ${
    activeOpenings ? classesOpening["grow-button"] : ""
  }`;
  let vg_classes = `${classesVgames["videogames-button"]} ${
    activeVideogames ? classesVgames["grow-button"] : ""
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
