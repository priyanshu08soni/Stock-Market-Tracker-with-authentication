import React, { useContext, useEffect, useState } from "react";
import Chart from "./Chart";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchQuote, fetchStockDetails } from "../api/stock-api";
import {  useDispatch, useSelector } from "react-redux";

import WatchList from "./WatchList";
import { getWatchList } from "../features/watchlist/watchListSlice";


const Home = () => {
  const getTokenFromLocalStorage=localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")):null;
  const config2={
    headers:{
      Authorization: `Bearer ${getTokenFromLocalStorage!==null?getTokenFromLocalStorage.token:""}`
    },
    Accept:"application/json"
  };
  const { darkMode } = useContext(ThemeContext);
  const dispatch=useDispatch();
  
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});
  const authState = useSelector((state) => state?.auth?.user);
  
  useEffect(() => {
    if(authState!==null){
      const updateStockDetails = async () => {
        try {
          const result = await fetchStockDetails(stockSymbol);
          setStockDetails(result);
        } catch (error) {
          setStockDetails({});
        }
      };
      const updateStockOverview = async () => {
        try {
          const result = await fetchQuote(stockSymbol);
          setQuote(result);
        } catch (error) {
          setQuote({});
          console.log(error);
        }
      };
      updateStockDetails();
      updateStockOverview();
    }else{
      setStockDetails({});
      setQuote({})
    }
  }, [authState,stockSymbol]);
  useEffect(()=>{
    if(authState!==null){
      dispatch(getWatchList(config2));
    }
  },[authState,config2]);
  return (
    <div
      className={`h-screen  custom-scrollbar grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-10 px-10 pb-10 font-roboto ${
        darkMode ? "bg-gray-900 text-gray-300" : " bg-blue-50"
      } `}
    >
      <div className="col-span-2 md:col-span-2 xl:col-span-3 row-span-2 mt-3">
        <Header name={stockDetails?.name} />
      </div>
      <div className="col-span-2 row-span-2 md:row-span-4 xl:row-span-6">
        <Chart>Chart</Chart>
      </div>
      <div className="col-span-2 xl:col-span-1 row-span-2 md:row-span-2">
        <Overview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <div className="col-span-2 xl:col-span-1 row-span-2 xl:row-span-4">
        <Details details={stockDetails} />
      </div>
      <div className="col-span-2 md:col-span-2 xl:col-span-3 row-span-2">
        <WatchList/>
      </div>
    </div>
  );
};

export default Home;
