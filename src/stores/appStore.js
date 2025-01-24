
import { configureStore } from "@reduxjs/toolkit";
import VideoSlice from "./videoSlice"
import isManuOpen from './isManuOpenSlice';
import liveChatSlice from './liveChatSlice'


const AppStore = configureStore({
    reducer:{
        video: VideoSlice,
        app: isManuOpen,
        chat: liveChatSlice,
    }

    
})

export default AppStore