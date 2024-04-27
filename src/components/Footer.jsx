import React from 'react'

export const Footer = () => {
  return (
    <div>
      <div class="foot-logo flex justify-between mb-20 mt-14">
        <div class="flex justify-between">
        <div class="foot-icon">
        <img alt='FootIcon' class="mx-auto my-6" src={require('../Icons/FootIcon.png')} />
        </div>
        <div class="">
        <p class="published-by-text">Published by</p>
        <img alt='TextIcon' src={require('../Icons/TextIcon.png')} />
        </div>
        </div>
      <div class="create flex justify-between">
        <img alt='CreateIcon'  class="h-10 mx-8" src={require('../Icons/Create.png')} />
        <p class="create-text">Create Flashcard</p>
      </div>
      </div>
    </div>
  )
}
