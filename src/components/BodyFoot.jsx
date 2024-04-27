import React from 'react'

export const BodyFoot = () => {
  return (
    <div  class="body-foot">
      <img alt='RefreshIcon' class=" ref h-10 w-10" src={require('../Icons/Refresh.png')} />
      <div class="flex  justify-between">
      <img alt='GoBackIcon' class=" h-10 w-10" src={require('../Icons/GoBack.png')} />
      <p class="content-nav-index mx-10">01/10</p>
      <img alt='ForwardIcon' class=" h-10 w-10" src={require('../Icons/Forward.png')} />
      </div>
      <img alt='FullScreenIcon' class="ful h-10 w-10" src={require('../Icons/FullScreen.png')} />

    </div>
  )
}
