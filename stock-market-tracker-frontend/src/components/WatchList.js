import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import StockContext from "../context/StockContext";
import { addToWatchList } from "../features/watchlist/watchListSlice";
const WatchList = () => {
  const getTokenFromLocalStorage=localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")):null;
  const config2={
    headers:{
      Authorization: `Bearer ${getTokenFromLocalStorage!==null?getTokenFromLocalStorage.token:""}`
    },
    Accept:"application/json"
  };
  const { darkMode } = useContext(ThemeContext);
  const wlState = useSelector((state) => state?.watchlist?.watchlist?.watchlist);
  const dispatch=useDispatch();
  const {setStockSymbol} =useContext(StockContext);
  const handleWatchList=(title)=>{
    const data={config2:config2,title:title};
    dispatch(addToWatchList(data));
  }
  const arr=[];
  for (let i = wlState?.length-1; i >= 0; i--) {
    const element = wlState[i];
    arr.push(element[0]);
  }
  return (
    <>
    <div
      className={`w-full h-full rounded-md relative p-8 border-2 custom-scrollbar ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      } `}
      style={{ border: "1px solid lightgray", color: "gray", overflow: "auto" }}
      >
      <h1 className="fs-4" style={{padding:"10px"}} >Previous Stock Searches</h1>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1 ${
          darkMode ? "divide-gray-800" : null
        }`}
        >
        {arr &&
          arr?.map((item,index) => {
            return <li 
              key={index} 
              className={`cursor-pointer flex-1 flex justify-between items-center ${darkMode?"hover:bg-indigo-600 text-white ":"hover:bg-indigo-100"}`} 
              style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}
              onClick={()=>{
                setStockSymbol(item);
                handleWatchList(item);
              }}
            >
              {item}
            </li>
          })}
      </ul>
    </div>
          </>
  );
};

export default WatchList;
