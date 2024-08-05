import React, { useContext } from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";
import ThemeContext from "../context/ThemeContext";
import img from  "../assets/Stock-icon.png";
const Header = ({ name }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div>
        <div>
          <img style={{width:"70px",marginTop:"5px"}} src={img} alt="" />
        </div>
        <div
          className={`w-full h-full rounded-md relative pb-4  ${
            darkMode ? "bg-gray-900" : "bg-blue-100"
          } `}
          style={{ display: "flex", alignItems: "center",justifyContent:"space-between", gap: "50px" }}
        >
          <h1 className="text-xl xl:text-3xl 2xl:text-4xl  ps-2">{name}</h1>
          <Search />
        </div>
        <ThemeIcon />
      </div>
    </>
  );
};

export default Header;
