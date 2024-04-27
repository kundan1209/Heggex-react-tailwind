import React from 'react'
import { useState } from 'react'
export const QafItem = ({question, answer}) => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    const toggleDisplay = () => {
      setIsDisplayed(!isDisplayed);
    };

  return (
    <div onClick={toggleDisplay} class="faq-item">
        <div class="flex justify-between ">
        <p class="question">{question}</p>
        <img alt='DownArrow' className={`h-8 w-8 ${isDisplayed?'displayed':''}`} src={require('../Icons/DownArrow.png')} />
        </div>
        <p className={`pr-20 ${isDisplayed?'fade-in':'fade-out'}`}>{isDisplayed && answer}</p>
    </div>
  )
}
