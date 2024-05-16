import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import StockContext from '../context/StockContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchList } from '../features/watchlist/watchListSlice';
import { useNavigate } from "react-router-dom";
const SearchResult = ({results}) => {
  const getTokenFromLocalStorage=localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")):null;
  const config2={
    headers:{
      Authorization: `Bearer ${getTokenFromLocalStorage!==null?getTokenFromLocalStorage.token:""}`
    },
    Accept:"application/json"
  };
  const {darkMode} =useContext(ThemeContext);
  const authState = useSelector((state) => state?.auth?.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {setStockSymbol} =useContext(StockContext);
  const handleWatchList=(title)=>{
    if(authState===null){
      navigate("/login");
    }else{
      const data={config2:config2,title:title};
      dispatch(addToWatchList(data));
    }
  }
  return (
    <ul className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll overflow-hidden  ${darkMode?"bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark":"bg-white border-neutral-200 custom-scrollbar"}`} >
        {
           results && results.map((item)=>{
                return (
                <li key={item.symbol} className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md ${darkMode?"hover:bg-indigo-600":"hover:bg-indigo-100"}`} 
                  onClick={()=>{
                    setStockSymbol(item.symbol);
                    handleWatchList(item.symbol);
                  }}
                >
                    <span>{item.symbol}</span>
                    <span>{item.description}</span>
                </li>
                )
            })
        }
    </ul>
  )
}

export default SearchResult
