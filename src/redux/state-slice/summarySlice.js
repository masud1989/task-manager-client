import { createSlice } from "@reduxjs/toolkit";

export const summarySlice = createSlice({
    name: 'summery',
    initialState:{
        value:[]
    },
    reducers:{
        SetSummery:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {SetSummery} = summarySlice.actions;
export default summarySlice.reducer;