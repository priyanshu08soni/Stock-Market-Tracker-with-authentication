import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Overview = ({symbol, price, change, changePercent, currency}) => {
  const {darkMode}=useContext(ThemeContext);
  return (
    <div className={`w-full h-full rounded-md relative p-8 border-2 bg-gray-300 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
    style={{ color:"gray",overflow:"auto"}}
    >
      <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-lg 2xl:text-xl" >{symbol}</span>
      <div className="w-full h-full flex items-center justify-around" >
        <span className="text-xl xl:text-2xl 2xl:text-3xl flex items-center ps-5" >
          ${price}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2" >{currency}</span>
        </span  >
        <span className={`text-lg xl:text-xl 2xl:text-2xl ${change>0?"text-line-500":"text-red-500"}`} >
          {change} (<span>{changePercent}%</span>)
        </span>
      </div>
    </div>
  );
};

export default Overview;
