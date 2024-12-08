import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
  

function SideManu() {

     const seclector = useSelector(store => store.app.isManuOpen)
      
     if(!seclector) return null
  return (
    <div className='w-[204px] px-4 sticky'>
        <ul className='border-b-2 mb-5'>
            <Link to="/">
            <li>Home</li>
            </Link>
             <li>Short</li>
             <li>Subscriptions</li>
        </ul>
        <ul  className='border-b-2 mb-5'>
             <li>You</li>
             <li>History</li>
        </ul>
        <ul className='border-b-2 mb-5'>
             <li>Move</li>
             <li>storys</li>
             <li>Shopping</li>
             <li>Music</li>
        </ul>
      
    </div>
  )
}

export default SideManu
