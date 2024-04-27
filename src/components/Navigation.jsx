import React from 'react'
import { PathElement } from './PathElement'

export const Navigation = () => {
  return (
    <div class="mt-20 flex">
      <img alt='HomeIcon' class="top-8 left-28" src={require('../Icons/Home.png')} />
      <PathElement pageName={'Flashcard'} isCurrent={false}/>
      <PathElement pageName={'Mathematics'} isCurrent={false}/>
      <PathElement pageName={'Relation and Function'} isCurrent={true}/>
    </div>
  )
}
