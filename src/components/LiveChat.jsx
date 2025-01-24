import React, { useEffect, useState } from 'react'
import LiveComent from './LiveComent'
import { useDispatch, useSelector } from 'react-redux'
import { addmasshge } from '../stores/liveChatSlice'
import { getComentData, getRandomName } from '../utils/HelperData'

function LiveChat() {

    const dispatch = useDispatch()
    const chatMassges = useSelector(stoar => stoar.chat.masshges)
    const [sandMassges, setSendMassges] = useState("")

    

    useEffect(() => {
      
       const i =  setInterval(() => {
      
            dispatch(addmasshge({
                name: getRandomName(),
                maseege: getComentData()
            }))

        },[1000])

        return () => clearInterval(i)
    },[])

  return (
    <div className='
    flex flex-col 
    w-[35%] 
    border-gray-300 
    border-2 rounded-lg
    h-auto
    '>
    <div className='
    bg-gray-100 
    flex flex-col-reverse  
    h-[514px] border-b-0 
    rounded-lg p-3 
    overflow-auto
    ' >
        {chatMassges.map(chat => (
             <LiveComent  key={chat}
             name={chat.name}
             coment={chat.maseege}
       />
        ))}
    
    </div>
    
    <form className='bg-gray-100'
    onSubmit={(e) => {
      e.preventDefault()
      dispatch(addmasshge({
        name: "Hitesh",
        maseege: sandMassges
      }))
      setSendMassges("")
    }}>

      <input value={sandMassges} onChange={(e)=>{
        e.preventDefault()
        setSendMassges(e.target.value)
      }} 
      className='
      bg-gray-300 
      pz-4 w-[80%] 
      mt-5 h-10 pl-3
      ' type='text' 
      placeholder='type hear'/>
      <button 
      className='
      w-[20%] border-2 h-10
      '>
        send
        </button>
    </form>

    </div>
  )
}

export default LiveChat
