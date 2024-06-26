import React from 'react'

export const PathElement = ({pageName, isCurrent}) => {
  return (
    <div class="flex">
        <img alt='RightArrow' class="h-8 w-8" src={require('../Icons/RightArrow.png')} />
        <p style={{color: isCurrent? '#06286E':'#696671'}} className={`w-[100%] ${ isCurrent ? `font-semibold` : ''}`}>{pageName}</p>
    </div>
  )
}
