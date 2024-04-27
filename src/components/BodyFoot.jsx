import React from 'react'

export const BodyFoot = () => {
  return (
    <div  class="flex justify-between w-2/3 mx-auto px-10">
      <img alt='RefreshIcon' class=" px-14 py-14" src={require('../Icons/Refresh.png')} />
      <div class="flex justify-between">
      <img alt='GoBackIcon' class=" px-10 py-10" src={require('../Icons/GoBack.png')} />
      <p class="content-nav-index mt-14">01/10</p>
      <img alt='ForwardIcon' class=" px-10 py-10" src={require('../Icons/Forward.png')} />
      </div>
      <img alt='FullScreenIcon' class="px-14 py-14" src={require('../Icons/FullScreen.png')} />

    </div>
  )
}
