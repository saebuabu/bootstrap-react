import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Home from './views/Home'
import About from './views/About'
import Contact from "./views/Contact";
import FlappyBird from "./components/FlappyBird";

function App() {
  return (
    <>
        <div className="App">
        <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/flappybird' element={<FlappyBird />} />
        </Routes>
        </div>
    </>
  );
}

export default App;
