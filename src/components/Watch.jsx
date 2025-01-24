import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeManu } from '../stores/isManuOpenSlice'
import { useSearchParams } from 'react-router-dom'
import LiveChat from './LiveChat'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import DescriptionHade from './DescriptionHade'
//import useVideos from '../hooks/useVideos'



function Watch() {

  


  const [SearchParams] = useSearchParams() 

  const id = SearchParams.get("v")

  const videoData = useSelector((store) => store.video.videos)
  if(!videoData || !id) return;

 const videoWithId =  videoData.find((video) => video.id === id);

 if(!videoWithId) return <p>video not found!</p>

 console.log(videoWithId);

 const {likeCount} = videoWithId?.statistics || {}
 const {viewCount} = videoWithId?.statistics || {}
 const {description} = videoWithId?.snippet?.localized || {}

 
 const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return num.toString();
  }
};


 

 
 
  
  
  
   const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeManu())
  },[])  
  
   return(
  <div className='w-full'>

  

     <div className='w-[100%] flex justify-center h-auto p-6'>
      <div>
      <iframe 
      className='rounded-xl mr-4'
      width="814" 
      height="414"
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

      <p className='w-[814px] font-semibold'>{videoWithId?.snippet?.title}</p>

      <div className='flex items-center mt-2 max-w-[814px] '>
       <div className='flex  items-center'>
        <FaUserCircle className='text-[34px] '/> 
        <div>
        <h2 className='font-semibold'>{videoWithId?.snippet?.channelTitle}</h2>
        <h6 className=' text-[10px]'>8.61K subscribers</h6>
        </div>
        

        </div>

        <button 
        className='bg-gray-300 px-3 py-2 font-semibold rounded-3xl ml-8 '>
          subsraib
          </button>

        <div className='ml-16 flex items-center'>

        <button 
        className='bg-gray-300 px-3 py-2 rounded-l-3xl flex items-center font-semibold text-[12px] '>
          <AiFillLike className='font-semibold'/>
        {formatNumber(likeCount)}
          </button>

        <button 
        className='bg-gray-300 px-3 py-2 font-semibold flex items-center rounded-r-3xl border-l-4 text-[15px] '>
          <AiFillDislike className='font-semibold' /> 
          </button> 

        </div>

        <button 
        className='bg-gray-300 px-3 py-2 font-semibold rounded-3xl ml-14'>
          share
          </button>
      </div>
     <DescriptionHade 
     view = {formatNumber(viewCount)}
     descriptionData = {description}
     />
      </div>
     <LiveChat/>
    </div>
  </div>
  )
}

export default Watch
