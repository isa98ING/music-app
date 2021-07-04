import React, { useState , useLayoutEffect} from 'react';
import lightBackgroud from './../assets/img/light.jpg';
import colorfulBackground from './../assets/img/colorful.jpg';
import nekoBackground from './..//assets/img/neko.jpg';
import darkBackground from './../assets/img/dark.jpg';

export const ThemeContext = React.createContext({
    theme: "",
    themeHandler: () => { }
});

export const ThemeProvider = (props) => {
    // keeps state of the current chosen theme
    const [theme, setTheme] = useState('colorful');

    // paints the app before it renders elements
    useLayoutEffect(() => {
        if (theme === 'colorful') {
            applyTheme(colorfulTheme);
        }

        if (theme === 'neko') {
            applyTheme(nekoTheme);
        }
        if (theme === 'light') {
            applyTheme(lightTheme);
        }
        if (theme === 'dark') {
            applyTheme(darkTheme);
        }
        // if state changes, repaints the app
    }, [theme]);

    const applyTheme = theme => {
        const root = document.getElementsByTagName('html')[0];
        root.style.cssText = theme.join(';');
    }

    const changeThemeHandler = (theme) => {
        setTheme(theme);
    }
    const themeContext = {
        theme: theme,
        themeHandler: changeThemeHandler,
    }
    return <ThemeContext.Provider value={themeContext}>
        {props.children}
    </ThemeContext.Provider>
}

const colorfulTheme = [
    /*"--background-image:url('./assets/img/colorful.jpg')",*/
    "--background-color:orchid",
    "--kpop-color-light:rgba(50, 200, 214, 1)",
    "--kpop-color-dark:rgba(0, 140, 153, 1)",
];

const nekoTheme = [
    /*"--background-image:url('./assets/img/neko.jpg')",*/
    "--background-color:royalblue",
    "--kpop-color-light:rgba(205, 163, 252, 1)",
    "--kpop-color-dark:rgba(163, 91, 241, 1)",
];

const lightTheme = [
    /*"--background-image:url('./assets/img/light.jpg')",*/
    "--background-color:palegreen",
    "--kpop-color-light:rgba(101, 192, 193, 1)",
    "--kpop-color-dark:rgba(31, 174, 174, 1)",
];

const darkTheme = [
    /*"--background-image:url('./assets/img/dark.jpg')",*/
    "--background-color:rebeccapurple",
    "--kpop-color-light:rgba(159, 124, 204, 1)",
    "--kpop-color-dark:rgba(90, 19, 176, 1)",

    
];