import { createSlice } from "@reduxjs/toolkit";

const isManuOpen = createSlice({
    name: 'sideMnu',
    initialState:{
        isManuOpen: true,
    },
    reducers:{
        togelManu: (state) => {
            state.isManuOpen = !state.isManuOpen;
        },
        closeManu: (state) => {
            state.isManuOpen = false
        }
 
    }
})


export const {togelManu, closeManu} = isManuOpen.actions;
export default isManuOpen.reducer;

