import React from 'react'
import '../index.css'
export const Navbar = () => {
  return (
    <div class="navbar">
        <img alt='MainIcon' class="head-icon" src={require('../Icons/MainIcon.png')} />
        <div style={{color:'#3A3740'}} class="nav-content">
            <p class="mt-2 mr-4">Home</p>
            <p class='mt-2 mr-4'>Flashcard</p>
            <p class='mt-2 mr-4'>Contact</p>
            <p class='mt-2 mr-4'>FAQ</p>
            <button style={{background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)'}} className="text-white px-10 gap-x-20 rounded-full">Login</button>
        </div>
    </div>
  )
}




