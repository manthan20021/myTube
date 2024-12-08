import React from 'react'
import SideManu from './SideManu'
import { Outlet } from 'react-router-dom'

function MainBody() {
  return (
    <div className='
    flex 
    h-auto 
    max-w-[1523px] 
    min-w-[1523px]  
    p-5
    '>
     <SideManu/>
     <Outlet/>
    
    </div>
  )
}

export default MainBody
