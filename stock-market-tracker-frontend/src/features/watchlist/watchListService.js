import axios from "axios";
import { base_url } from "../../utils/base_url"
const addToWatchList=async(data)=>{
    const response=await axios.put(`${base_url}watchlist`,{title:data.title},data.config2);
    if(response?.data){
        return response?.data;
    }
}
const getWatchList=async(data)=>{
    const response=await axios.get(`${base_url}watchlist`,data);
    return response?.data;
}
const watchListService={
    addToWatchList,
    getWatchList,
}

export default watchListService;