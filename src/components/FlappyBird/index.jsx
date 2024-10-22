import React from 'react';
import './style.css';
import Bird from './bird';
import Pipe from './pipe';


export default function FlappyBird() {
    return <>
    <div className="flappy-bird">
        <Bird /> 
        <Pipe />
      </div>
    </> 
  }
