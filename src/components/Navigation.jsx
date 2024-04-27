import React from 'react'
import { PathElement } from './PathElement'

export const Navigation = () => {
  return (
    <div class="navigation">
      <div class="flex">
      <img alt='HomeIcon' class="w-8 h-8" src={require('../Icons/Home.png')} />
      <PathElement pageName={'Flashcard'} isCurrent={false}/>
      <PathElement pageName={'Mathematics'} isCurrent={false}/>
      <PathElement pageName={'Relation and Function'} isCurrent={true}/>
      </div>

    </div>
  )
}
