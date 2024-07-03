import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Home from './views/Home'
import About from './views/About'
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import QrCodeGenerator from "./components/Qr-code-generator";

function App() {
  return (
    <>
        <div className="App">
        <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/qr' element={<QrCodeGenerator />} />
        </Routes>
        <Footer />
        </div>
    </>
  );
}

export default App;
