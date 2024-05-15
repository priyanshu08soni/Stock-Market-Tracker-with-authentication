import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Details = ({details}) => {
  const {darkMode}=useContext(ThemeContext);
  const detailsList ={
    name:"Name",
    country:"Country",
    currency:"Currency",
    exchange:"Exchange",
    ipo:"IPO Date",
    marketCapitalization:"Market Capitalization",
    finnhubIndustry:"Industry",
  }
  const convertMillionToBillion=(number)=>{
    return (number/1000).toFixed(2);
  }
  return (
    <div className={`w-full h-full rounded-md relative p-8 border-2 custom-scrollbar ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-neutral-200"} `}
    style={{border:"1px solid lightgray", color:"gray",overflow:"auto"}}
    >
      <h1 className="fs-4" style={{padding:"10px"}} >Details</h1>
      <ul className={`w-full h-full flex flex-col justify-between divide-y-1 ${darkMode?"divide-gray-800":null}`} >
        {
          Object.keys(detailsList).map((item)=>{
            return <li key={item} className="flex-1 flex justify-between items-center" 
            style={{margin:"4px" , padding:"10px",borderRadius:"5px"}}>
              <span >{detailsList[item]}</span>
              <span >{item==="marketCapitalization"?`${convertMillionToBillion(details[item])}B`: details[item]}</span>
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default Details;
