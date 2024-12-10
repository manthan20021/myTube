import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeManu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import LiveChat from './LiveChat'


function Watch() {

  const [SearchParams] = useSearchParams()
  
   const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeManu())
  },[])  
  
   return(
  <div className='w-full'>

     <div className='w-[100%] flex justify-between h-auto p-6'>
      <iframe 
      className='rounded-xl'
      width="914" 
      height="514"
      allowFullScreen
      src={"https://www.youtube.com/embed/"+SearchParams.get("v")} 
      title="The Truth About Data Analytics Career in 2025 #tanaypratap"
      frameborder="0" 
      allow="
      accelerometer; 
      autoplay; 
      clipboard-write; 
      encrypted-media; 
      gyroscope; 
      picture-in-picture; 
      web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
      <LiveChat/>
    </div>
  </div>
  )
}

export default Watch
