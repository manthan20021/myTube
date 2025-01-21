import { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/const'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


function VideoCantenar() {

  const [videoData, setVideoData] = useState([])
  
  
  


  useEffect(() => {
    getVideoList()
  },[])

  const getVideoList = async () => {
    const videoData = await fetch(YOUTUBE_VIDEO_API)
    const videoJson = await videoData.json()
    setVideoData(videoJson.items)
    console.log(videoJson);
  }

  return (
    <div className='flex flex-wrap pt-6 w-[1300px]'>
      {
        videoData.map(vido => {
          return (
          <Link  key={vido.id} to={"/watch?v=" + vido.id} >
          <VideoCard key={vido.id} info={vido} />
          </Link>
          )
        })
      }
                 
     
      
    </div>
  )
}

export default VideoCantenar
