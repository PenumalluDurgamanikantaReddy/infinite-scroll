

import {createSlice} from '@reduxjs/toolkit'


const apiSlice = createSlice({

    name:"apiSlice",
    initialState:{

        people:[]



    },
    reducers:{


        resetData:()=>{

        }
    },
    extraReducers:()=>{



    }
})

export const {resetData}  = apiSlice.actions

export default apiSlice.reducer