import React, { useEffect } from 'react'
import { useState } from 'react'
export const QafItem = ({question, answer}) => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    const toggleDisplay = () => {
      setIsDisplayed(!isDisplayed);
    };
    // useEffect(()=>{
    //     const timeout = setInterval(() => {
    //         if
    //     }, 4000);
    //     return ()=>{

    //     }
    // }, [])
  return (
    <div onClick={toggleDisplay} class="faq-item">
        <div class="flex justify-between  ">
        <p class="question">{question}</p>
        <img alt='DownArrow' className={`${isDisplayed?'displayed':''}`} src={require('../Icons/DownArrow.png')} />
        </div>
        <p className={`pr-20 ${isDisplayed?'fade-in':'fade-out'}`}>{isDisplayed && answer}</p>
    </div>
  )
}
