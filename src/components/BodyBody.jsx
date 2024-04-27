import React from 'react'
import { useState } from 'react';
export const BodyBody = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'is-flipped' : ''}`} onClick={toggleFlip}>
      <div className="flip-card-inner">
      <div style={{background: 'linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)'}} class="flip-card-front">
      <div class="flex justify-between">
        <img alt='BulbIcon' class=" px-10 py-10" src={require('../Icons/Bulb.png')} />
        <img alt='BulbIcon' class=" px-10 py-10" src={require('../Icons/Speaker.png')} />
      </div>
        <p class="py-12 lato text-white">9 + 6 + 7x - 2x - 3</p>
    </div>

        <div style={{background: 'linear-gradient(222.94deg, #071844 -4.31%, #071844 -0.03%, #2D87B6 84.9%, #2D87B6 103.81%)'}}  className="flip-card-back">
          <div class="flex justify-between">
        <img alt='BulbIcon' class=" px-10 py-10" src={require('../Icons/Bulb.png')} />
        <img alt='BulbIcon' class=" px-10 py-10" src={require('../Icons/Speaker.png')} />
      </div>
        <p class="py-12 lato text-white">5x + 12</p>        </div>
      </div>
    </div>
  );


}
