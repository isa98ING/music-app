import React, { useState , useLayoutEffect} from 'react';

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
    "--kpop-color-light:rgb(46, 175, 187)",
    "--kpop-color-dark:rgba(0, 140, 153, 1)",
    "--jpop-color-dark:rgba(141, 70, 227, 1)",
    "--jpop-color-light:rgb(179, 128, 230)",
    "--opening-color-light:rgba(248, 101, 157, 1)",
    "--opening-color-dark:rgba(242, 5, 96, 1)",
    "--videogames-color-light:rgb(136, 218, 49)",
    "--videogames-color-dark: rgb(111, 172, 41)",
    "--userheader-color-light:rgba(246, 209, 12, 1)",
    "--userHeader-color-dark:rgba(252, 166, 5, 1)",
];

const nekoTheme = [
    "--kpop-color-light:rgb(183, 140, 233)",
    "--kpop-color-dark:rgb(157, 81, 238)",
    "--jpop-color-light:rgba(159, 196, 244, 1)",
    "--jpop-color-dark:rgba(93, 155, 235, 1)",
    "--opening-color-light:rgba(255, 168, 168, 1)",
    "--opening-color-dark:rgba(255, 119, 119, 1)",
    "--videogames-color-light:rgba(133, 204, 198, 1)",
    "--videogames-color-dark: rgba(88, 176, 168, 1)",
    "--userheader-color-light:rgba(248, 142, 218, 1)",
    "--userHeader-color-dark:rgba(245, 56, 216, 1)",
];

const lightTheme = [
    "--kpop-color-light:rgba(101, 192, 193, 1)",
    "--kpop-color-dark:rgba(31, 174, 174, 1)",
    "--jpop-color-light:rgba(254, 182, 185, 1)",
    "--jpop-color-dark:rgba(253, 107, 114, 1)",
    "--opening-color-light:rgb(236, 183, 140)",
    "--opening-color-dark:rgba(252,152, 73, 1)",
    "--videogames-color-light:rgba(180, 206, 151, 1)",
    "--videogames-color-dark: rgba(115, 184, 38, 1)",
    "--userheader-color-light:rgba(238, 216, 102, 1)",
    "--userHeader-color-dark:rgba(232, 199, 27, 1)",   
];

const darkTheme = [
    "--kpop-color-light:rgba(159, 124, 204, 1)",
    "--kpop-color-dark:rgba(90, 19, 176, 1)",
    "--opening-color-light:rgba(98, 81, 209, 1)",
    "--opening-color-dark:rgba(50, 32, 167, 1)",
    "--jpop-color-light:rgb(99, 106, 156)",
    "--jpop-color-dark:rgb(67, 73, 110)",
    "--videogames-color-light:rgba(198, 79, 157, 1)",
    "--videogames-color-dark: rgba(151, 23, 115, 1)",
    "--userheader-color-light:rgba(49, 158, 158, 1)",
    "--userHeader-color-dark:rgba(9, 83, 83, 1)",
];