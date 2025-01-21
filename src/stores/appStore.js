import isManuOpen from './isManuOpenSlice';
import liveChatSlice from './liveChatSlice'
import { configureStore } from "@reduxjs/toolkit";


const AppStore = configureStore({
    reducer:{
        app: isManuOpen,
        chat: liveChatSlice
    }
    
})

export default AppStore