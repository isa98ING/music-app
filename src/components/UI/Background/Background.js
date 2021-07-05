import React, { useContext} from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import styles from "./Background.module.css";

const Background = (props) => {

    const { theme } = useContext(ThemeContext);

    let classes = `${styles.background}
        ${theme === 'neko' ? styles.neko : ""}
        ${theme === 'colorful' ? styles.colorful : ""} 
        ${theme === 'light' ? styles.light : ""}
        ${theme === 'dark' ? styles.dark : ""}
      `;

    return <div className={classes}>{props.children}</div>;
};

export default Background;