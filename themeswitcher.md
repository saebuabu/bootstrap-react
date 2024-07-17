# Theme switcher en localstorage en :root variabelen in css

## Realisatie in de component LightDarkmode

``` jsx
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
```

En zie verder ook useLocalStorage.jsx

## css trucage in App.css

``` css
:root {
  --background: #c00e40;
  --background-content: #f03f68;
  --secondary-color: #cc0707;
  --text-primary: #9da;
  --bs-navlink-color: #fff;
} 

[data-theme="light"] {
  --background: #f0f0f0;
  --background-content: #f7e5e5;
  --secondary-color: #222;
  --text-primary: #234;
  --bs-navlink-color: #435;
}

.light-dark-mode {
  background-color: var(--background);
  color: var(--text-primary);
  transition: all 0.5s linear;
}
```



## [Terug](README.md)
