import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import useVideos from "../hooks/useVideos";



function VideoCantenar() {
useVideos()
  
  const videoData = useSelector((store) => store.video.videos)
  console.log(videoData);

  
  return (
    <div className='sm:flex sm:flex-wrap grid grid-flow-row grid-cols-1 pt-6 sm:w-[1300px]'>
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
