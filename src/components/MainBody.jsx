import React from 'react'
import { BodyHead } from './BodyHead'
import { BodyBody } from './BodyBody'
import { BodyFoot } from './BodyFoot'

export const MainBody = () => {
  return (
    <div >
        <BodyHead/>
        <BodyBody/>
        <BodyFoot/>
    </div>
  )
}
