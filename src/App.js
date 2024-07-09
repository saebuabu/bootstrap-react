import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Home from './views/Home'
import About from './views/About'
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Button from 'react-bootstrap/Button';
import useLocalStorage from "./components/LightDarkMode/useLocalStorage";

function App() {
  
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  function handleToggleTheme() {
      setTheme(theme === 'light' ? 'dark' : 'light');
  }

  console.log(theme);

  return (
    <>
        <div className="App light-dark-mode" data-theme={theme}>
        <div className="switch-button-wrapper"><Button onClick={handleToggleTheme} variant="outline-dark">Switch theme</Button></div>
        <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
        </div>
    </>
  );
}

export default App;
