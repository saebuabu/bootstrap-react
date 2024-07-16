
import React from 'react';
import useLocalStorage from './useLocalStorage';


export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage('theme', 'light');

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    console.log(theme);

    return <>
        <div className="light-dark-mode" data-theme={theme}>
                <button onClick={handleToggleTheme} type='button'>Change theme</button>
        </div>
    </>
}
