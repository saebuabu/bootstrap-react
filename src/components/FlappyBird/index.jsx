import React from 'react';
import { useState,useEffect } from 'react';
import './style.css';
import Bird from './bird';
import Pipe from './pipe';

export default function FlappyBird() {
  const [birdPosition, setBirdPosition] = useState({ x: 200, y: 300 });
  const [gameStarted, setGameStarted] = useState(false);
  const [message, setMessage] = useState('Click to start');

  //springen van de vogel
  function jump() {
    console.log('jump');
    if (!gameStarted) {
      setGameStarted(true);
    }
    setBirdPosition((state) => ({ ...state, y: state.y - 60 }));
    setMessage('');
  }

 //spatiebalk triggert ook de jump functie
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Space') {
        jump();
      }
      //if game ended and key S is pressed, restart the game
      if (e.code === 'KeyS' && !gameStarted) {
        setBirdPosition({ x: 200, y: 300 });
        setGameStarted(true);
        setMessage('Flappy Bird rules!');
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  //zwaarte kracht op de vogel
  useEffect(() => {
    if (!gameStarted) return;
    const interval = setInterval(() => {
      setBirdPosition((state) => ({ ...state, y: state.y + 5 }));
    }, 100);
    return () => clearInterval(interval);
  }, [gameStarted]);

  //controleer of de vogel de grond raakt
  useEffect(() => {
    if (birdPosition.y > window.innerHeight) {
      setMessage('Game Over, Press S to restart');
      setGameStarted(false);
    } 
  }, [birdPosition]);

  return <>
    <div className="flappy-bird" onClick={jump}>
      <h1 class="animated">{message}</h1>
      <Bird birdPosition={birdPosition} />
      <Pipe />
    </div>
  </>
}
