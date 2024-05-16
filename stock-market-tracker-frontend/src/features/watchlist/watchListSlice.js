import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import watchListService from "./watchListService";
export const addToWatchList=createAsyncThunk("auth/watch/add",async(title,thunkAPI)=>{
    try {
        return await watchListService.addToWatchList(title);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})
export const getWatchList=createAsyncThunk("auth/watch/get",async(data,thunkAPI)=>{
    try {
        return await watchListService.getWatchList(data);        
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})



const initialState={
    watchlist:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}
export const watchListSlice=createSlice({
    name:"watchlist",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addToWatchList.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(addToWatchList.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.watchlist=action.payload;
            if(state.isSuccess===true){
                toast.info("User Created Successfully")
            }
        })
        .addCase(addToWatchList.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.payload);
            }
        })
        .addCase(getWatchList.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getWatchList.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;  
            state.watchlist=action.payload;
            if(state.isSuccess===true){
                toast.info("User Created Successfully")
            }
        })
        .addCase(getWatchList.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.payload);
            }
        })
        
        
    }
})

export default watchListSlice.reducer;