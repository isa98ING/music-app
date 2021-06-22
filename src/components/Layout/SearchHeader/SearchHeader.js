import React, { useState } from "react";
import classesKpop from "./KpopButton.module.css";
import classesJpop from "./JpopButton.module.css";
import classesOpening from "./OpeningButton.module.css";
import classesVgames from "./VideogamesButton.module.css";

import Button from "../../UI/Button/Button";

const SearchHeader = (props) => {
  const [activeKpop, setActiveKpop] = useState(false);
  const [activeOpening, setActiveOpening] = useState(false);
  const [activeJpop, setActiveJpop] = useState(false);
  const [activeVgames, setActiveVgames] = useState(false);

  const activeHandlerKpop = () => {
    setActiveKpop(true);
    setActiveOpening(false);
    setActiveJpop(false);
    setActiveVgames(false);
    props.onSent('kpop')
  };

  const activeHandlerJpop = () => {
    setActiveKpop(false);
    setActiveOpening(false);
    setActiveJpop(true);
    setActiveVgames(false);
    props.onSent('jpop')

  };
  const activeHandlerOpening = () => {
    setActiveKpop(false);
    setActiveOpening(true);
    setActiveJpop(false);
    setActiveVgames(false);
    props.onSent('openings')

  };
  const activeHandlerVideogames = () => {
    setActiveKpop(false);
    setActiveOpening(false);
    setActiveJpop(false);
    setActiveVgames(true);
    props.onSent('videogames')

  };


  let k_classes = `${classesKpop["kpop-button"]} ${
    activeKpop ? classesKpop["grow-button"] : ""
  } `;
  let j_classes = `${classesJpop["jpop-button"]} ${
    activeJpop ? classesJpop["grow-button"] : ""
  } `;
  let op_classes = `${classesOpening["opening-button"]} ${
    activeOpening ? classesOpening["grow-button"] : ""
  } `;
  let vg_classes = `${classesVgames["videogames-button"]} ${
    activeVgames ? classesVgames["grow-button"] : ""
  } `;

  return (
    <React.Fragment >
      <Button className={k_classes} onFetch={activeHandlerKpop}>
        {activeKpop && "K-Pop"}
      </Button>
      <Button
        className={op_classes}
        name="Openings"
        onFetch={activeHandlerOpening}
      >
        {" "}
        {activeOpening && "Openings"}
      </Button>
      <Button className={j_classes} onFetch={activeHandlerJpop}>
        {activeJpop && "J-Pop"}
      </Button>
      <Button
        className={vg_classes}
        name="Videogames"
        onFetch={activeHandlerVideogames}
      >
        {" "}
        {activeVgames && "Videogames"}
      </Button>
    </React.Fragment>
  );
};
export default SearchHeader;
