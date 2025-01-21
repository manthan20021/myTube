import { createSlice } from "@reduxjs/toolkit";

const liceChatSlice = createSlice({
    name: "liveChatSlice",
    initialState:{
       masshges:[]
    },
    reducers:{
        addmasshge: (state , action) => {
            state.masshges.splice(10, 1)
            state.masshges.unshift(action.payload)
        }
    }
})

export const {addmasshge} = liceChatSlice.actions;
export default liceChatSlice.reducer;