import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name: "videos",
    initialState: {
        videos:[]
    },reducers:{
        getVideos:(state, action) => {
           state.videos = action.payload
        }
    }
    
})

export const {getVideos} = VideoSlice.actions
export default VideoSlice.reducer