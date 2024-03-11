import React from 'react';
import './App.css';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Image slider</h1>
      </header>
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}></ImageSlider>
      </div>
    </>
  );
}

export default App;
