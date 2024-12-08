import React from 'react'
import Butoon from './Butoon'
import { useSelector } from 'react-redux'


function ButoonCantenar() {
  const seclector = useSelector(store => store.app.isManuOpen)
  const btns = [
    "all",
    "music", 
    "moves",
    "programing",
    "bollywood", 
    "spot","cricket", 
    "news","famly",
    "bollywood", "spot",
    "cricket", "news",
    "famly","programing",
    "bollywood", "spot",
    "cricket", "news"
  ]
  

  if(!seclector) return  
  <div className='grid grid-flow-col  overflow-auto max-w-[1523px] min-w-[1523px] no-scrollbar'>
  {
    btns.map((btn) => (
    <Butoon key={btn} name={btn}/>
    
  ))
  }
  
</div>
    
    return (
    <div className='grid grid-flow-col overflow-auto w-[1322px] no-scrollbar'>
      {
        btns.map((btn) => (
        <Butoon key={btn} name={btn}/>
      ))
      }
      
    </div>
  )
}

export default ButoonCantenar
