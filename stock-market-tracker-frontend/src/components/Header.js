import React, { useContext } from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";
import ThemeContext from "../context/ThemeContext";
const Header = ({ name }) => {
  const {darkMode}=useContext(ThemeContext);
  return (
    <>
      <div className={`w-full h-full rounded-md relative py-4 border-2 ${darkMode?"bg-gray-900 border-gray-900":"bg-blue-100 border-neutral-200"} `}
        style={{display:"flex",alignItems:"center",gap:"50px"}}
      >
        <div>
          <h1 className="text-xl xl:text-4xl 2xl:text-5xl pt-4">{name}</h1>
          <Search/>
        </div>
          
        <ThemeIcon/>
      </div>
    </>
  );
};

export default Header;
