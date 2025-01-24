import { useEffect } from "react"
import { getVideos } from "../stores/videoSlice"
import { YOUTUBE_VIDEO_API } from "../utils/const"
import { useDispatch } from "react-redux"

const useVideos = () => {

     const dispatchVideos = useDispatch()

     useEffect(() => {
        getVideoList()
      },[])

     const getVideoList = async () => {
        try{
            const videoData = await fetch(YOUTUBE_VIDEO_API)
        const videoJson = await videoData.json()
        dispatchVideos(getVideos(videoJson.items))

        }catch (e) {
            console.error("error in useVideos hook", e);
        }
      }
   
     
}

export default useVideos