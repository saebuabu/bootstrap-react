import React from 'react';
import { useState,useEffect } from 'react';
import './style.css';
import Bird from './bird';
import Pipe from './pipe';

export default function FlappyBird() {
  const [birdPosition, setBirdPosition] = useState({ x: 200, y: 300 });
  const [gameStarted, setGameStarted] = useState(false);

  //springen van de vogel
  function jump() {
    console.log('jump');
    if (!gameStarted) {
      setGameStarted(true);
    }
    setBirdPosition((state) => ({ ...state, y: state.y - 60 }));
  }

  //zwaarte kracht op de vogel
  useEffect(() => {
    if (!gameStarted) return;
    const interval = setInterval(() => {
      setBirdPosition((state) => ({ ...state, y: state.y + 5 }));
    }, 100);
    return () => clearInterval(interval);
  }, [gameStarted]);


  return <>
    <div className="flappy-bird" onClick={jump}>
      <Bird birdPosition={birdPosition} />
      <Pipe />
    </div>
  </>
}
